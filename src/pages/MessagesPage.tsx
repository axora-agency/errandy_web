import { useState, useEffect } from "react";
import { useQuery, useMutation, useSubscription } from "@apollo/client/react";
import {
  MY_CHAT_THREADS,
  CHAT_MESSAGES,
  SEND_MESSAGE,
  MESSAGE_SENT_SUBSCRIPTION,
} from "@/graphql";
import type {
  MyChatThreadsQuery,
  ChatMessagesQuery,
  ChatMessagesQueryVariables,
  SendMessageMutation,
  SendMessageMutationVariables,
  MessageSentSubscription,
  MessageSentSubscriptionVariables,
} from "@/gql/graphql";
import { useUserStore } from "@/store/userStore";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Badge,
} from "@/components";
import { MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";

const MessagesPage = () => {
  const { user } = useUserStore();
  const currentId = user?.partyId || user?.id || "";
  const [selectedThreadId, setSelectedThreadId] = useState<string | null>(null);
  const [content, setContent] = useState("");

  const { data: threadsData, loading: threadsLoading } =
    useQuery<MyChatThreadsQuery>(MY_CHAT_THREADS);

  const threads = threadsData?.myChatThreads || [];

  useEffect(() => {
    if (!selectedThreadId && threads.length > 0) {
      setSelectedThreadId(threads[0].id);
    }
  }, [threads, selectedThreadId]);

  const {
    data: messagesData,
    loading: messagesLoading,
    refetch: refetchMessages,
  } = useQuery<ChatMessagesQuery, ChatMessagesQueryVariables>(CHAT_MESSAGES, {
    variables: { threadId: selectedThreadId || "", limit: 50 },
    skip: !selectedThreadId,
  });

  useSubscription<MessageSentSubscription, MessageSentSubscriptionVariables>(
    MESSAGE_SENT_SUBSCRIPTION,
    {
      variables: { threadId: selectedThreadId || "" },
      skip: !selectedThreadId,
      onData: () => {
        refetchMessages();
      },
    }
  );

  const [sendMessage, { loading: sending }] = useMutation<
    SendMessageMutation,
    SendMessageMutationVariables
  >(SEND_MESSAGE, {
    onCompleted: () => {
      setContent("");
      refetchMessages();
    },
    onError: (err) => toast.error(err.message),
  });

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !selectedThreadId) return;
    await sendMessage({
      variables: {
        input: {
          threadId: selectedThreadId,
          senderId: currentId,
          content: content.trim(),
          isProviderSender: user?.activeRole !== "CLIENT",
        },
      },
    });
  };

  const messages = messagesData?.chatMessages?.items || [];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[75vh]">
        {/* Threads Sidebar */}
        <Card className="flex flex-col overflow-hidden">
          <CardHeader className="border-b py-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Conversations
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-0">
            {threadsLoading ? (
              <div className="p-4 text-sm text-gray-500">Loading chats...</div>
            ) : threads.length === 0 ? (
              <div className="p-6 text-center text-sm text-gray-500">
                No active errand chat threads yet.
              </div>
            ) : (
              threads.map((thread) => (
                <button
                  key={thread.id}
                  onClick={() => setSelectedThreadId(thread.id)}
                  className={`w-full text-left p-4 border-b transition-colors ${
                    selectedThreadId === thread.id
                      ? "bg-blue-50 border-l-4 border-l-blue-600"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">
                      Errand #{thread.errandId.slice(0, 8)}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {thread.closedAt ? "Closed" : "Active"}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Created {new Date(thread.createdAt).toLocaleDateString()}
                  </p>
                </button>
              ))
            )}
          </CardContent>
        </Card>

        {/* Active Chat Thread */}
        <Card className="md:col-span-2 flex flex-col overflow-hidden">
          <CardHeader className="border-b py-4">
            <CardTitle className="text-lg">
              {selectedThreadId
                ? `Thread ${selectedThreadId.slice(0, 8)}...`
                : "Select a conversation"}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-3">
            {!selectedThreadId ? (
              <div className="h-full flex items-center justify-center text-gray-400 text-sm">
                Choose a conversation from the sidebar to start messaging.
              </div>
            ) : messagesLoading ? (
              <div className="text-sm text-gray-500">Loading messages...</div>
            ) : messages.length === 0 ? (
              <div className="text-sm text-gray-500 text-center py-8">
                No messages yet. Say hello!
              </div>
            ) : (
              messages.map((msg) => {
                const isMine = msg.senderId === currentId;
                return (
                  <div
                    key={msg.id}
                    className={`flex ${isMine ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                        isMine
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p>{msg.content}</p>
                      <span
                        className={`block text-[10px] mt-1 ${
                          isMine ? "text-blue-100" : "text-gray-400"
                        }`}
                      >
                        {new Date(msg.sentAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </CardContent>
          {selectedThreadId && (
            <form
              onSubmit={handleSend}
              className="p-3 border-t flex items-center gap-2"
            >
              <Input
                placeholder="Type a message..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" disabled={sending || !content.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};

export default MessagesPage;