import React, { useState, useEffect, Fragment } from "react";
import firebase from "./data/firebase";
import { v4 as uuidv4 } from "uuid";

export default function Review(props) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")

  const ref = firebase.firestore().collection("reviews")

  const getReviews = () => {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setReviews(items)
      setLoading(false)
    })
  }

  useEffect(() => {
    getReviews()
  }, []);

    console.log(reviews)

  return (
    <div >
      {reviews.map((prop, index) => {return(
        <div key={index}>
          <p>{prop.name}</p>
          <p>{prop.stars} stars</p>
          <p>{prop.comment}</p> 
          <button>Delete</button>
        </div>)
      })}
    </div>
  );
}
