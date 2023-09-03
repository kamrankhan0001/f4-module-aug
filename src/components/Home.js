// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addToHistory } from '../redux/actions/historyActions';

// const Home = () => {
//   const dispatch = useDispatch();
//   const [searchWord, setSearchWord] = useState('');

//   const handleSearch = () => {
//     // Dispatch an action to add the searched word to the history
//     dispatch(addToHistory(searchWord));
//     // Perform the API request and navigate to the WordDetails page
//     // You can add this functionality based on your API integration

//   };

//   return (
//     <div className="container">
//       <h2>Search for a Word</h2>
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Enter a word"
//           value={searchWord}
//           onChange={(e) => setSearchWord(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToHistory } from '../redux/actions/historyActions';
import axios from 'axios'; // Import Axios

const Home = () => {
  const dispatch = useDispatch();
  const [searchWord, setSearchWord] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      setLoading(true);

      // Dispatch an action to add the searched word to the history
      dispatch(addToHistory(searchWord));

      // Fetch word details from the API
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/%7Bword%7D/${searchWord}`);
      const wordData = response.data[0]; // Assuming the API returns an array

      // Navigate to the WordDetails page with the word data
      // You can implement the navigation logic based on your project's routing library
      //history.push(`/word/${searchWord}`);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Search for a Word</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter a word"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      {error && <div className="error-message">An error occurred. Please try again.</div>}
    </div>
  );
};

export default Home;
