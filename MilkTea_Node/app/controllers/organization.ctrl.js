var Organization = require("../model/organization");

exports.CreateOrganization = function(req, res, next){
    Organization.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.RemoveOrganization = function(req, res, next){
    Organization.findByIdAndRemove({_id: req.params.id}).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.UpdateOrganization = function(req, res, next){
    Organization.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(){
        Organization.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
} 

exports.GetAllOrganization = function(req, res, next){
    Organization.find({idcv: req.params.idcv}).then(function(data){
        res.send(data);
    });
}