DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
devoured BOOLEAN DEFAULT FALSE,
burger_date TIMESTAMP,
primary key (id) 
);