# Explain the different type of errors that could arise in a Denormalizaion database.

- Showing all the below mention anamoley in one table which result in data incosistancy is called Denormalization. like Updation anamoly , Inserstion anamoly and Deletion anamoly.

### 1 . Updation Anamoly :

- When you trying to update data and it becomes deleted is called Updation anamoly.
- Ex - If you have multiple entities in single table and you want to update a single row in one entities in a table for any resion but you don't want to delete the data . But in this case when you update data it delete the old data this cause an updation anamoly.

### 2. Deletion Anamoly :

- In a table when you trying delete one of the data with the data deleted some unwanted data is called Deletion anamoly.

- Ex - If in a table which have multiple entites you have to delete one data from one entities for any resion but unfortunately deleted the data of entites with that data is present in which row that row also delete which is we don't want to deleted this is happen because of deletion anamoly.

### 3. Insertion Anamoly :

- When you try to insert some data in to a table but becaue of your in initila stage you can't inset the data into the table this is called Insertion Anamoly.

- Ex - If you want to lunch new course and you don't have any student and instructor for initila stage so you can't inster this course into the table. This is because of insertion anamoly.
