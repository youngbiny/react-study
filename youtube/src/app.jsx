import { useEffect, useState } from 'react';
import './app.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState();
  useEffect(()=>{
    console.log('useEffect');
  }, []);
  return (
    <h1>Hello :)</h1>
  );
}

export default App;
