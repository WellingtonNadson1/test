CREATE DATABASE users;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
  id_User uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY UNIQUE,
  name_User VARCHAR(100) NOT NULL,
  last_NameUser VARCHAR(100) NOT NULL,
  email_User VARCHAR(100) NOT NULL UNIQUE,
  id_Phone VARCHAR(32),
  dateCreateUser now(),
  statusAtivo BOOLEAN NOT NULL
);

CREATE TABLE credenciamento (
  id_Credenciamento uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY UNIQUE,
  name_Credenciameto VARCHAR(200) NOT NULL,
  dateCreateUser now(),
  statusAtivo BOOLEAN NOT NULL
);

CREATE TABLE user_credenciamento (
  id_UserCredenciamento uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY UNIQUE,
  name_Credenciameto VARCHAR(200) NOT NULL,
  dateCreateUser now(),
  statusAtivo BOOLEAN NOT NULL
);
