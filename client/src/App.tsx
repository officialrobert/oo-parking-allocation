import { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    console.log('Init App');
  }, []);

  return <div className="App">Test App page but CRA </div>;
};

export default App;
