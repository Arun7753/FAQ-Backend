const translateText = async (text, lang) => {
    const subscriptionKey = process.env.API_KEY;
    const endpoint = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0';

    try {
        console.log(`Translating: "${text}" to ${lang}`);

        const response = await fetch(`${endpoint}&to=${lang}`, {
            method: 'POST',
            body: JSON.stringify([{ Text: text }]),
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': subscriptionKey,
                'Ocp-Apim-Subscription-Region': 'centralindia' 
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const translatedText = data[0].translations[0].text; // Access the translated text
        console.log(`Translated: "${translatedText}"`);
        return translatedText;
    } catch (err) {
        console.error('Translation error:', err.message);
        return text; 
    }
};

module.exports = translateText; 
