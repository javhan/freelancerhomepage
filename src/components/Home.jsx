import React, { useContext, useState, useEffect } from "react";
import { ProfileContext } from "../App";

const quotesURL = "https://api.quotable.io/random";

export default function Home() {
  const [quote, setQuote] = useState(
    {
      content: "",
      author: "",
    },
  );

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(quotesURL);
      const json = await res.json();
      setQuote(json);
    };
    makeApiCall();
  }, []);

  const profileContext = useContext(ProfileContext);

  return (
    <div className="homepage">
      <h1>Welcome back, {profileContext.profile.firstName}!</h1>
      <h2>{quote.content}</h2>
      <h3>{quote.author}</h3>
    </div>
  );
}
