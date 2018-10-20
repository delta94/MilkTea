const mongoose = require('mongoose');

const ReferenceSchema = mongoose.Schema({
    _id :{
        type: String
    },
    name :{
        type: String
    },
    day :{
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
    }
},{ _id: false });

const Reference = mongoose.model('reference', ReferenceSchema);

module.exports = Reference;
