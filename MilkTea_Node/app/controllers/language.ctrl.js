var Language = require("../model/language");

exports.CreateLanguage = function(req, res, next){
    Language.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.RemoveLanguage = function(req, res, next){
    Language.findByIdAndRemove({_id: req.params.id}).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.UpdateLanguage = function(req, res, next){
    Language.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(){
        Language.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
} 

exports.GetAllLanguage = function(req, res, next){
    Language.find({idcv: req.params.idcv}).then(function(data){
        res.send(data);
    });
}