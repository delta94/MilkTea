var Certificate = require("../model/certificate");

exports.CreateCertificate = function(req, res, next){
    Certificate.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.RemoveCertificate = function(req, res, next){
    Certificate.findByIdAndRemove({_id: req.params.id}).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.UpdateCertificate = function(req, res, next){
    Certificate.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(){
        Certificate.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
} 

exports.GetAllCertificate = function(req, res, next){
    Certificate.find({idcv: req.params.idcv}).then(function(data){
        res.send(data);
    });
}
