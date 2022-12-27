CREATE DATABASE users;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
  id_User uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY UNIQUE,
  name_User VARCHAR(100) NOT NULL,
  last_NameUser VARCHAR(100) NOT NULL,
  email_User VARCHAR(100) NOT NULL UNIQUE,
  id_Phone VARCHAR(32),
  dateCreateUser TIMESTAMP,
  statusAtivo BOOLEAN NOT NULL
);
