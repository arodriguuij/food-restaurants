import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    searchApi("pasta");
  }, []);

  const searchApi = async (seratchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: seratchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage("Something was wrong");
    }
  };

  return [searchApi, results, errorMessage];
};
