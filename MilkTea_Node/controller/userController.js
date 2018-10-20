const sql = require('mssql')
const config = require('../connect')

exports.Login = function(req, res, next){
    sql.connect(config).then(() => {
        return sql.query`
        DECLARE @RC int
        DECLARE @_UserName nvarchar(50)
        DECLARE @_Password nvarchar(50)
        
        EXECUTE @RC = [dbo].[Login_User] 
           @_UserName = 'mvthanh001'
          ,@_Password = 'd93a5def7511da3d0f2d171d9c344e91'
        
        `
    }).then(result => {
        res.send(result.recordset[0])
        //console.dir(result)
    }).catch(err => {
        console.log(err)
    })
}