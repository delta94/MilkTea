const mongoose = require('mongoose');

const SkillSchema = mongoose.Schema({
    _id :{
        type: String
    },
    name :{
        type: String
    },
    number :{
        type: Number
    },
    idcv :{
        type: Number
    },
},{ _id: false });

const Skill = mongoose.model('skill', SkillSchema);

module.exports = Skill;