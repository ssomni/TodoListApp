import { useState } from "react";
import quotedata from "../db/quoteData";

export default function DayQuotes() {
  console.log(quotedata);
  const [isQuote, setIsQuote] = useState(quotedata);
  const randomId = Math.floor(Math.random() * 8);
  const ar = isQuote.filter((el) => el.id === randomId);

  const handleQuote = (e) => {
    e.preventDefault();
    setIsQuote(ar);
  };

  return (
    <div>
      <div onChange={() => handleQuote()}></div>
      <h3>{ar[0].quote}</h3>
      <div>{ar[0].author}</div>
    </div>
  );
}
