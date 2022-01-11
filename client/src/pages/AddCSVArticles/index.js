import { useState } from 'react';
import CsvReader from '../../components/CsvReader';

const AddCSVArticles = () => {
  const [startSend, setStartSend] = useState(false);
  const [newArticles, setNewArticles] = useState([]);

  return (
    <div>
      <CsvReader
        startSend={startSend}
        setStartSend={setStartSend}
        newArticles={newArticles}
        setNewArticles={setNewArticles}
      />
      <button onClick={() => setStartSend(true)}>post articles</button>
    </div>
  );
};

export default AddCSVArticles;
