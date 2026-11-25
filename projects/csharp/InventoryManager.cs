using System;
using System.Collections.Generic;
using System.Linq;

namespace OrlandoVivas.CSharpLab
{
    public record Product(int Id, string Sku, string Name, decimal Price, int StockQty, int ReorderLevel);

    public class InventoryManager
    {
        private readonly List<Product> _products = new();

        public void AddProduct(Product product)
        {
            if (string.IsNullOrWhiteSpace(product.Sku))
                throw new ArgumentException("SKU is required.", nameof(product));
            if (product.Price < 0 || product.StockQty < 0)
                throw new ArgumentOutOfRangeException(nameof(product), "Price and stock cannot be negative.");
            _products.Add(product);
        }

        public IEnumerable<Product> GetLowStockItems() =>
            _products
                .Where(p => p.StockQty <= p.ReorderLevel)
                .OrderBy(p => p.StockQty);

        public decimal GetTotalInventoryValue() =>
            _products.Sum(p => p.Price * p.StockQty);

        public Product? FindBySku(string sku) =>
            _products.FirstOrDefault(p =>
                p.Sku.Equals(sku, StringComparison.OrdinalIgnoreCase));

        public static void RunDemo()
        {
            var manager = new InventoryManager();
            manager.AddProduct(new Product(1, "MED-101", "Hand Sanitizer", 4.50m, 8, 10));
            manager.AddProduct(new Product(2, "GRO-204", "Organic Rice 5lb", 10.00m, 24, 12));
            manager.AddProduct(new Product(3, "DRK-305", "Sparkling Water Pack", 6.75m, 3, 8));

            Console.WriteLine($"[Inventory] Total Value: ${manager.GetTotalInventoryValue():F2}");
            foreach (var item in manager.GetLowStockItems())
                Console.WriteLine($"  Low Stock -> [{item.Sku}] {item.Name}: {item.StockQty}/{item.ReorderLevel}");
        }
    }
}
