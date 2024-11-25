import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit   = async (e) => {
    e.preventDefault();
    try {
          const response = await axios.post('http://localhost:8000/api/shorten', { url: longUrl });
      setShortUrl(response.data.short_url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter long URL" value={longUrl} onChange={(e) => setLongUrl(e.target.value)}   
 />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && <p>Shortened URL: <a href={shortUrl}>{shortUrl}</a></p>}
    </div>
  );
}

export default App;