CREATE DATABASE books_api;
use books_api;

CREATE TABLE books (id INT(11) PRIMARY KEY AUTO_INCREMENT, title VARCHAR(100) NOT NULL);

 INSERT INTO books (title) VALUES ('Conan');