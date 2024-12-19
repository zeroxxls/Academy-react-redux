const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    program_1: {type:String,required:true},
    program_2: {type:String,required:true},
    program_3: {type:String,required:true},
    cost:{type:String,required:true},
    category: { type: String, required: true },
    level: { type: String, required: true },
    image: { type: String, required: true }
});

module.exports = mongoose.model('Course', courseSchema);
