-- Multi-Table Query Practice
select 
p.*, 
c.CategoryName, c.Description as [CategoryDescription],
s.CompanyName as [SupplierName], s.Region as [SupplierRegion]
from [Product] p
join [Category] c on p.CategoryId = c.id
join [Supplier] s on s.id = p.SupplierId
--------
SELECT employee.id, employee.firstname, employee.lastname, employee.title, [order].*
from [order]
join employee on employee.id = [order].EmployeeId
---

select 
*,p,
c.CategoryName, c.Description as [Category]
from [Product] p

join [Customer] d on p.ProductName = d.id
join [Category] c
-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT product.Id, product.ProductName, product.CategoryId, [product].*
from [product]
-- or
select categoryid, productname from product
-- or
select  category.CategoryName, product.ProductName
from product
join category
on category.Id = product.CategoryId
-- or with alias
select c.categoryname as category, p.productname as product
from product as p
join category as c
on p.CategoryId = c.Id
order by c.Id
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select o.Id, o.ShipName, o.OrderDate from [order] as o 
where o.OrderDate < '2012-08-09'
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT product.id, [order].*
from [order]
join product on product.ProductName = [order].ShipName
--
where [order].Id = '10251' 


SELECT p.Id , p.ProductName, p.QuantityPerUnit, * from [Product]  as p

join [Order] on [Order].Id 

where [Order].Id = 10251


SELECT p.Id , p.ProductName, p.QuantityPerUnit, * from [Product]  as p

join [Order] on [Order].Id 

where [Order].Id * p.Id = 10251

---
SELECT p.Id , p.ShipName, * from [Order]  as p

join [Product] on [Product].Id 

where p.Id = 10251


SELECT p.Id , p.ShipName, * from [Order]  as p

join [Product] on   [Product].Id

where [Product].Id * p.Id = 10251




-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT p.Id , p.ShipName, * from [Order]  as p
join [Product] on   [Product].Id * [Product].ProductName
join [Employee] on   [Employee].Id * [Employee].FirstName

where [Product].Id * p.Id   ;

