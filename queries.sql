-- Multi-Table Query Practice
select 
p.*, 
c.CategoryName, c.Description as [CategoryDescription],
s.CompanyName as [SupplierName], s.Region as [SupplierRegion]
from [Product] p
join [Category] c on p.CategoryId = c.id
join [Supplier] s on s.id = p.SupplierId


select 
*,p,
c.CategoryName, c.Description as [Category]
from [Product] p

join [Customer] d on p.ProductName = d.id
join [Category] c
-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.



