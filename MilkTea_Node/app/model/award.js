const mongoose = require('mongoose');

const AwardSchema = mongoose.Schema({
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
    },
},{ _id: false });

const Award = mongoose.model('award', AwardSchema);

module.exports = Award;
