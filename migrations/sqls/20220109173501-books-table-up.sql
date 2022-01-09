-- create table books
create table books (
  title VARCHAR(150),
  author VARCHAR(255),
  total_pages INTEGER,
  type VARCHAR(100),
  summary text,
  id SERIAL PRIMARY KEY
);