




Software Requirements Specification : "https://docs.google.com/document/d/1PQaRznNfx70Q-1GFHWJZFR2EulzUt_AVpy3Rk_8aB74/edit?usp=sharing"




DDL SCRIPTS:

Customer Table:

create table customer (
	user_id serial primary key,
	username varchar(50) not null unique,
	password varchar(100) not null,
	full_name varchar(50),
	mobile_num VARCHAR(15),
	artist BOOLEAN
);

Designs Table:

create table designs (
	design_id serial primary key,
	user_id int ,
	design_name varchar(20),
	file_name varchar(255),
	cost int,
	sales int default 0,
	genre varchar(25),
	foreign key(user_id) references customer(user_id) ON DELETE CASCADE ON UPDATE CASCADE
	
);

Bank Details Table:

CREATE TABLE bank_details(
	user_id int,
	holder_name varchar(30),
	account_number int,
	ifsc_code varchar(20),
	foreign key(user_id) references customer(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CART TABLE:

create table cart(
	user_id int, 
	design_id int, 
	color varchar(20),
	item_cost int,
	size varchar(5),
	foreign key(user_id) references customer(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
	foreign key(design_id) references designs(design_id) ON DELETE CASCADE ON UPDATE CASCADE
);

Orders Table:

create table orders(
	prod_id serial Primary Key,
	user_id int, 
	design_id int, 
	color varchar(20),
	item_cost int,
	customer_name varchar(20), 
	customer_phone_no varchar(15), 
	customer_address varchar(40), 
	size varchar(5),
	foreign key(user_id) references customer(user_id) ON DELETE CASCADE ON UPDATE CASCADE, 
	foreign key(design_id) references designs(design_id) ON DELETE CASCADE ON UPDATE CASCADE
);

Shipped Orders Table:

CREATE TABLE shipped_orders(
	prod_id int
	user_id int, 
	design_id int, 
	color varchar(20),
	item_cost int,
	size varchar(5),
	foreign key(user_id) references customer(user_id) ON DELETE CASCADE ON UPDATE CASCADE, 
	foreign key(design_id) references designs(design_id) ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key(prod_id) references orders(prod_id) ON DELETE CASCADE ON UPDATE CASCADE, 
);

