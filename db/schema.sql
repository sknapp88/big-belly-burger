create database burger1;

use burger1;

drop table burger;

create table burger (
    id            integer auto_increment primary key,
    burgerName    varchar(40),
    eaten        boolean default false 
);

insert into burger ( burgerName ) values ( 'MyFirstBurger' );

select * from burger;
