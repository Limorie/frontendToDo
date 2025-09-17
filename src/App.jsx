import { useState } from 'react'

const API = 'http://localhost:5000';  // Point to the Server

export default function Main() {
  const [text, setText] = useState('');

  async function callApi() {
    try {
      // Call the Server API
      const res = await fetch(`${API}/api/todo`);
      const data = await res.text();

      // Set text in <h1>, then React re-renders HTML
      setText(data);
    } catch {
      setText('Request failed');
    }
  }

  // React renders this HTML
  return (
    <div>
      <button onClick={callApi}>Call API</button>
      <h1>{text}</h1>
    </div>
  )
}