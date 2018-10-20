var Education = require("../model/education");

exports.CreateEducation = function(req, res, next){
    Education.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.RemoveEducation = function(req, res, next){
    Education.findByIdAndRemove({_id: req.params.id}).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.UpdateEducation = function(req, res, next){
    Education.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(){
        Education.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
} 

exports.GetAllEducation = function(req, res, next){
    Education.find({idcv: req.params.idcv}).then(function(data){
        res.send(data);
    });
}