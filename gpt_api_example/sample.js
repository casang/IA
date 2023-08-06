const axios = require('axios');

const API_ENDPOINT = 'https://api.openai.com/v1/engines/text-davinci-003/completions'; // Replace with the appropriate API endpoint
const API_KEY = ''; // Replace with your GPT-3.5 API key

async function generateText(prompt) {
  try {
    const response = await axios.post(
      API_ENDPOINT,
      {
        prompt,
        max_tokens: 100, // Adjust this value based on the desired length of the generated text
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating text:', error.message);
    return null;
  }
}

async function main() {
  const prompt = 'Once upon a time'; // Replace with your desired prompt

  const generatedText = await generateText(prompt);
  if (generatedText) {
    console.log('Generated Text:');
    console.log(generatedText);
  }
}


main();