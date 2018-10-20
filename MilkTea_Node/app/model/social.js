const mongoose = require('mongoose');

const SocialSchema = mongoose.Schema({
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

const Social = mongoose.model('social', SocialSchema);

module.exports = Social;