const sql = require('mssql')
const config = require('../connect')

exports.Insert_Bill = function(req, res, next){
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(`DECLARE @RC int
      DECLARE @Price_total int
      DECLARE @Date date
      DECLARE @ID_customer int
      DECLARE @Address varchar(50)
      DECLARE @Phone varchar(20)
      
      -- TODO: Set parameter values here.
      
      EXECUTE @RC = [dbo].[ThemHoaDon] 
         @Price_total = '${req.body._PriceTotal}'
        ,@Date = '${req.body._Date}'
        ,@ID_customer = '${req.body._IDcustomer}'
        ,@Address = '${req.body._Address}'
        ,@Phone = '${req.body._Phone}'
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
      res.status(200).send({ message: "${err}"})
      sql.close();
    });
    
}