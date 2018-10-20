const mongoose = require('mongoose');

const OrganizationSchema = mongoose.Schema({
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

const Organization = mongoose.model('organization', OrganizationSchema);

module.exports = Organization;
