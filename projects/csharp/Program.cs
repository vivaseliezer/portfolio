using System;

namespace OrlandoVivas.CSharpLab
{
    public static class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("=== Orlando Vivas — C# / .NET 10 Project Suite ===\n");
            InventoryManager.RunDemo();
            Console.WriteLine();
            BankAccount.RunDemo();
            Console.WriteLine();
            TaskBoardManager.RunDemo();
            Console.WriteLine();
            SecurityToolkit.RunDemo();
            Console.WriteLine();
            ExpenseAnalytics.RunDemo();
            Console.WriteLine();
            MiniJsonApi.RunSelfCheck();
            Console.WriteLine("\nAll 6 C# modules executed cleanly.");
        }
    }
}
