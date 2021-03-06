CREATE TABLE inventory(
   id               SERIAL PRIMARY KEY
  ,Batch            VARCHAR(120) NOT NULL
  ,Name             VARCHAR(120) NOT NULL
  ,Product_Line     VARCHAR(120) NOT NULL
  ,Length           INTEGER  NOT NULL
  ,Texture          VARCHAR(120) NOT NULL
  ,Color            VARCHAR(120) NOT NULL
  ,Hair_Type        VARCHAR(120) NOT NULL
  ,Region_Type      VARCHAR(120) NOT NULL
  ,Factory          VARCHAR(120) NOT NULL
  ,Current_Location VARCHAR(120) NOT NULL
  ,Quantity         INTEGER  NOT NULL
  ,Cost_of_Batch    INTEGER  NOT NULL
  ,Price_per_Unit   INTEGER  NOT NULL
  ,Photos           VARCHAR(120) NOT NULL
  ,QR_Code          VARCHAR(120) NOT NULL
);


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "clearance_level" INTEGER NOT NULL DEFAULT 0
);


INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD112','vestibulum','Bundles',8,'Silky straight','Black','Human Hair','Brazilian','TedHair Factory','Kansas City, KS',2,2,2,'2.jpg','ABC-abc-1234');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD113','mattis','Clip ons',10,'Yaki','Brown Blonde','Synthetic','Peruvian','Kabeilu Hair Factory','Atlanta, GA',3,3,3,'3.jpg','ABC-abc-1235');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD114','ullamcorper','Wigs',12,'Coarse straight','Red','Blend','Malaysian','XBL Hair Factory','Birmingham, Alabama',4,4,4,'4.jpg','ABC-abc-1236');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD115','velit','Bundles',14,'Deep wave','Teal','Human Hair','Burmese','Xuchang Fuxin Hair Products Co., Ltd','Shanghai, China',5,5,5,'5.jpg','ABC-abc-1237');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD116','sed','Clip ons',16,'Curly wave','Blue','Synthetic','Indian','Xuchang Longshengyuan Hair Products Co., Ltd','Kansas City, KS',6,6,6,'6.jpg','ABC-abc-1238');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD117','ullamcorper','Wigs',18,'Romance wave','Lavender','Blend','Mink','Tianjin Yao Poly Import and Export Limited Company','Atlanta, GA',7,7,7,'7.jpg','ABC-abc-1239');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD118','morbi','Bundles',20,'Kinky curly','Pink','Human Hair','Brazilian','Shaoyang Hongtai Arts &Crafts Co., Ltd','Birmingham, Alabama',8,8,8,'1.jpg','ABC-abc-1240');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD119','tincidunt','Clip ons',22,'Wet and wavy','Green','Synthetic','Peruvian','Guangzhou Alimina Hair Products Co., Ltd','Shanghai, China',9,9,9,'2.jpg','ABC-abc-1241');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD120','ornare','Wigs',24,'Silky straight','Ivory','Blend','Malaysian','TedHair Factory','Kansas City, KS',10,10,10,'3.jpg','ABC-abc-1242');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD121','massa','Bundles',26,'Yaki','Grey','Human Hair','Burmese','Kabeilu Hair Factory','Atlanta, GA',11,11,11,'4.jpg','ABC-abc-1243');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD122','eget','Clip ons',28,'Coarse straight','Fuschsia','Synthetic','Indian','XBL Hair Factory','Birmingham, Alabama',12,12,12,'5.jpg','ABC-abc-1244');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD123','egestas','Wigs',30,'Deep wave','Coral','Blend','Mink','Xuchang Fuxin Hair Products Co., Ltd','Shanghai, China',13,13,13,'6.jpg','ABC-abc-1245');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD124','purus','Bundles',32,'Curly wave','Aquamarine','Human Hair','Brazilian','Xuchang Longshengyuan Hair Products Co., Ltd','Kansas City, KS',14,14,14,'7.jpg','ABC-abc-1246');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD125','viverra','Clip ons',8,'Romance wave','Black','Synthetic','Peruvian','Tianjin Yao Poly Import and Export Limited Company','Atlanta, GA',15,15,15,'1.jpg','ABC-abc-1247');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD126','accumsan','Wigs',10,'Kinky curly','Brown Blonde','Blend','Malaysian','Shaoyang Hongtai Arts &Crafts Co., Ltd','Birmingham, Alabama',16,16,16,'2.jpg','ABC-abc-1248');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD127','in','Bundles',12,'Wet and wavy','Red','Human Hair','Burmese','Guangzhou Alimina Hair Products Co., Ltd','Shanghai, China',17,17,17,'3.jpg','ABC-abc-1249');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD128','nisl','Clip ons',14,'Silky straight','Teal','Synthetic','Indian','TedHair Factory','Kansas City, KS',18,18,18,'4.jpg','ABC-abc-1250');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD129','nisi','Wigs',16,'Yaki','Blue','Blend','Mink','Kabeilu Hair Factory','Atlanta, GA',19,19,19,'5.jpg','ABC-abc-1251');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD130','scelerisque','Bundles',18,'Coarse straight','Lavender','Human Hair','Brazilian','XBL Hair Factory','Birmingham, Alabama',20,20,20,'6.jpg','ABC-abc-1252');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD131','eu','Clip ons',20,'Deep wave','Pink','Synthetic','Peruvian','Xuchang Fuxin Hair Products Co., Ltd','Shanghai, China',21,21,21,'7.jpg','ABC-abc-1253');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD132','ultrices','Wigs',22,'Curly wave','Green','Blend','Malaysian','Xuchang Longshengyuan Hair Products Co., Ltd','Kansas City, KS',22,22,22,'1.jpg','ABC-abc-1254');
INSERT INTO inventory(Batch,Name,Product_Line,Length,Texture,Color,Hair_Type,Region_Type,Factory,Current_Location,Quantity,Cost_of_Batch,Price_per_Unit,Photos,QR_Code) VALUES ('ABCD133','vitae','Bundles',24,'Romance wave','Ivory','Human Hair','Burmese','Tianjin Yao Poly Import and Export Limited Company','Atlanta, GA',23,23,23,'2.jpg','ABC-abc-1255');
