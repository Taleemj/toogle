import { createContext, useState } from "react";

export const ResultContext = createContext();
const BaseUrl = "https://google-search3.p.rapidapi.com/api/v1/";

export const ResultContextProvider = ({ children }) => {
  const [Results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${BaseUrl}${type}`, {
        method: 'GET',
        headers: {
            'x-user-agent': 'desktop',
            'x-proxy-location': 'EU',
            'x-rapidapi-host': 'google-search3.p.rapidapi.com',
            'x-rapidapi-key': '3ad125af40msha3fe0c6e8a0b18ep15f567jsn1747f4551c09'
          }
    });

    const data = await response.json();

    setResults(data)

    setIsLoading(false)
  };

  return (
  <ResultContext.Provider value={{getResults, Results, searchTerm, setResults, setSearchTerm, isLoading}}>
      {children}
  </ResultContext.Provider>
  )
};

