# Write single note on Single Responsibility Principle .

- SRP or Single Resposiblity Principle is a fundamental concept Object-Oriented Design .
- Let's understand the SRP so take an ed-Tech company tabel . If in a ed-Tech table we store multiple entitie in single table like Student , Course and Instructor details store then it's not follow the Single resposibility principle and it cause data in consitancy .
- In RDBMS if you store data without follow single resposibility principla it's not denied but when you try to do any opearation it's show some anamoly.Also it is not good practice to sote multiple entities in single table.

- To avoid this kind of proble we have proble we have **_"Single Resposibility/Porpuse Principle"_** where we don't store multiple entities in single table . We ensure the every entities have different table and between the table we establis the relationship.
