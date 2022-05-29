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


create table Regjisoret_Filmit(
RegjisoriFID int Primary Key  identity(1,1),
Emri varchar(256),
Mbiemri varchar(256),
Biografia varchar(8000)
)

INSERT INTO Regjisoret_Filmit([Emri],[Mbiemri],[Biografia]) VALUES ('Sly','Stallone','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s')
INSERT INTO Regjisoret_Filmit([Emri],[Mbiemri],[Biografia]) VALUES ('Jason','Statham','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s')
INSERT INTO Regjisoret_Filmit ([Emri],[Mbiemri],[Biografia]) VALUES ('Dolph','Lundergen','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s')

create table Regjisoret_Serialit(
RegjisoriSID int Primary Key  identity(1,1),
Emri varchar(256),
Mbiemri varchar(256),
Biografia varchar(8000)
)

insert into Regjisoret_Serialit values('Enes', 'Hetemi', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
insert into Regjisoret_Serialit values('Edon', 'Hetemi', 'Lorem Ipsum is simply dummy text industry.')


create table Kategorit_Filmit(
    KategoriaFId int Primary Key identity(1,1),
	Kategoria varchar (256)
	)


	insert into Kategorit_Filmit values('Dram')
	insert into Kategorit_Filmit values('Aksion')
	insert into Kategorit_Filmit values('Komedi')


	select * from Kategorit_Filmit


	create table Kategorite_Serialit(
    KategoriaSID int Primary Key identity(1,1),
	Kategoria varchar (256)
	)
	

	INSERT INTO Kategorite_Serialit VALUES ('Aksion')
	INSERT INTO Kategorite_Serialit VALUES ('Aventure')
	INSERT INTO Kategorite_Serialit VALUES ('Drame')
	INSERT INTO Kategorite_Serialit VALUES ('Horror')
	INSERT INTO Kategorite_Serialit VALUES ('Thriller')

	SELECT * FROM Kategorite_Serialit


	create table Skenaristet_Filmit(
    SkenaristatId int Primary Key identity(1,1),
	Emri varchar (256),
	Mbiemri varchar (256),
Biografia varchar(8000)
	)

	INSERT INTO Skenaristet_Filmit VALUES ('Benet','Muhaxheri','ASJKDASDJHKASDJAHSD')
	INSERT INTO Skenaristet_Filmit VALUES ('Artan','Muhaxheri','Lorem Ipsum is simply dummy text industry.')

	select * from Skenaristet_Filmit

		create table Skenaristet_Serialit(
    SkenaristatSId int Primary Key identity(1,1),
	Emri varchar (256),
	Mbiemri varchar (256),
Biografia varchar(8000)
	)

	INSERT INTO Skenaristet_Serialit VALUES ('Benet','Muhaxheri','ASJKDASDJHKASDJAHSD')
	INSERT INTO Skenaristet_Serialit VALUES ('Blend','Hasani','Lorem Ipsum is simply dummy text industry.')

	Select * from Skenaristet_Serialit



	create table Filmat(
	FilmatId int Primary Key identity(1,1),
	Titulli varchar (256),
	Foto varchar (256),
	Data_Postimit datetime DEFAULT CURRENT_TIMESTAMP not null,
	Pershkrimi_Filmit varchar(8000),
	Linku_Filmit varchar(1000),
	AktoriID int FOREIGN KEY REFERENCES Aktort_Filmit(AktortiFId),
	KategoriaID int FOREIGN KEY REFERENCES Kategorit_Filmit(KategoriaFId),
	ProducentiID int FOREIGN KEY REFERENCES Producentet_Filmit(ProducentiID),
	RegjisoriID int FOREIGN KEY REFERENCES Regjisoret_Filmit(RegjisoriFID),
	SkenaristiID int FOREIGN KEY REFERENCES Skenaristet_Filmit(SkenaristatId)
    )

	Insert Into Filmat Values ('Central Intelligence', 'anonymous.png', '2022-05-28', 'It is a long established fact that a reader will be distracted', 'https://www.youtube.com/watch?v=MxEw3elSJ8M', '2', '2', '2', '1', '1')