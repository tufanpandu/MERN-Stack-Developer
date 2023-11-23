# List out the different level of normalizations and explain them in details.

> In Database Managment System their are multiple rules for design database for efficient , organized and free from differnent anomalies. There are different level involved for normalization .

### 1. 1NF ( First Normal Form):

- This is most basic level of normalization. In 1NF no cell in the table with multiple value.
- Each column should have a unique name.
- Every table should have primary key. If you don't find any primary key then you should go for composite primary key (Car_NumberPlate , Date_of_Transtion).

- First normal form help to eliminate duplicate data and simplify queries.

- Ex- If a table have course column then there should be single row for single course their should not be multiple value in single row.

### 2. 2NF (Second Normal Form) :

- For eligible for 2NF the table should be already in 1NF.
- Their should not have any partial function dependency.
- In a table if any one column is partialy dependent with composite key.
- For making 2NF table :

1. First identify the column which has partial dependency.
2. Second breakdown those columns to create new table.

### 3. 3NF (Third Normal form) :

- It should already in 2NF.
- In table their should no transitive dependency.

For making table to 3NF :

1. Identify the column which has transitive dependecy.
2. Breakdown the column to create new table.

### 4. BCNF ( Boyc Codd Normal Form) :

- It should already be an 3NF.
- If x is depend on Y then x or y column are importan column and x or y are common column then it's not satisfy the BCNF.
- For forming table into BCNF then you have to breakdown table .
