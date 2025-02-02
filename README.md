# FAQ Node.js API

This is a simple FAQ API built with Node.js, Express, and MongoDB. It allows users to retrieve frequently asked questions (FAQs) and their answers, with support for multiple languages.

## Features

- Retrieve FAQs in multiple languages (default: English)
- Create new FAQs
- MongoDB integration for data storage
- Environment variable management with dotenv
- Automatic translation of questions and answers

## Technologies Used

- Node.js
- Express
- MongoDB (with Mongoose)
- dotenv

## Installation

  **Clone the repository**:
   ```bash
   git clone https://github.com/Arun7753/FAQ-Backend.git
   cd faq-nodejs

## Future Enhancements

As I am currently in the learning phase with Redis and Mocha/Chai, I have not implemented these features yet. However, I plan to add them in future updates to enhance the functionality and testing capabilities of the application.

## API Usage Examples

To retrieve all FAQs, you can make a GET request to the following endpoint:
GET http://localhost:8000/api/faqs?lang=hi
Example Response:
[
    {
        "question": "रेडिस क्या है?",
        "answer": "रेडिस एक इन-मेमोरी डेटा स्टोर है जिसका उपयोग कैशिंग परत के रूप में किया जाता है।"
    },
   {
        "question": "कंप्यूटर क्या है?",
        "answer": "एक कंप्यूटर एक मशीन है जिसे अंकगणितीय या तार्किक संचालन (गणना) के अनुक्रमों को स्वचालित रूप से पूरा करने के लिए प्रोग्राम किया जा सकता है"
    }
]

To create a new FAQ, you can make a POST request to the following endpoint:
POST http://localhost:8000/api/faqs
Example Response:
    {
        "question": "What is a computer?",
        "answer": "A computer is a machine that can be programmed to automatically carry out sequences of arithmetic or logical operations (computation)."
    }


