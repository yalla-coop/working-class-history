import { useState } from 'react';
import CsvReader from '../../components/CsvReader';
// import { deleteAllArticles } from '../../api-calls/Article';
// import { deleteAllTags } from '../../api-calls/Tag';

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
      <br />
      {/* DANGEROUS - UNCOMMENT THESE IF WE NEED TO RUN A CLEAN UP OF DATABASE */}
      {/* <button onClick={() => deleteAllArticles()}>delete articles</button>
      <br />
      <button onClick={() => deleteAllTags()}>delete tags</button> */}
    </div>
  );
};

export default AddCSVArticles;
