import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client/react";
import {
  WALLET_BALANCES,
  MY_BANK_ACCOUNTS,
  ADD_BANK_ACCOUNT,
  SET_DEFAULT_BANK_ACCOUNT,
  DELETE_BANK_ACCOUNT,
  REQUEST_WITHDRAWAL,
} from "@/graphql";
import type {
  WalletBalancesQuery,
  MyBankAccountsQuery,
  AddBankAccountMutation,
  AddBankAccountMutationVariables,
  SetDefaultBankAccountMutation,
  SetDefaultBankAccountMutationVariables,
  DeleteBankAccountMutation,
  DeleteBankAccountMutationVariables,
  RequestWithdrawalMutation,
  RequestWithdrawalMutationVariables,
} from "@/gql/graphql";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Badge,
} from "@/components";
import { toast } from "sonner";
import { Landmark, Plus, Trash2, Star } from "lucide-react";

const PayoutsPage = () => {
  const [bankCode, setBankCode] = useState("058");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [withdrawAmountNaira, setWithdrawAmountNaira] = useState("");
  const [selectedBankId, setSelectedBankId] = useState("");

  const { data: walletData, refetch: refetchWallet } =
    useQuery<WalletBalancesQuery>(WALLET_BALANCES);
  const {
    data: banksData,
    loading: banksLoading,
    refetch: refetchBanks,
  } = useQuery<MyBankAccountsQuery>(MY_BANK_ACCOUNTS);

  const [addBankAccount, { loading: addingBank }] = useMutation<
    AddBankAccountMutation,
    AddBankAccountMutationVariables
  >(ADD_BANK_ACCOUNT, {
    onCompleted: () => {
      toast.success("Bank account added!");
      setAccountNumber("");
      setAccountName("");
      refetchBanks();
    },
    onError: (err) => toast.error(err.message),
  });

  const [setDefaultBank] = useMutation<
    SetDefaultBankAccountMutation,
    SetDefaultBankAccountMutationVariables
  >(SET_DEFAULT_BANK_ACCOUNT, {
    onCompleted: () => {
      toast.success("Default bank updated");
      refetchBanks();
    },
    onError: (err) => toast.error(err.message),
  });

  const [deleteBank] = useMutation<
    DeleteBankAccountMutation,
    DeleteBankAccountMutationVariables
  >(DELETE_BANK_ACCOUNT, {
    onCompleted: () => {
      toast.success("Bank account removed");
      refetchBanks();
    },
    onError: (err) => toast.error(err.message),
  });

  const [requestWithdrawal, { loading: withdrawing }] = useMutation<
    RequestWithdrawalMutation,
    RequestWithdrawalMutationVariables
  >(REQUEST_WITHDRAWAL, {
    onCompleted: (res) => {
      toast.success(res.requestWithdrawal.message || "Withdrawal requested!");
      setWithdrawAmountNaira("");
      refetchWallet();
    },
    onError: (err) => toast.error(err.message),
  });

  const availableNaira =
    (walletData?.walletBalances?.availableMinorUnits || 0) / 100;
  const banks = banksData?.myBankAccounts || [];
  const defaultBank = banks.find((b) => b.isDefault) || banks[0];

  const handleAddBank = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountNumber.trim() || !accountName.trim()) {
      toast.error("Please fill in bank details");
      return;
    }
    await addBankAccount({
      variables: {
        input: {
          bankCode: bankCode.trim(),
          accountNumber: accountNumber.trim(),
          accountName: accountName.trim(),
          currency: "NGN",
          isDefault: banks.length === 0,
        },
      },
    });
  };

  const handleWithdraw = async (e: React.FormEvent) => {
    e.preventDefault();
    const targetBankId = selectedBankId || defaultBank?.id;
    if (!targetBankId) {
      toast.error("Please add or select a bank account first");
      return;
    }
    const amount = Number(withdrawAmountNaira);
    if (!amount || amount <= 0) {
      toast.error("Enter a valid withdrawal amount");
      return;
    }
    await requestWithdrawal({
      variables: {
        input: {
          bankAccountId: targetBankId,
          amountMinorUnits: Math.round(amount * 100),
          currency: "NGN",
        },
      },
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Payouts & Bank Accounts</h1>
        <p className="text-sm text-gray-500">
          Available Balance:{" "}
          <span className="font-semibold text-green-600">
            ₦{availableNaira.toLocaleString()}
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Request Withdrawal */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Request Withdrawal</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleWithdraw} className="space-y-4">
              <div>
                <label className="text-sm font-medium block mb-1">
                  Destination Bank Account
                </label>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={selectedBankId || defaultBank?.id || ""}
                  onChange={(e) => setSelectedBankId(e.target.value)}
                >
                  <option value="">Select bank account</option>
                  {banks.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.accountName} ({b.accountNumber})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">
                  Amount (₦ NGN)
                </label>
                <Input
                  type="number"
                  placeholder="e.g. 5000"
                  value={withdrawAmountNaira}
                  onChange={(e) => setWithdrawAmountNaira(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                disabled={withdrawing || banks.length === 0}
                className="w-full"
              >
                {withdrawing ? "Processing..." : "Withdraw Funds"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Add Bank Account */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Landmark className="h-5 w-5" />
              Add Bank Account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddBank} className="space-y-4">
              <div>
                <label className="text-sm font-medium block mb-1">
                  Bank Code (e.g. 058 GTBank, 044 Access)
                </label>
                <Input
                  placeholder="058"
                  value={bankCode}
                  onChange={(e) => setBankCode(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">
                  Account Number (10 digits)
                </label>
                <Input
                  placeholder="0123456789"
                  maxLength={10}
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">
                  Account Holder Name
                </label>
                <Input
                  placeholder="Full name on account"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                />
              </div>
              <Button type="submit" variant="outline" disabled={addingBank} className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                {addingBank ? "Saving..." : "Save Bank Account"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Saved Bank Accounts List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Saved Bank Accounts</CardTitle>
        </CardHeader>
        <CardContent>
          {banksLoading ? (
            <p className="text-sm text-gray-500">Loading bank accounts...</p>
          ) : banks.length === 0 ? (
            <p className="text-sm text-gray-500">No bank accounts saved yet.</p>
          ) : (
            <div className="space-y-3">
              {banks.map((bank) => (
                <div
                  key={bank.id}
                  className="p-4 border rounded-lg flex items-center justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">
                        {bank.accountName}
                      </span>
                      {bank.isDefault && (
                        <Badge className="bg-green-100 text-green-800">
                          Default
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">
                      Account: {bank.accountNumber} • Bank Code: {bank.bankCode}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {!bank.isDefault && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() =>
                          setDefaultBank({ variables: { id: bank.id } })
                        }
                      >
                        <Star className="h-4 w-4 mr-1" />
                        Set Default
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        deleteBank({ variables: { id: bank.id } })
                      }
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PayoutsPage;