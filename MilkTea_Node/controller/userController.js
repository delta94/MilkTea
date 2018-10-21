const sql = require('mssql')
const config = require('../connect')

exports.Login = function(req, res, next){
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(`DECLARE @RC int 
      DECLARE @_User nvarchar(30)
      DECLARE @_Pass nvarchar(15)
      EXECUTE @RC = [dbo].[Login] 
      @_User = ${req.body._UserName}
      ,@_Pass = ${req.body._Password}
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