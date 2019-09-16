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
  sillis boolean not null,
  invited boolean not null,
  created timestamp with time zone not null default now()
);

create table users (
  id serial NOT null primary key,
  username TEXT NOT null,
  password TEXT NOT null
);

insert into users (username, password) values ('admin', 'passwordHash');