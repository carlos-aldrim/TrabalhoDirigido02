import { createContext } from "react";

export interface RatingProps {
  objectID: string;
  rate: number;
}

export interface BookProps {
  objectID: string;
  author: string;
  title: string;
  url: string;
}

interface BookSearchContextData {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  results: BookProps[];
  setResults: React.Dispatch<React.SetStateAction<BookProps[]>>;
  searchBooks: (query: any) => Promise<void>;
  addRating: (objectID: string, rate: number) => void;
  searchRating: (objectID: string) => number;
  rating: RatingProps[];
  loading: boolean;
}

export const BookSearchContext = createContext({} as BookSearchContextData);
