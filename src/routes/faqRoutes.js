const express = require('express');
const { getFAQs, createFAQ } = require('../controllers/faqController'); 

const router = express.Router();

// GET /api/faqs - Fetch all FAQs
router.get('/', getFAQs);

// POST /api/faqs - Create a new FAQ
router.post('/', createFAQ);

module.exports = router;