CREATE DATABASE burgers_db;

use database burgers_db;

CREATE TABLE burgers(
    id INTEGER AUTO_INCREMENT primary key,
    burger_name VARCHAR(50),
    devoured BOOLEAN
);