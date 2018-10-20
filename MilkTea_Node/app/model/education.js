const mongoose = require('mongoose');

const EducationSchema = mongoose.Schema({
    _id :{
        type: String
    },
    name :{
        type: String
    },
    type :{
        type: String
    },
    description :{
        type: String
    },
    idcv :{
        type: Number
    },
},{ _id: false });

const Education = mongoose.model('education', EducationSchema);
module.exports = Education;