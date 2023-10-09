import { Router } from "./src/components/Router/Router";
import { BookSearchProvider } from "./src/contexts";

export default function App() {
  return (
    <BookSearchProvider>
      <Router/>
    </BookSearchProvider>
  );
}
