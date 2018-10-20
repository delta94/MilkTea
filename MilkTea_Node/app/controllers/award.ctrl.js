var Award = require("../model/award");
const uuidv1 = require('uuid/v1');

exports.CreateAward = function(req, res, next){
    Award.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.RemoveAward = function(req, res, next){
    Award.findByIdAndRemove({_id: req.params.id}).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.UpdateAward = function(req, res, next){
    Award.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(){
        Award.findOne({_id: req.params.id}).then(function(data){
            console.log(data)
            res.send(data);
        });
    });
} 

exports.GetAllAward = function(req, res, next){
    Award.find({idcv: req.params.idcv}).then(function(data){
        res.send(data);
    });
}
