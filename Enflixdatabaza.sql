create database EnflixDb

use EnflixDb

create table Aktort_Filmit(
   AktortiFId int Primary Key identity(1,1),
   Emri varchar(256),
   Mbiemri varchar(256),
   Biografia varchar(8000)
)

select * from Aktort_Filmit

insert into Aktort_Filmit values('Enes', 'Hetemi', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
insert into Aktort_Filmit values('Edon', 'Hetemi', 'Lorem Ipsum is simply dummy text industry.')


create table Aktort_Serialit(
   AktortSId int Primary Key identity(1,1),
   Emri varchar(256),
   Mbiemri varchar(256),
   Biografia varchar(8000)
)


select * from Aktort_Serialit


insert into Aktort_Serialit values('Enes', 'Hetemi', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
insert into Aktort_Serialit values('Edon', 'Hetemi', 'Lorem Ipsum is simply dummy text industry.')

create table Producentet_Filmit(
ProducentiID int Primary Key  identity(1,1),
Emri varchar(256),
Mbiemri varchar(256),
Biografia varchar(8000)
)


INSERT INTO Producentet_Filmit ([Emri],[Mbiemri],[Biografia]) VALUES ('Charles','Winkler','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s')
INSERT INTO Producentet_Filmit ([Emri],[Mbiemri],[Biografia]) VALUES ('William','Chartof','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s')
INSERT INTO Producentet_Filmit ([Emri],[Mbiemri],[Biografia]) VALUES ('Blend','Hasani','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s')


create table Producentet_Serialit(
ProducentiSID int Primary Key  identity(1,1),
Emri varchar(256),
Mbiemri varchar(256),
Biografia varchar(8000)
)


INSERT INTO Producentet_Serialit ([Emri],[Mbiemri],[Biografia]) VALUES ('Carl','Weathers','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s')
INSERT INTO Producentet_Serialit ([Emri],[Mbiemri],[Biografia]) VALUES ('Burgess','Meredith','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s')
INSERT INTO Producentet_Serialit ([Emri],[Mbiemri],[Biografia]) VALUES ('Dolph','Lundergen','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s')


