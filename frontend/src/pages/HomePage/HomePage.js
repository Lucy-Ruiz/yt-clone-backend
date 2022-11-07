import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SearchBar from "../../components/SearchBar/SearchBar";
import key from "../../API_Key.json";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  const [resultsFromSearch, setResultsFromSearch] = useState([])
  const[searchTerm, setSearchTerm] = useState('lower decks ');


  function getVideoResults(searchTerm) {
        console.log('searchTerm in getVideoResults in HomePage:', searchTerm)
        //use axios to make an api call using searchTerm
        //save the results to state
    setSearchTerm(searchTerm)
          
        
    }
    // useEffect(() => {
    //     const resultsFromSearch = async () => {
    //         try {
    //             let response = await axios.get('http://127.0.0.1:8000', {
    //                 headers: {
    //                     Authorization: 'Bearer ' + token,
    //                 },
    //             });
    //             setResultsFromSearch(response.data);
    //         } catch (error) {
    //             console.log(error.response.data);
    //         }
    //     };
    //     resultsFromSearch();
    // }, [token]);

    useEffect(() => {
        const setResultsFromSearch = async() => {
            try {
                let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${key.googleAPIKey}`)
                console.log(response);
                setResultsFromSearch(response.data.items)
            } catch (error){
                console.log(error.response.data)
            }
        }
    }, [])

   

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         });
//         setCars(response.data);
//       } catch (error) {
//         console.log(error.response.data);
//       }
//     };
//     fetchCars();
//   }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {/* {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))} */}
        <SearchBar getVideoResultsforSearchBar={getVideoResults}/>
    </div>
  );
};

export default HomePage;
