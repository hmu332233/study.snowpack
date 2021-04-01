import React, { useState } from 'react';
import styles from './styles.module.scss';

function App() {
  const [count, setCount] = useState(0);
  const handleButtonClick = () => setCount(v => v + 1);
  return (
    <div className={styles.App}>
      Hello, Minung!
      <div>
        {count}
        <button onClick={handleButtonClick}>Count up</button>
      </div>

      
      
    </div>
  );
}

export default App;