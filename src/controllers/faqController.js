const FAQ = require('../models/FAQ');
const translateText = require('../utils/translate'); // Correct import

const getFAQs = async (req, res) => {
    const lang = req.query.lang || 'en';
    const faqs = await FAQ.find({});
    
    const translatedFAQs = await Promise.all(faqs.map(async (faq) => {
        const translatedQuestion = await translateText(faq.getTranslatedQuestion(lang), lang);
        const translatedAnswer = await translateText(faq.getTranslatedAnswer(lang), lang);
        
        return {
            question: translatedQuestion,
            answer: translatedAnswer,
        };
    }));
    
    res.json(translatedFAQs);
};

const createFAQ = async (req, res) => {
    const { question, answer } = req.body;

    // Validate input
    if (!question || !answer) {
        return res.status(400).json({ error: 'Question and answer are required' });
    }

    try {
        const newFAQ = new FAQ({ question, answer });
        await newFAQ.save();
        res.status(201).json(newFAQ);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create FAQ' });
    }
};

module.exports = { getFAQs, createFAQ };
