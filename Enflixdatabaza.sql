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
insert into Aktort_Serialit values('Pedro', 'Alonso', 'Lorem Ipsum is simply dummy text industry.')
insert into Aktort_Serialit values('Alvaro', 'Morte', 'Lorem Ipsum is simply dummy text industry.')
insert into Aktort_Serialit values('Ursula', 'Corbero', 'Lorem Ipsum is simply dummy text industry.')
insert into Aktort_Serialit values('Jaime', 'Lorente', 'Lorem Ipsum is simply dummy text industry.')


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
	
	CREATE TABLE Seriali(
    SerialiID int Primary Key identity(1,1),
    Titulli varchar(256),
    NrSezonave int,
	Data_PostimitS datetime DEFAULT CURRENT_TIMESTAMP not null,
	PershkrimiS varchar(8000),
	Foto_S varchar(256),
    AktortSId INT,
    FOREIGN KEY (AktortSId) REFERENCES Aktort_Serialit (AktortSId),
    ProducentiSID int,
    FOREIGN KEY (ProducentiSID) REFERENCES Producentet_Serialit(ProducentiSID),
    RegjisoriSID int,
    FOREIGN KEY (RegjisoriSID) REFERENCES Regjisoret_Serialit(RegjisoriSID),
    SkenaristatSId int,
    FOREIGN KEY (SkenaristatSId) REFERENCES Skenaristet_Serialit(SkenaristatSId),
    KategoriaSID int,
    FOREIGN KEY (KategoriaSID) REFERENCES Kategorite_Serialit(KategoriaSID)

    )

	SELECT * FROM Seriali

	SELECT S.Titulli,SZ.NrSezones,E.Titulli,E.NrEpisodes
	FROM Seriali S
	INNER JOIN Sezona SZ
	ON S.SezonaID=SZ.SezonaID
	INNER JOIN SezonaEpisodi SE
	ON SE.SezonaID=SZ.SezonaID
	INNER JOIN Episoda E
	ON E.EpisodaID=SE.EpisodaID
	WHERE SZ.NrSezones=1









	  SELECT * FROM Episoda


/*
    SELECT S.Titulli,SE.NrSezones,E.Titulli,E.NrEpisodes,ASE.Emri,ASE.Mbiemri,E.Linku
    FROM Seriali S
    INNER JOIN Sezona SE
    ON S.SezonaID=SE.SezonaID
    INNER JOIN Episoda E
    ON SE.EpisodaID=E.EpisodaID
    INNER JOIN Aktort_Serialit ASE
    ON S.AktortSId=ASE.AktortSId
	ORDER BY 4

	*/
    CREATE TABLE Episoda(
    EpisodaID int Primary Key identity(1,1),
    Titulli varchar(256),
    NrEpisodes int,
    PershkrimiE varchar(1000),
    Linku varchar(8000)

    )



    CREATE TABLE Sezona(
    SezonaID int Primary Key identity(1,1),
    NrSezones int,
    NrEpisodave int


    )


	CREATE TABLE SezonaEpisodi (
	SezonaID int not null foreign key references Sezona(SezonaID),
	EpisodaID int not null foreign key references Episoda(EpisodaID),
	Constraint Sezona_Episodi Primary key (SezonaID,EpisodaID)
	)


		CREATE TABLE SerialiSezona (
    SerialiID int not null foreign key references Seriali(SerialiID),
	SezonaID int not null foreign key references Sezona(SezonaID),
	
	Constraint Seriali_Sezona Primary key (SerialiID,SezonaID)
	)


	
	
	INSERT INTO Episoda VALUES ('Entrance in Bank',1,'El profesor tells the band how to enter the band','https://youtu.be/To_kVMMu-Ls')
    INSERT INTO Episoda VALUES ('Blood is spilled',2,'asdasdasdasda','https://youtu.be/To_kVMMu-Ls')
	INSERT INTO Sezona VALUES (1,9,1)
	INSERT INTO Sezona VALUES (1,9,2)
	INSERT INTO Seriali VALUES ('La Casa De Papel',5,'2017-09-8','La Casa De Papel is a serie based in Spain , Madrid','pro.jpg',1,1,1,1,2)
  
    --Insert into SerialiEpisodi values ()
	INSERT INTO SerialiSezona VALUES(1,1)
	INSERT INTO SerialiSezona VALUES(1,2)
	INSERT INTO SerialiSezona VALUES(1,10)
	INSERT INTO SerialiSezona VALUES(1,13)

	
	
create table AspNetUsers(
Id varchar(450) Primary Key,
UserName varchar(256),
NormalizedUserName varchar(256),
Email varchar(256),
NormalizedEmail varchar(256),
EmailConfirmed bit not null,
PasswordHash varchar(max),
SecurityStamp varchar(max),
ConcurrencyStamp varchar(max),
PhoneNumber varchar(max),
PhoneNumberConfirmed bit not null,
TwoFactorEnabled bit not null,
LockoutEnd datetimeoffset(7),
LockoutEnabled bit not null,
AccessFailedCount int not null
)

create table AspNetRoles(
Id varchar(450) Primary Key,
Name varchar(256),
NormalizedName varchar(256),
ConcurrencyStamp varchar(max)
)


create table AspNetUserRoles(
UserId varchar(450) not null,
RoleId varchar(450) not null,
constraint UserRolesPk primary key (UserId, RoleId),
constraint UserFk foreign key (UserId) references AspNetUsers(Id),
constraint RoleFk foreign key (RoleId) references AspNetRoles(Id),
)
	 
	 









