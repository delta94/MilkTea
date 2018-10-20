var Reference = require("../model/reference");

exports.CreateReference = function(req, res, next){
    Reference.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.RemoveReference = function(req, res, next){
    Reference.findByIdAndRemove({_id: req.params.id}).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.UpdateReference = function(req, res, next){
    Reference.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(){
        Reference.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
} 

exports.GetAllReference = function(req, res, next){
    Reference.find({idcv: req.params.idcv}).then(function(data){
        res.send(data);
    });
}