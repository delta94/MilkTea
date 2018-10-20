const mongoose = require('mongoose');

const ObjectiveSchema = mongoose.Schema({
    _id :{
        type: String
    },
    name :{
        type: String
    },
    idcv :{
        type: Number
    },
},{ _id: false });

const Objective = mongoose.model('objective', ObjectiveSchema);

module.exports = Objective;
