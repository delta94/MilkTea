const mongoose = require('mongoose');

const CertificateSchema = mongoose.Schema({
    _id :{
        type: String
    },
    name :{
        type: String
    },
    day :{
        type: String
    },
    content :{
        type: String
    },
    idcv :{
        type: Number
    },
},{ _id: false });

const Certificate = mongoose.model('certificate', CertificateSchema);

module.exports = Certificate;
