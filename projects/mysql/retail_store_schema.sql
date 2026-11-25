-- ============================================================
-- Retail Store & Billing Database Schema (MySQL 8 / 3NF)
-- Author: Orlando Vivas
-- ============================================================

CREATE DATABASE IF NOT EXISTS retail_billing;
USE retail_billing;

CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name   VARCHAR(120) NOT NULL,
    phone       VARCHAR(25)  NOT NULL,
    email       VARCHAR(160) UNIQUE,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    product_id    INT AUTO_INCREMENT PRIMARY KEY,
    sku           VARCHAR(32)    NOT NULL UNIQUE,
    product_name  VARCHAR(120)   NOT NULL,
    category      ENUM('Medical', 'Grocery', 'Beverages') NOT NULL,
    unit_price    DECIMAL(10, 2) NOT NULL CHECK (unit_price >= 0),
    stock_qty     INT            NOT NULL DEFAULT 0 CHECK (stock_qty >= 0),
    reorder_level INT            NOT NULL DEFAULT 10
);

CREATE TABLE invoices (
    invoice_id   INT AUTO_INCREMENT PRIMARY KEY,
    bill_number  VARCHAR(20)    NOT NULL UNIQUE,
    customer_id  INT            NOT NULL,
    subtotal     DECIMAL(10, 2) NOT NULL,
    tax_amount   DECIMAL(10, 2) NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    issued_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_invoices_customer
        FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE invoice_items (
    item_id     INT AUTO_INCREMENT PRIMARY KEY,
    invoice_id  INT            NOT NULL,
    product_id  INT            NOT NULL,
    quantity    INT            NOT NULL CHECK (quantity > 0),
    unit_price  DECIMAL(10, 2) NOT NULL,
    CONSTRAINT fk_items_invoice
        FOREIGN KEY (invoice_id) REFERENCES invoices(invoice_id) ON DELETE CASCADE,
    CONSTRAINT fk_items_product
        FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- 1. Low-stock alert report
SELECT sku, product_name, category, stock_qty, reorder_level
FROM products
WHERE stock_qty <= reorder_level
ORDER BY stock_qty ASC;

-- 2. Revenue summary by product category
SELECT
    p.category,
    SUM(ii.quantity) AS units_sold,
    ROUND(SUM(ii.quantity * ii.unit_price), 2) AS total_revenue
FROM invoice_items ii
INNER JOIN products p ON ii.product_id = p.product_id
GROUP BY p.category
ORDER BY total_revenue DESC;
