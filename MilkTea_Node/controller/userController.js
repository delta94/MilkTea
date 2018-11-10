const sql = require('mssql')
const config = require('../connect')

exports.Login = function(req, res, next){
  console.log('abc',req.body)
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(`DECLARE @RC int 
      DECLARE @_User nvarchar(30)
      DECLARE @_Pass nvarchar(15)
      EXECUTE @RC = [dbo].[Login] 
      @_User = '${req.body._UserName}'
      ,@_Pass = '${req.body._Password}'
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
exports.LoginA = function(req, res, next){
  config.user = req.body._UserName
  config.password = req.body._Password
  console.log(config);
  new sql.ConnectionPool(config).connect().then(pool => {
    res.status(200).send([{
      code: 'ok',
      data:{Name : "Admin"}
    }]);
  })
  
}