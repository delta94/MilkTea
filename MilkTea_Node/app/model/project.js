const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    _id :{
        type: String
    },
    name :{
        type: String
    },
    daybegin :{
        type: String
    },
    dayend :{
        type: String
    },
    type :{
        type: String
    },
    by :{
        type: String
    },
    idcv :{
        type: Number
    },
},{ _id: false });

const Project = mongoose.model('project', ProjectSchema);

module.exports = Project;
