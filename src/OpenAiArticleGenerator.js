import React, { useState, useEffect } from 'react';

const OpenAiArticleGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [article, setArticle] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`https://api.openai.com/v1/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        prompt: prompt,
        max_tokens: 100,
        model:'text-davinci-003'
      })
    });

    const data = await response.json();
    setArticle(data.choices[0].text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
        />
        <button type="submit">Generate Article</button>
      </form>
      <p>{article}</p>
    </div>
  );
};

export default OpenAiArticleGenerator;
