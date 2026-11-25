using System;
using System.Collections.Generic;
using System.Linq;

namespace OrlandoVivas.CSharpLab
{
    public record BankTransaction(DateTime Timestamp, string Type, decimal Amount, decimal BalanceAfter, string Note);

    public class BankAccount
    {
        public string AccountNumber { get; }
        public string Owner { get; }
        public decimal Balance { get; private set; }
        private readonly List<BankTransaction> _ledger = new();

        public IReadOnlyList<BankTransaction> Ledger => _ledger;

        public BankAccount(string accountNumber, string owner, decimal openingBalance = 0m)
        {
            if (openingBalance < 0) throw new ArgumentOutOfRangeException(nameof(openingBalance));
            AccountNumber = accountNumber;
            Owner = owner;
            Balance = openingBalance;
            if (openingBalance > 0)
                _ledger.Add(new BankTransaction(DateTime.UtcNow, "OPEN", openingBalance, Balance, "Opening deposit"));
        }

        public void Deposit(decimal amount, string note = "Deposit")
        {
            if (amount <= 0) throw new ArgumentOutOfRangeException(nameof(amount), "Deposit must be positive.");
            Balance += amount;
            _ledger.Add(new BankTransaction(DateTime.UtcNow, "CREDIT", amount, Balance, note));
        }

        public void Withdraw(decimal amount, string note = "Withdrawal")
        {
            if (amount <= 0) throw new ArgumentOutOfRangeException(nameof(amount), "Withdrawal must be positive.");
            if (amount > Balance) throw new InvalidOperationException("Insufficient funds.");
            Balance -= amount;
            _ledger.Add(new BankTransaction(DateTime.UtcNow, "DEBIT", -amount, Balance, note));
        }

        public void TransferTo(BankAccount destination, decimal amount, string note = "Transfer")
        {
            Withdraw(amount, $"To {destination.AccountNumber}: {note}");
            destination.Deposit(amount, $"From {AccountNumber}: {note}");
        }

        public decimal ApplyMonthlyInterest(decimal annualRate)
        {
            decimal interest = Math.Round(Balance * (annualRate / 12m), 2);
            if (interest > 0) Deposit(interest, $"Monthly interest ({annualRate:P1} APR)");
            return interest;
        }

        public static void RunDemo()
        {
            var checking = new BankAccount("CHK-1001", "Orlando Vivas", 1200.00m);
            var savings = new BankAccount("SAV-2002", "Orlando Vivas", 500.00m);
            checking.Deposit(450.00m, "Freelance web work");
            checking.TransferTo(savings, 300.00m, "Emergency fund");
            savings.ApplyMonthlyInterest(0.045m);

            Console.WriteLine($"[Banking] {checking.AccountNumber}: ${checking.Balance:F2} ({checking.Ledger.Count} tx)");
            Console.WriteLine($"[Banking] {savings.AccountNumber}: ${savings.Balance:F2} ({savings.Ledger.Count} tx)");
        }
    }
}
