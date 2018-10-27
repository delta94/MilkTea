const sql = require('mssql')
const config = require('../connect')

exports.Select_All_MilkTea = function(req, res, next){
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(`DECLARE @RC int      
      EXECUTE @RC = [dbo].[Select_All_MilkTea] 
      `)
    }).then(result => {
      let rows = result.recordset
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.status(200).json(rows);
      sql.close();
    }).catch(err => {
      res.status(200).send({ message: "${err}"})
      sql.close();
    });
    
}
exports.Insert_MilkTea = function(req, res, next){
  new sql.ConnectionPool(config).connect().then(pool => {
    return pool.request().query(`DECLARE @RC int
    DECLARE @_Name nvarchar(50)
    DECLARE @_Price int
    DECLARE @_Count int    
    EXECUTE @RC = [dbo].[Insert_MilkTea] 
       @_Name = '${req.body._Name}'
      ,@_Price = ${req.body._Price}
      ,@_Picture = ${req.body._Picture}
    `)
  }).then(result => {
    let rows = result.recordset
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).send({code: 'ok', value: 
      {
        _Name : req.body._Name, 
        _Price : req.body._Price,
        _Count : req.body._Count
      }
    });
    sql.close();
  }).catch(err => {
    res.status(200).send({ message: err})
    sql.close();
  });
  
}
exports.Delete_MilkTea = function(req, res, next){
  new sql.ConnectionPool(config).connect().then(pool => {
    return pool.request().query(`DECLARE @RC int
    DECLARE @_ID int    
    EXECUTE @RC = [dbo].[Delete_MilkTea]
       @_ID = ${req.body._ID}
    `)
  }).then(result => {
    let rows = result.recordset
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).send({code: 'ok', value: 
      {
          _ID : req.body._ID
      }
    });
    sql.close();
  }).catch(err => {
    res.status(200).send({ message: err})
    sql.close();
  });
  
}
exports.Update_MilkTea = function(req, res, next){
  new sql.ConnectionPool(config).connect().then(pool => {
    return pool.request().query(`DECLARE @RC int
    DECLARE @_ID int
    DECLARE @_Name nvarchar(50)
    DECLARE @_Price int
    DECLARE @_Count int    
    EXECUTE @RC = [dbo].[Update_Material] 
       @_ID = ${req.body._ID}
      ,@_Name = '${req.body._Name}'
      ,@_Price = ${req.body._Price}
      ,@_Picture = ${req.body._Picture}
    `) 
  }).then(result => {
    let rows = result.recordset
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).send({code: 'ok', value: 
      {
          _ID : req.body._ID,
          _Name : req.body._Name, 
          _Price : req.body._Price,
          _Picture : req.body._Picture
      }
    });
    sql.close();
  }).catch(err => {
    res.status(200).send({ message: err})
    sql.close();
  });
  
}