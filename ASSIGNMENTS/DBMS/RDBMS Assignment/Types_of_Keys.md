# Explain the different type of keys in RDBMS considering real life scenario.

## Important of keys in RDBMS .

- In RDBMS keys is important for organize and manage database.
- Key is a column or group of column that is uniquely identifie row in a table. Key is used for mainly identify record and establish relation between different table.

-In RDBMS we have different type of key.

### 1. Super key :

- In RDBMS super key is a set or collection of all possible key is called super keys.
- It helps to understanding in different way in which row in a table can be uniquely identified.

Ex - table data ( Emply_ID , Empl_Name, PAN_num , Aadhar_num )

- above table data (Empl_ID , PAN_num, Aadhar_num) could be a Super key and also combination of one or more column could be a super key .
  Ex - above table (Emp_ID, Empl_Name) could be super key. We known Empl_Name is not uniquely identified but the combinaition makes it super key.

### 2. Candidate Key :

- Candidate Key is similar to a Super key.
- Candidate key take only important key. We alrady known (Empl_ID , Empl_Name) are super key but it's not a candidate key becatuse Empl_Name is not uniquely identify rows in a table.
- Ex - All important key (Empl_ID , PAN_num , Aadhar_num) are Candidate key.

### 3. Primary Key :

- In a table Choseing one of the key from candidate key is become Primary key.
- In EMPOLYEE table (Empl_ID , PAN_num , Aadhar_num) any one can be primary key but we choose only one key as primary key.
- Ex- In a student table student_ID could be a Primary key.

### 4. Alternat Key :

- In a table from candidate key after choosing the Primary key rest of all key are alternat key.

- Ex - In a Empolyee table except Empl_ID rest of(PAN_num , Aadhar_num) key is alternat key.

### 5. Forign Key :

- This key we will use for bring the relationship.
- Data Intigrity
- Using forign key we can establish relationship between different table .

Ex - In Empolyee table and Department table we use primary key of another table as forign key of one table.

### 6. Composite Key :

- If using multiple column we create a primary key is called composite key.
- If any table don't have any uniquely identify columns then we go for multiple column for create composite primary key.

- Ex - Order Table (Cost_ID , Order_ID , Prod_Code, Prod_Name) all of column can have multiple transation but if you take combination of column the you get the composite primary key which is in this case is (Cost_ID , Order_ID , Prod_Code) .

### 7. Artificial Key :

- If no primary key is possiable.
- If composite primary key is too long.

- In table column no primary key is possiable and Which composite primary key we have is too long for that reasion we add a extra column for primary key is called Artificial Key.

- Ex - In order table we have composite primary key which is (Cost_ID , Order_ID , Prod_Code) and we find this key is too long so we add a (ID) column for primary key .
