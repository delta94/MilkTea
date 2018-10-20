const mongoose = require('mongoose');

const LanguageSchema = mongoose.Schema({
    _id :{
        type: String
    },
    name :{
        type: String
    },
    skill :{
        type: String
    },
    idcv :{
        type: Number
    },
},{ _id: false });

const Language = mongoose.model('language', LanguageSchema);

module.exports = Language;