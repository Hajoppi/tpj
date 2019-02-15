/*
  Schema
*/

create table signups (
  id serial not null primary key,
  name text not null,
  email text not null,
  start_year text not null,
  student boolean not null,
  no_alcohol boolean not null,
  sillis boolean not null,
  invited boolean not null,
  avec text,
  food_requirements text,
  representative_of text,
  gives_present boolean,
  created timestamp with time zone not null default now()
);

create table groups (
  id serial not null primary key,
  name text not null unique
)
