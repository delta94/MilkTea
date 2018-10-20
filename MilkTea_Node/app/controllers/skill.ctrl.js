var Skill = require("../model/skill");

exports.CreateSkill = function(req, res, next){
    Skill.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.RemoveSkill = function(req, res, next){
    Skill.findByIdAndRemove({_id: req.params.id}).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.UpdateSkill = function(req, res, next){
    Skill.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(){
        Skill.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
} 

exports.GetAllSkill = function(req, res, next){
    Skill.find({idcv: req.params.idcv}).then(function(data){
        res.send(data);
    });
}