const mongoose = require('mongoose');

const CVSchema = mongoose.Schema({
    _id :{
        type: String
    },
    name :{
        type: String
    },
    yourName :{
        type: String
    },
    language :{
        type: String
    },
    color :{
        type: String
    },
    font :{
        type: String
    },
    size :{
        type: String
    },
    arrow :{
        type: String
    },
    day :{
        type: String
    },
    address :{
        type: String
    },
    phone :{
        type: String
    },
    email :{
        type: String
    },
    choose :{
        type: String
    },
    idme :{
        type: String
    },
    listComponent:{
        type: Array
    }
},{ _id: false });

const CV = mongoose.model('cv', CVSchema);

module.exports = CV;
