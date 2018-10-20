var Objective = require("../model/objective");

exports.CreateObjective = function(req, res, next){
    Objective.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.RemoveObjective = function(req, res, next){
    Objective.findByIdAndRemove({_id: req.params.id}).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.UpdateObjective = function(req, res, next){
    Objective.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(){
        Objective.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
} 

exports.GetAllObjective = function(req, res, next){
    Objective.find({idcv: req.params.idcv}).then(function(data){
        res.send(data);
    });
}