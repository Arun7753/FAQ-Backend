const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    question_hi: { type: String, default: '' }, // Hindi
    question_bn: { type: String, default: '' }, // Bengali
    answer_hi: { type: String, default: '' },   // Hindi
    answer_bn: { type: String, default: '' },   // Bengali
});

faqSchema.methods.getTranslatedQuestion = function (lang) {
    return this[`question_${lang}`] || this.question; 
};

faqSchema.methods.getTranslatedAnswer = function (lang) {
    return this[`answer_${lang}`] || this.answer; 
};


module.exports = mongoose.model('FAQ', faqSchema);
