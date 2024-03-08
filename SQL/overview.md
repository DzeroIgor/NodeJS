## Working with databases

> In compunting, a database is on organized collection of data stored and accessed electronically from a computer system


### Key features:

    * Domain
    * Database engine
    * Data Hierarchy / Architecture
    * Interfacing technology ( language )
    * Enterprise ready
    * Security
    * Licensing
    * Popularity






## PG
    * Data Hierarchy 
        - Server
         - Database
         ( - Schema )
          - Table
           - Record ( row )
            Field ( col )
             - KEY, TYPE, CONSTRAINT
    * SQL ( Syntax, Statement )
    * DDL ( Typing ), DML ( CRUD )
    * Relations
    * ACID
    * Transactions
    * Normal Forms







COMMANDS
    - Server  
     - DDL ( structure )
      - DML ( data )







products 
---------------------------------------------------
id    |            name   |         category_id   |
---------------------------------------------------
---------------------------------------------------
1     |       'iPhones'   |                   1   |
---------------------------------------------------
2     |       'Galaxy'    |                   1   |
---------------------------------------------------
3     |       'SmartX'    |                   2   |
---------------------------------------------------

categories
---------------------------
id    |            name   |
---------------------------
---------------------------
1     |   'Smartphones'   |
---------------------------
2     |       'AI'        |
---------------------------

prices
--------------------------------------------
amount    |     currency   |   product_id   
--------------------------------------------
--------------------------------------------
1100      |     "USD"      |       1
--------------------------------------------
900       |     "USD"      |       2
--------------------------------------------
100       |     "USD"      |       3
--------------------------------------------
1000      |     "USD"      |       1
--------------------------------------------




DB (relational) KEY MOMENTS:
 - KEY
   * primary ( integer 1, 2, 3, uuid, guid, sku, isbn, ...)
   * foreign ( reference: insert validation, CASCADING - update, delete )
 - IDENTITY
   * AUTO INCREMENT ( SERIAL / IDENTITY )
 - NORMAL FORMS
 - CONSTRAINTS
 - INDEX
 - DATA TYPES
 - TRANSACTIONS
