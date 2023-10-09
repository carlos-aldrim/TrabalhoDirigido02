import React from "react";
import { BookProps, BookSearchContext, RatingProps } from "./types";
import axios from "axios";
import { BASE_URL } from "../config/api";

export const BookSearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<BookProps[]>([]);
  const [rating, setRating] = React.useState<RatingProps[]>([]);
  const [loading, setLoading] = React.useState(false);

  const searchBooks = async () => {
    setLoading(true);
    try {
      if(query.length === 0) {
        setResults([]);
        return;
      };
      const response = await axios.get(`${BASE_URL}${query}`);
      setResults(response.data.hits);
      setQuery("");
    } catch (error) {
      console.error("Error searching books:", error);
    } finally {
      setLoading(false);
    }
  };
  

  const addRating = (objectID: string, rate: number) => {
    const updatedRating = rating.map((item) => {
      if (item.objectID === objectID) {
        return {
          ...item,
          rate: rate,
        };
      }
      return item;
    });
    if (!rating.some((item) => item.objectID === objectID)) {
      const newRating = {
        objectID: objectID,
        rate: rate,
      };
      updatedRating.push(newRating);
    }
    setRating(updatedRating);
  };
  
  

  const searchRating = (objectID: string) => {
    const foundRating = rating.find((item) => item.objectID === objectID);
    return foundRating ? foundRating.rate : 0;
  };

  return (
    <BookSearchContext.Provider
      value={{
        query,
        setQuery,
        results,
        setResults,
        searchBooks,
        addRating,
        searchRating,
        rating,
        loading
      }}
    >
      {children}
    </BookSearchContext.Provider>
  );
};
