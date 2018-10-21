const sql = require('mssql')
const config = require('../connect')

exports.Select_All_Product = function(req, res, next){
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(`DECLARE @RC int 
      EXECUTE @RC = [dbo].[Select_All_Product] 
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
exports.Select_All_Meterial = function(req, res, next){
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(`DECLARE @RC int 
      EXECUTE @RC = [dbo].[Select_All_Meterial] 
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