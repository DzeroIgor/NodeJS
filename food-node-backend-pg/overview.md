








## FOOD ORDER APP
    > db: postgres
    > docker: containers & virtualization
    > nodejs: http server --> API




+------------------------- LAPTOP --------------------------+
|                                                           |
|                                                           |
|                                                           |
|                                                           |
|                                                           |
|                                                           |
|             +------ container (VM) -------+               |
|             |                             |               |
|             |    postgresql server 15     |               |
|             |                             |               |
|             |                             |               |
|             |                             |               |
|             +-----------------------------+               |
|             |           OS (deb)          |               |
|             +-----------------------------+               |
|                                                           |
|                                                           |
+-----------------------------------------------------------+
|                      OS (windows)                         |
+-----------------------------------------------------------+



+------------------------- LAPTOP --------------------------+
|                                                           |
|                                                           |
|                                                           |
|                                                           |
|                                                           |
|                                                           |
|             +------ container (VM) -------+               |
|             |                             |               |      postgres: 15-bullseye
|             |    postgresql server 15     |   <----------------------------------------------HUB
|             |                             |               |
|             |                             |               |
|             |                             |               |
|             +-----------------------------+               |
|             |           OS (deb)          |               |
|             +-----------------------------+               |
|                           ^                               |
|                           |                               |
|                       Dockerfile                          |
|                       docker-compose.yaml                 |
|                                                           |
+-----------------------------------------------------------+
|                      OS (windows)                         |
+-----------------------------------------------------------+


1. pulling & using images & creating containers
2. commands: pull, list (ps), build, run, stop
3. Dockerfile
4. port mapping, volume, mounting/ mapping
5. login into container




HOST                                  CONTAINER
                    Isolation
 
                        |
                        |
                        |
                        |
1. data --- entry point ------> + 
                        |       |
                        |       |
                        |    CREATE (pgsql) -------+                                   // pgsql --> postgresql
               7777     |                          |
2. port map <----------------------------------->  V
3. volume map <----------------+                  RUN <---- dev ops (CREATE DB, CREATE TABLES, INSERT ...)
                        |      |                   |
                        |      |                   + --5432-- postgres server
4. config ------------------>  |                   |               | 
                        |      +-------------------------------->  + --- data folder: /var/lib/postgresql/data
                        |                          |           
                        |                          V
                        |         +------------- STOP
                        |         |
                        |         V
                        |       DELETE
                        |
                        |
                        |
                        |
5. exec bash inside container ------->










HOST 


postgres --------------> 5432
container -------------> 5433:5432 < -------------- postgres 







+------------------ terminal HOST ------------------------+
|                                                         |
|                                                         |         +---------------- CONTAINER ---------------+
|                                                         |         |                                          |
|             cker exec -it "CONTAINER_NAME" /bin/sh --------------------> /bin/sh                             |                                |                                                         |         |      +-------- terminal ------------+    |
+---------------------------------------------------------+         |      |   #psql -U postgres          |    |
                                                                    |      |                              |    |
                                                                    |      |                              |    |
                                                                    |      |                              |    |
                                                                    |      |                              |    |
                                                                    |      +------|-----------------------+    |
                                                                    |             V                            |
                                                                    |      +--- postgres server ----------+    |
                                                                    |      |                              |    |
                                                                    |      |                              |    |
                                                                    |      |                              |    |
                                                                    |      |                              |    |
                                                                    |      |                              |    |
                                                                    |      +------------------------------+    |
                                                                    +------------------------------------------+







|
+----------- app (js/node) -----+--------+
|                               |        |
|                               |        |
|                               |   O    |                                 |
|                               |   R    |  <-----> conector/ driver <-----|-----> postgresql server 
|                               |   M    |                                 |
|                               |        |
|                               |        |
+-------------------------------+--------+




## HW1: 
## 1. refactor the table: id (pk), name (unique), price_amount, price_currency (3), availability
## 2. refactor the basic CRUD with this property
## 3. add getFoodByPriceRange(minPrice, maxPrice)
## 4. add getFoodCheapFirst()
## 5. add getFoodExpensiveFirst()
## 6. add getFoodByPartialName(keyword)