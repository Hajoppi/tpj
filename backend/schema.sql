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