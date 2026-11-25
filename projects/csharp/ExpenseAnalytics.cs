using System;
using System.Collections.Generic;
using System.Linq;

namespace OrlandoVivas.CSharpLab
{
    public record ExpenseEntry(DateOnly Date, string Category, string Description, decimal Amount);

    public class ExpenseAnalytics
    {
        private readonly List<ExpenseEntry> _expenses = new();
        private readonly Dictionary<string, decimal> _budgets = new(StringComparer.OrdinalIgnoreCase);

        public void SetBudget(string category, decimal limit) => _budgets[category] = limit;
        public void AddExpense(ExpenseEntry entry) => _expenses.Add(entry);

        public Dictionary<string, decimal> GetCategoryTotals() =>
            _expenses
                .GroupBy(e => e.Category, StringComparer.OrdinalIgnoreCase)
                .ToDictionary(g => g.Key, g => g.Sum(x => x.Amount), StringComparer.OrdinalIgnoreCase);

        public IEnumerable<string> GetOverBudgetAlerts()
        {
            var totals = GetCategoryTotals();
            foreach (var (cat, limit) in _budgets)
            {
                if (totals.TryGetValue(cat, out decimal spent) && spent > limit)
                    yield return $"{cat}: spent ${spent:F2} (limit ${limit:F2})";
            }
        }

        public static void RunDemo()
        {
            var tracker = new ExpenseAnalytics();
            tracker.SetBudget("Food", 350m);
            tracker.SetBudget("Cloud", 50m);

            tracker.AddExpense(new ExpenseEntry(new DateOnly(2026, 11, 3), "Food", "Groceries", 185.40m));
            tracker.AddExpense(new ExpenseEntry(new DateOnly(2026, 11, 12), "Food", "Dinner", 190.00m));
            tracker.AddExpense(new ExpenseEntry(new DateOnly(2026, 11, 15), "Cloud", "Domain renewal", 14.99m));

            var totals = tracker.GetCategoryTotals();
            Console.WriteLine($"[Expenses] Total Spent: ${totals.Values.Sum():F2}");
            foreach (var alert in tracker.GetOverBudgetAlerts())
                Console.WriteLine($"  Alert -> {alert}");
        }
    }
}
