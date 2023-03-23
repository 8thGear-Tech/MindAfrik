CREATE DATABASE IF NOT EXIST mindafriktestdb;

USE mindafriktestdb;

DROP TABLE IF EXISTS clientsignup;

CREATE TABLE clientsignup{
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255) DEFAULT NULL,
    last_name VARCHAR(255) DEFAULT NULL,
    email VARCHAR(255) DEFAULT NULL,
    password VARCHAR(255) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT UQ_Clientsignup_Email UNIQUE (email)
};

