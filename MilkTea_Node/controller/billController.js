const sql = require('mssql')
const config = require('../connect')

exports.Insert_Bill = function(req, res, next){
  console.log(req.body)
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(`DECLARE @RC int
      DECLARE @Price_total int
      DECLARE @Date date
      DECLARE @ID_customer int
      DECLARE @Address varchar(50)
      DECLARE @Phone varchar(20)
            
      EXECUTE @RC = [dbo].[ThemHoaDon] 
         @Price_total = ${req.body._PriceTotal}
        ,@Date = '${req.body._Date}'
        ,@ID_customer = ${req.body._IDcustomer}
        ,@Address = '${req.body._Address}'
        ,@Phone = '${req.body._Phone}'
      `)
    }).then(result => {
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(`select * from findlastid()`)
        }).then(result=>{
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.status(200).send({code: 'ok', value: 
            {
              _ID: result.recordset[0].ID,
              _Price_total : req.body.Price_total, 
              _Date : req.body._Date,
              _Address : req.body._Address,
              _Phone: req.body._Phone
            }
          });
        })
        
        sql.close();
    }).catch(err => {
      res.status(200).send({ message: err})
      sql.close();
    });
    
}
exports.Insert_Detail_Bill = function(req, res, next){
  console.log(req.body)
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(`DECLARE @RC int
      DECLARE @_IDBill int
      DECLARE @_IDMilkTea int
      DECLARE @_IDEmployee int
      DECLARE @_Count int
            
      EXECUTE @RC = [dbo].[detail_bill] 
         @_IDBill = ${req.body._ID}
        ,@_IDMilkTea = ${req.body._listmilktea.ID}
        ,@_IDEmployee = 1
        ,@_Count = ${req.body._listmilktea.count}
      `)
    }).then(result => {
      let rows = result.recordset
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.status(200).send({code: 'ok', value: 
        {
            
        }
      });
      sql.close();
    }).catch(err => {
      res.status(200).send({ message: err})
      sql.close();
    });
    
}
exports.Select_Bill = function(req, res, next){
  console.log(req.body)
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(`
      DECLARE @RC int
      EXECUTE @RC = [dbo].[Select_Bill_No_Pay] 
      `)
    }).then(result => {
      let rows = result.recordset
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.status(200).json(rows);
      sql.close();
    }).catch(err => {
      res.status(200).send({ message: err})
      sql.close();
    });
    
}
exports.Select_Detail_Bill = function(req, res, next){
  console.log(req.body)
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(`
      DECLARE @RC int
      DECLARE @_ID int
      EXECUTE @RC = [dbo].[get_milktea_by_bill] 
        @_ID = ${req.body._ID}
      `)
    }).then(result => {
      let rows = result.recordset
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.status(200).json(rows);
      sql.close();
    }).catch(err => {
      res.status(200).send({ message: err})
      sql.close();
    });
    
}