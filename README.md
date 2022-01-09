# Authentication Express Typescript Jasmine

## Instlation 

please follow this [guide](https://medium.com/@dan.chiniara/installing-postgresql-for-windows-7ec8145698e3) with your operation system even if it windows/lunix/mac if article doesn't open with you use [outline](https://outline.com/) and paste link of the article

## DB General

- Remember you can get out of `pqsl` with `\q`
- Database names should use underscores
- Double quotes are used to indicate identifiers within the database, which are objects like tables, column names, and roles. In contrast, single quotes are used to indicate string literals.
- The Foreign Key is a column that relates each row to in the table to the primary key of another table
- Having a foreign key allows us to query for relationships between two tables of data

## Migrations

- are a record of a change made to the schema of a database, with documented instructions to implement and rollback that change
- contain instructions for how to enact and rollback a specific change to the database
- using manage database schema changes in a project makes it easier to keep databases across various environment synced together.

### Create Migration

to [create migration](https://db-migrate.readthedocs.io/en/latest/Getting%20Started/commands/#create) for users/books 

```bash
npx db-migrate create books-table --sql-file
npx db-migrate create users-table --sql-file
```

## SQl 

- \l List databases
- \c Connect to a database
- \dt Display Tables in a database
- \q Quit out of psql to normal terminal

for more read [SQL Cheat Sheet](https://dataschool.com/learn-sql/meta-commands-in-psql/)

## Notes 

The best way to reset a sequence to start back with number 1 is to execute the following:

```sql 
ALTER SEQUENCE <tablename>_<id>_seq RESTART WITH 1
```

So, for example for the users table it would be:

```sql 
ALTER SEQUENCE users_id_seq RESTART WITH 1
```