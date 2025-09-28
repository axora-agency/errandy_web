import { useState, useRef, useEffect } from 'react';
import { Bell, Check, X, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock notification data - replace with actual data from your store/API
const mockNotifications = [
  {
    id: '1',
    title: 'New errand application',
    message: 'Sarah Johnson applied for your cleaning errand',
    time: '5 minutes ago',
    read: false,
    type: 'application'
  },
  {
    id: '2',
    title: 'Payment received',
    message: 'You received $45.00 for lawn mowing service',
    time: '1 hour ago',
    read: false,
    type: 'payment'
  },
  {
    id: '3',
    title: 'Errand completed',
    message: 'Your grocery shopping errand has been completed',
    time: '3 hours ago',
    read: true,
    type: 'completion'
  },
  {
    id: '4',
    title: 'New message',
    message: 'John Doe sent you a message about the plumbing job',
    time: '1 day ago',
    read: true,
    type: 'message'
  },
  {
    id: '5',
    title: 'Profile update',
    message: 'Your profile has been successfully updated',
    time: '2 days ago',
    read: true,
    type: 'system'
  }
];

const NotificationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  const menuRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(n => ({ ...n, read: true }))
    );
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'application': return '📋';
      case 'payment': return '💰';
      case 'completion': return '✅';
      case 'message': return '💬';
      case 'system': return '⚙️';
      default: return '🔔';
    }
  };

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <Bell className="size-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs font-medium rounded-full size-5 flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-96 bg-popover text-popover-foreground overflow-hidden rounded-md border shadow-md dark:shadow-xl dark:shadow-primary/20 dark:border-primary/30 z-50 max-h-96">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <h3 className="font-semibold text-sm">Notifications</h3>
            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-xs text-primary hover:text-primary/80"
                >
                  Mark all as read
                </button>
              )}
              <button className="p-1 hover:bg-muted rounded">
                <Settings className="size-4" />
              </button>
            </div>
          </div>

          {/* Notifications List */}
          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="px-4 py-6 text-center text-muted-foreground">
                <Bell className="size-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No notifications</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "flex items-start gap-3 px-4 py-3 hover:bg-muted/50 border-b border-border/50 last:border-b-0",
                    !notification.read && "bg-primary/5"
                  )}
                >
                  <div className="flex-shrink-0 text-lg mt-0.5">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className={cn(
                          "text-sm font-medium truncate",
                          !notification.read && "font-semibold"
                        )}>
                          {notification.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {notification.time}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="p-1 hover:bg-muted rounded text-muted-foreground hover:text-foreground"
                            title="Mark as read"
                          >
                            <Check className="size-3" />
                          </button>
                        )}
                        <button
                          onClick={() => removeNotification(notification.id)}
                          className="p-1 hover:bg-muted rounded text-muted-foreground hover:text-foreground"
                          title="Remove notification"
                        >
                          <X className="size-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {notifications.length > 0 && (
            <div className="px-4 py-2 border-t bg-muted/20">
              <button
                className="text-xs text-primary hover:text-primary/80 w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                View all notifications
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { NotificationMenu };