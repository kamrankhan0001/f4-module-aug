// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const WordDetails = () => {
//   const { word } = useParams();
//   const [wordData, setWordData] = useState(null);

//   useEffect(() => {
//     // Fetch word details using the API based on the 'word' parameter
//     // You can add this functionality based on your API integration
//   }, [word]);

//   if (!wordData) {
//     // Display loading or error message here
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container">
//       {/* Display word details based on the fetched data */}
//     </div>
//   );
// };

// export default WordDetails;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import Axios


const WordDetails = () => {
  const { word } = useParams();
  const [wordData, setWordData] = useState(null);
 

  useEffect(() => {
    const fetchWordDetails = async () => {
      try {
        // Fetch word details using the API based on the 'word' parameter
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/%7Bword%7D/${word}`);
        const wordDetails = response.data[0]; // Assuming the API returns an array

        // Set the fetched word data to the state
        setWordData(wordDetails);
      } catch (error) {
        console.error('Error fetching word details:', error);
        // Handle error cases here, e.g., show an error message
      }
    };

    // Call the function to fetch word details when the 'word' parameter changes
    fetchWordDetails();
  }, [word]);

  if (!wordData) {
    // Display a loading message or handle error cases here
    return <div>Loading...</div>;
  }

  // Render word details based on the fetched data
  return (
    
    <div className="container">
      <h2>{wordData.word}</h2>
      
        
      <div>
        <strong>Phonetic:</strong> {wordData.phonetic}
      </div>
      <div>
        <strong>Meanings:</strong>
        <ul>
          {wordData.meanings.map((meaning, index) => (
            <li key={index}>
              <div>
                <strong>Part of Speech:</strong> {meaning.partOfSpeech}
              </div>
              <ul>
                {meaning.definitions.map((definition, idx) => (
                  <li key={idx}>
                    <div>
                      <strong>Definition:</strong> {definition.definition}
                    </div>
                    {definition.synonyms && (
                      <div>
                        <strong>Synonyms:</strong> {definition.synonyms.join(', ')}
                      </div>
                    )}
                    {definition.antonyms && (
                      <div>
                        <strong>Antonyms:</strong> {definition.antonyms.join(', ')}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
   
  );
};

export default WordDetails;

