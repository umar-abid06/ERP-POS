CREATE DATABASE mini_erp;

CREATE TABLE products(
    id INTEGER PRIMARY KEY,
    barcode VARCHAR (15) NOT NULL,
    name VARCHAR (50) NOT NULL,
    cost_price INT NOT NULL,
    quantity INT NOT NULL,
    sell_price INT NOT NULL,
)   