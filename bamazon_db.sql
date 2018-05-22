DROP DATABASE IF EXISTS bamazon_db;

-- database creation

CREATE DATABASE bamazon_db;
USE bamazon_db;

-- table creation --

CREATE TABLE products (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
    PRIMARY KEY (id)
    );
    
-- product data --

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Bottled Water", "Grocery", 1.00, 32), 
		("Red Bull", "Grocery", 3.00, 12), 
        ("Screw Driver", "Hardware", 4.50, 14), 
        ("Hammer", "Hardware", 6.23, 12), 
        ("Wire Cutter", "Hardware", 4.50, 11), 
        ("Sprint Shoes", "Clothing", 18.00, 8), 
        ("Gold Braclet", "Clothing", 12.83, 2), 
        ("Ribbon", "Clothing", 1.00, 1), 
        ("Mop", "Home Supplies", 18.79, 7), 
        ("Super Ball", "Toys", 0.50, 77), 
        ("Work Glove", "HardWare", 7.88, 7);

SELECT * FROM products;