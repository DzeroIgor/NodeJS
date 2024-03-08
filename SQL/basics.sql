-- DDL COMMANDS / DATABASE

-- structure
--ACTION SUBJECT id OPTIONS

-- help about something
\h create database;

-- list of databases
\l

-- create database
CREATE DATABASE mytest;

-- remove database
DROP DATABASE mytest;

-- DDL COMMANDS / TABLE
CREATE TABLE products (
    -- name type option
    id integer PRIMARY KEY,
    name character varying(30),
    price integer
);

-- remove table
DROP TABLE products;

------------------------------------------
INSERT INTO products VALUES (1, 'iPhone', 1000);
INSERT INTO products VALUES (2, 'Samsung', 900);
INSERT INTO products VALUES (3, 'Mac', 2000);

-- show items from table
SELECT * FROM products;
SELECT * FROM products WHERE price >= 1000;

-- edit table
UPDATE products SET price = 1050 WHERE id = 1;

DELETE FROM products WHERE id = 3;


CREATE TABLE products (
    id SERIAL,
    name character varying(30)
);
CREATE TABLE money (
    amount integer,
    currency character varying(3),
    product_id integer
);

INSERT INTO products (name) VALUES ('iPhone');   -- datorita la SERIAL id creste automatic
INSERT INTO products (name) VALUES ('Samsung');
INSERT INTO products (name) VALUES ('Mac');


INSERT INTO money VALUES (1100, 'USD', 1);
INSERT INTO money VALUES (900, 'USD', 2);
INSERT INTO money VALUES (2000, 'USD', 3);

-- ALTER TABLE
ALTER TABLE money 
ADD CONSTRAINT money_product_fk 
FOREIGN KEY (product_id) 
REFERENCES products (id);

-- Delete the existing external key constraint
ALTER TABLE money
DROP CONSTRAINT money_product_fk;

-- Add external key constraint with option ON DELETE CASCADE
ALTER TABLE money
ADD CONSTRAINT money_product_fk 
FOREIGN KEY (product_id) 
REFERENCES products (id)
ON DELETE CASCADE;  -- link between tables and if you delete one product from products, the price is also deleted from money.


SELECT products.id, products.name, money.amount, money.currency FROM
products JOIN money
ON money.product_id = products.id;


SELECT products.id, products.name, money.amount, money.currency FROM
products JOIN money
ON money.product_id = products.id;

SELECT products.id, products.name, FLOOR(money.amount / 1.2) AS "amount", 'EUR' as "currency" FROM
products JOIN money
ON money.product_id = products.id;


-- ADVANCED update / delete
-- +10% price, price < 1500
UPDATE money SET amount = amount * 1.1 WHERE amount < 1500;

DELETE FROM money WHERE product_id = 2;

-- remove the price for 'iPhone'
DELETE FROM money
WHERE product_id IN (SELECT id FROM products WHERE name = 'iPhone');