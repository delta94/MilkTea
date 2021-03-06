USE [MilkTea]
GO
/****** Object:  User [tuyetnhi]    Script Date: 11/11/2018 6:28:10 PM ******/
CREATE USER [tuyetnhi] WITHOUT LOGIN WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [VinhThanh]    Script Date: 11/11/2018 6:28:10 PM ******/
CREATE USER [VinhThanh] FOR LOGIN [VinhThanh] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_ddladmin] ADD MEMBER [tuyetnhi]
GO
ALTER ROLE [db_datareader] ADD MEMBER [tuyetnhi]
GO
ALTER ROLE [db_datawriter] ADD MEMBER [tuyetnhi]
GO
ALTER ROLE [db_denydatawriter] ADD MEMBER [tuyetnhi]
GO
/****** Object:  Table [dbo].[Bill]    Script Date: 11/11/2018 6:28:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bill](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Price_total] [int] NULL,
	[Date] [date] NULL,
	[ID_customer] [int] NULL,
	[Address] [varchar](50) NULL,
	[Phone] [varchar](20) NULL,
	[IsPayment] [bit] NULL,
 CONSTRAINT [PK_Bill] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  UserDefinedFunction [dbo].[findlastid]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create function [dbo].[findlastid]()
returns table
as
return
SELECT top 1 ID FROM Bill ORDER BY ID DESC 
GO
/****** Object:  Table [dbo].[Material]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Material](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[Price] [int] NULL,
	[Count] [int] NULL,
	[isActive] [bit] NULL,
 CONSTRAINT [PK_Material] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Prepare]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Prepare](
	[ID_Milk] [int] NULL,
	[ID_Material] [int] NULL,
	[Count] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MilkTea]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MilkTea](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[Price] [int] NULL,
	[Picture] [nvarchar](50) NULL,
	[isActive] [bit] NULL,
 CONSTRAINT [PK_Milk_Tea] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  UserDefinedFunction [dbo].[NguyenLieuPhaCheTS]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create function [dbo].[NguyenLieuPhaCheTS](@Ten nvarchar(50))
returns table
as return 
	select nl.Name
	from MilkTea as ts, Material as nl,Prepare as phache
	where ts.ID=phache.ID_Milk and phache.ID_Material=nl.ID and ts.Name=@Ten
GO
/****** Object:  Table [dbo].[Product]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](20) NULL,
	[Phone] [char](15) NULL,
	[Address] [nvarchar](20) NULL,
	[IsActive] [bit] NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[WareHouse]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WareHouse](
	[ID_product] [int] NULL,
	[ID_material] [int] NULL,
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Count] [int] NULL,
	[Price] [int] NULL,
 CONSTRAINT [PK_Ware_House] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  UserDefinedFunction [dbo].[NSXCungCapNhieuNL]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create function [dbo].[NSXCungCapNhieuNL]()
returns table 
as return
	select Product.Name
	from
		(select MAX(d.dem) as dem1
		from 
		(select kho.ID_product,COUNT(kho.ID_material) as dem
		from WareHouse as kho
		group by kho.ID_product
		) as d) as A,
		(select kho.ID_product,COUNT(kho.ID_material) as dem
		from WareHouse as kho
		group by kho.ID_product
		) as B ,
		Product 
	where A.dem1=B.dem and Product.ID=B.ID_product
GO
/****** Object:  UserDefinedFunction [dbo].[LayNguyenLieu]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create function [dbo].[LayNguyenLieu](@ID int)
returns table
as return 
	select nl.Name, nl.Count
	from MilkTea as ts, Prepare as cb,Material as nl
	where ts.ID = cb.ID_Milk and cb.ID_Material = nl.ID and ts.ID = @ID
GO
/****** Object:  View [dbo].[SelectAllProduct]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[SelectAllProduct]
AS
SELECT        ID, Name, Phone, Address, IsActive
FROM            dbo.Product
WHERE        (IsActive = 'true')
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](20) NULL,
	[Address] [nvarchar](20) NULL,
	[Phone] [char](15) NULL,
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DetailBill]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DetailBill](
	[ID_MilkTea] [int] NOT NULL,
	[ID_Bill] [int] NOT NULL,
	[ID_Employee] [int] NOT NULL,
	[Count] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employee]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employee](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[Phone] [char](15) NULL,
	[Address] [nvarchar](50) NULL,
	[Username] [nvarchar](50) NULL,
	[Password] [nvarchar](50) NULL,
 CONSTRAINT [PK_Worker] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Material] ADD  CONSTRAINT [DF_Material_isActive]  DEFAULT ((1)) FOR [isActive]
GO
ALTER TABLE [dbo].[DetailBill]  WITH CHECK ADD  CONSTRAINT [FK_Detail_bill_Bill] FOREIGN KEY([ID_Bill])
REFERENCES [dbo].[Bill] ([ID])
GO
ALTER TABLE [dbo].[DetailBill] CHECK CONSTRAINT [FK_Detail_bill_Bill]
GO
ALTER TABLE [dbo].[DetailBill]  WITH CHECK ADD  CONSTRAINT [FK_Detail_bill_Employee] FOREIGN KEY([ID_Employee])
REFERENCES [dbo].[Employee] ([ID])
GO
ALTER TABLE [dbo].[DetailBill] CHECK CONSTRAINT [FK_Detail_bill_Employee]
GO
ALTER TABLE [dbo].[DetailBill]  WITH CHECK ADD  CONSTRAINT [FK_Detail_bill_Milk_Tea] FOREIGN KEY([ID_MilkTea])
REFERENCES [dbo].[MilkTea] ([ID])
GO
ALTER TABLE [dbo].[DetailBill] CHECK CONSTRAINT [FK_Detail_bill_Milk_Tea]
GO
ALTER TABLE [dbo].[Prepare]  WITH CHECK ADD  CONSTRAINT [FK_Prepare_Material] FOREIGN KEY([ID_Material])
REFERENCES [dbo].[Material] ([ID])
GO
ALTER TABLE [dbo].[Prepare] CHECK CONSTRAINT [FK_Prepare_Material]
GO
ALTER TABLE [dbo].[Prepare]  WITH CHECK ADD  CONSTRAINT [FK_Prepare_Milk_Tea] FOREIGN KEY([ID_Milk])
REFERENCES [dbo].[MilkTea] ([ID])
GO
ALTER TABLE [dbo].[Prepare] CHECK CONSTRAINT [FK_Prepare_Milk_Tea]
GO
ALTER TABLE [dbo].[WareHouse]  WITH CHECK ADD  CONSTRAINT [FK_Ware_House_Material] FOREIGN KEY([ID_material])
REFERENCES [dbo].[Material] ([ID])
GO
ALTER TABLE [dbo].[WareHouse] CHECK CONSTRAINT [FK_Ware_House_Material]
GO
ALTER TABLE [dbo].[WareHouse]  WITH CHECK ADD  CONSTRAINT [FK_Ware_House_Product] FOREIGN KEY([ID_product])
REFERENCES [dbo].[Product] ([ID])
GO
ALTER TABLE [dbo].[WareHouse] CHECK CONSTRAINT [FK_Ware_House_Product]
GO
/****** Object:  StoredProcedure [dbo].[Delete_Material]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Delete_Material](@_ID int)
as
begin
	update Material set isActive = 0 where ID = @_ID
end
GO
/****** Object:  StoredProcedure [dbo].[Delete_MilkTea]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Delete_MilkTea](@_ID int)
as
begin
	update MilkTea set isActive = 0 where ID = @_ID
end
GO
/****** Object:  StoredProcedure [dbo].[Delete_Product]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Delete_Product](@_ID int)
as
begin
	update Product set IsActive = 'false' where ID = @_ID
end
GO
/****** Object:  StoredProcedure [dbo].[detail_bill]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[detail_bill](@_IDBill int, @_IDMilkTea int, @_IDEmployee int, @_Count int)
as
begin
	insert into DetailBill values (@_IDMilkTea,@_IDBill,@_IDEmployee,@_Count)
end
GO
/****** Object:  StoredProcedure [dbo].[get_milktea_by_bill]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[get_milktea_by_bill](@_ID int)
as
begin
select * from DetailBill, MilkTea where ID_Bill = @_ID and DetailBill.ID_MilkTea = MilkTea.ID
end
GO
/****** Object:  StoredProcedure [dbo].[Insert_Material]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Insert_Material] (@_Name nvarchar(50), @_Price int, @_Count int)
AS
BEGIN
 
 Insert into Material(Name, Price, Count) values (@_Name, @_Price, @_Count);
 
END;
GO
/****** Object:  StoredProcedure [dbo].[Insert_MilkTea]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[Insert_MilkTea] (@_Name varchar(50), @_Price varchar(50), @_Picture varchar(50))
AS
BEGIN
 
 Insert into MilkTea(Name, Price, Picture, isActive) values (@_Name, @_Price, @_Picture, 1);
 
END;
GO
/****** Object:  StoredProcedure [dbo].[Insert_Product]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Insert_Product] (@_Name nvarchar(50), @_Phone char(15), @_Address nvarchar(50))
AS
BEGIN
 
 Insert into Product(Name, Phone, Address, IsActive) values (@_Name, @_Phone, @_Address, 'true');
 
END;
GO
/****** Object:  StoredProcedure [dbo].[Insert_WareHouse]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[Insert_WareHouse] (@_IDProduct int, @_IDMaterial int, @_Count int, @_Price int)
AS
BEGIN
 
 Insert into WarWareHouse(ID_product, ID_material, Count,Price) values (@_IDProduct, @_IDMaterial, @_Count,@_Price);
 
END;
GO
/****** Object:  StoredProcedure [dbo].[Login]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE procedure [dbo].[Login](@_User nvarchar(30), @_Pass nvarchar(15))
as
begin 
	select * from Employee where Username = @_User and Password = @_Pass
end
GO
/****** Object:  StoredProcedure [dbo].[Select_All_Meterial]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Procedure [dbo].[Select_All_Meterial]
as
begin
	select * from Material where isActive = 1
end;
GO
/****** Object:  StoredProcedure [dbo].[Select_All_MilkTea]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Procedure [dbo].[Select_All_MilkTea]
as
begin
	select * from MilkTea where isActive = 'True'
end;
GO
/****** Object:  StoredProcedure [dbo].[Select_All_Product]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Procedure [dbo].[Select_All_Product]
as
begin
	select * from Product 
end;
GO
/****** Object:  StoredProcedure [dbo].[Select_All_WareHouse]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Procedure [dbo].[Select_All_WareHouse]
as
begin
	select * from WareHouse
end;
GO
/****** Object:  StoredProcedure [dbo].[Select_Bill_No_Pay]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Procedure [dbo].[Select_Bill_No_Pay]
as
begin
	select * from Bill where IsPayment = 'false'
end;
GO
/****** Object:  StoredProcedure [dbo].[ThemHoaDon]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[ThemHoaDon] (@Price_total int,@Date date,@ID_customer int, @Address varchar(50),@Phone varchar(20))
as begin
	insert into Bill values(@Price_total,@Date,@ID_customer,@Address,@Phone, 'false' );
end
GO
/****** Object:  StoredProcedure [dbo].[Update_Material]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Update_Material](@_ID int,@_Name nvarchar(50), @_Price int, @_Count int)
as
begin
 update Material set Name = @_Name, Price = @_Price, Count = @_Count where ID = @_ID
end
GO
/****** Object:  StoredProcedure [dbo].[Update_MilkTea]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Update_MilkTea](@_ID int,@_Name nvarchar(50), @_Price int, @_Picture nvarchar(50))
as
begin
 update MilkTea set Name = @_Name, Price = @_Price, Picture = @_Picture where ID = @_ID
end
GO
/****** Object:  StoredProcedure [dbo].[Update_Product]    Script Date: 11/11/2018 6:28:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Update_Product](@_ID int,@_Name nvarchar(50), @_Phone char(15), @_Address nvarchar(50))
as
begin
 update Product set Name = @_Name, Phone = @_Phone, Address = @_Address where ID = @_ID
end
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "Product"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 136
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'SelectAllProduct'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'SelectAllProduct'
GO
