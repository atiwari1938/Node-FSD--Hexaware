/* Creating Database*/
CREATE DATABASE ShoppingCartDb;
USE ShoppingCartDb;

/* Creating the products table*/
CREATE TABLE Products (
    ProductId INT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    QuantityInStock INT NOT NULL,
    UnitPrice DECIMAL(10, 2) NOT NULL CHECK (UnitPrice > 0),
    Category VARCHAR(100) NOT NULL
);
/* Creating the User table*/
CREATE TABLE Users (
    UserId INT PRIMARY KEY,
    UserName VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    ContactNumber VARCHAR(20),
    Address VARCHAR(255)
);
/* Creating the Cart table*/
CREATE TABLE Cart (
    CartId INT PRIMARY KEY,
    ProductId INT,
    Quantity INT NOT NULL CHECK (Quantity > 0),
    UserId INT NOT NULL,
    FOREIGN KEY (ProductId) REFERENCES Products(ProductId),
    FOREIGN KEY (UserId) REFERENCES Users(UserId)
);

/* Creating the Cart table*/
CREATE TABLE Orders (
    OrderId INT PRIMARY KEY,
    CartId INT NOT NULL,
    OrderDate DATE,
    UserId INT,
    FOREIGN KEY (CartId) REFERENCES Cart(CartId),
    FOREIGN KEY (UserId) REFERENCES Users(UserId)
);

/* Inserting records in User table*/
INSERT INTO Users (UserId, UserName, Password, ContactNumber, Address) VALUES
(1, 'Ankit', 'ankit123', '1234567890', 'Delhi'),
(2, 'Amit', 'amit222', '9876543210', 'Mumbai'),
(3, 'Jay', 'jay333', '2344569870', 'Pune'),
(4, 'Mohan', 'mohan444', '5555555555', 'Chennai'),
(5, 'Rohit', 'rohit555', '1111111111', 'Goa');

/* Inserting invaild record*/
INSERT INTO Users (UserId, UserName, Password, ContactNumber, Address) VALUES
(6,NULL,'1212121','1234567890','Jaipur');
Error Code: 1048. Column 'UserName' cannot be null

/* Inserting records in Products table*/
INSERT INTO Products (ProductId, Name, QuantityInStock, UnitPrice, Category) VALUES
(1, 'Rice', 10, 20.99, 'Grains'),
(2, 'Chilli Powder', 15, 15.50, 'Spices'),
(3, 'Bread', 20, 5.99, 'Dairy'),
(4, 'Milk', 5, 30.25, 'Dairy'),
(5, 'Ice Cream', 8, 10.75, 'Dairy');

/* Inserting invaild record*/
INSERT INTO Products (ProductId, Name, QuantityInStock, UnitPrice, Category) VALUES
(1, 'Rice', 10, 0, 'Grains');
Error Code: 3819. Check constraint 'products_chk_1' is violated.

/* Inserting records in Cart table*/
INSERT INTO Cart (CartId, ProductId, Quantity, UserId) VALUES
(1, 1, 2, 1),
(2, 3, 1, 2),
(3, 5, 3, 3),
(4, 2, 4, 4),
(5, 4, 2, 5);

/* Inserting records in Orders table*/
INSERT INTO Cart (CartId, ProductId, Quantity, UserId) VALUES
(6, 1, 0, 1);
Error Code: 3819. Check constraint 'cart_chk_1' is violated.

/* Inserting records in Orders table*/
INSERT INTO Orders (OrderId, CartId, OrderDate, UserId) VALUES
(1, 1, '2024-03-11', 1),
(2, 2, '2024-03-12', 2),
(3, 3, '2024-03-13', 3),
(4, 4, '2024-03-14', 4),
(5, 5, '2024-03-15', 5);

/* Try to verify with delete cascade and without delete cascade */

/*Adding cascade delete to foreign key constraints in Orders and Cart tables*/
ALTER TABLE Orders ADD CONSTRAINT fk_orders_cart FOREIGN KEY (CartId) REFERENCES Cart(CartId) ON DELETE CASCADE;
ALTER TABLE Cart ADD CONSTRAINT fk_cart_products FOREIGN KEY (ProductId) REFERENCES Products(ProductId) ON DELETE CASCADE;
ALTER TABLE Cart DROP FOREIGN KEY cart_ibfk_1;

/*Attempting to delete a record from Products table without cascade delete*/
DELETE FROM Products WHERE ProductId = 2;
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`shoppingcartdb`.`cart`, CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`ProductId`) REFERENCES `products` (`ProductId`))

/*Attempting to delete a record from Products table with cascade delete*/
DELETE FROM Products WHERE ProductId = 1;

/*Verify that all constrains are working properly.*/

/* Attempting to insert a record into Products table with a negative price */
INSERT INTO Products (ProductId, Name, QuantityInStock, UnitPrice, Category) VALUES
(7, 'Product G', 15, -10, 'Category 4');
Error Code: 3819. Check constraint 'products_chk_1' is violated.

/* Attempting to update a record in Users table with NULL user name */
UPDATE Users SET UserName = NULL WHERE UserId = 1;
Error Code: 1048. Column 'UserName' cannot be null

/* Attempting to insert a record into Cart table with a non-existent Product Id */
INSERT INTO Cart (CartId, ProductId, Quantity, UserId) VALUES
(7, 10, 2, 1);
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`shoppingcartdb`.`cart`, CONSTRAINT `fk_cart_products` FOREIGN KEY (`ProductId`) REFERENCES `products` (`ProductId`) ON DELETE CASCADE)


/* Attempting to insert a record into Orders table with a non-existent Cart Id */
INSERT INTO Orders (OrderId, CartId, OrderDate, UserId) VALUES
(6, 10, '2024-04-06', 2);
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`shoppingcartdb`.`orders`, CONSTRAINT `fk_orders_cart` FOREIGN KEY (`CartId`) REFERENCES `cart` (`CartId`) ON DELETE CASCADE)

/*Write the select queries on the above tables for the following requirements:*/
/* For Product Table*/
/* Display all products*/
SELECT * FROM Products;

/* Display products belong to particular category*/
SELECT * FROM Products WHERE Category = 'Dairy';

/* Display out of stock products (means quantity is zero)*/
SELECT * FROM Products WHERE QuantityInStock=0;

/*Display the products which price between 15 to 30*/
SELECT * FROM Products WHERE UnitPrice BETWEEN 10 AND 30;

/*Display the product details based on the ProductId*/
SELECT * FROM Products WHERE ProductId=2;

/*For Cart Table*/
/*Display data based on the given CartId*/
SELECT * FROM Cart WHERE CartId = 1;

/*Check if there are any products added in Cart based on the ProductId*/
SELECT * FROM Cart WHERE ProductId = 4;

/*For Order Table*/
/*Display OrderDetails based on OrderId*/
SELECT * FROM Orders WHERE OrderId = 3;

/*Display OrderDetails based on UserId*/
SELECT * FROM Orders WHERE UserId = 2;

/*Display OrderDetails based on OrderDate*/
SELECT * FROM Orders WHERE OrderDate = '2024-03-15';



