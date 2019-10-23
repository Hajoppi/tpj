/*
  Schema
*/

create table signups (
  id serial not null primary key,
  name text not null,
  email text not null,
  start_year text not null,
  student boolean not null,
  avec text,
  food_requirements text,
  no_alcohol boolean not null,
  table_group text,
  representative_of text,
  sillis boolean not null,
  invited boolean not null,
  support boolean not null,
  dish text not null,
  gdpr boolean not null,
  accept boolean,
  created timestamp default CURRENT_TIMESTAMP
);

create table mail_errors (
  id serial not null primary key,
  email text not null,
  created timestamp default CURRENT_TIMESTAMP
);

create table reserve_ids (
  id serial not null primary key
);

create table users (
  id serial NOT null primary key,
  username TEXT UNIQUE NOT null,
  password TEXT NOT null
);

INSERT INTO users (username, password) VALUES ('admin', '$2b$10$7YI92EwR3p3BoybGtqu4bO0GVsO4UiMpOCq0qyIwyw30N0L4Y8fq6');