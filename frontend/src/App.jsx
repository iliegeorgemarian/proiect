import { useState, useEffect } from 'react';
import httpClient from '@/utils/client';

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    httpClient.get('/').then(response => setMessage(response.data.message))
  }, []);

  return (
    <>
      <h1>Mesajul din API este: <blockquote>{message}</blockquote></h1>
    </>
  );
}

export default App;