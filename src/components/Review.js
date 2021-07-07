import React, { useState, useEffect } from "react";
import firebase from "./data/firebase";
import { v4 as uuidv4 } from "uuid";

export default function Review(props) {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const ref = firebase.firestore().collection("reviews");

  const getReviews = () => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      if (items.length === 0) {
        return;
      }
      const sortedItems = items.sort((a, b) => {
        return (a.date.toDate() - b.date.toDate())
      })
      setReviews(sortedItems);
    });
  };

  useEffect(() => {
    getReviews();
  }, []);

  const addReviews = (newReview) => {
    ref
      .doc(newReview.id)
      .set(newReview)
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteReviews = (review) => {
    ref
      .doc(review.id)
      .delete()
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="review_box">
        {reviews.map((prop, index) => {
          return (
            <div key={index} className="indiv_review">
              <p>{prop.name}</p>
              <p>{prop.comment}</p>
              <button onClick={() => deleteReviews(prop)}>Delete</button>
            </div>
          );
        })}
      </div>
      <div className="add_comment">
        <h3>Add New</h3>
        <label>Name:</label>
        <br></br>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br></br>
        {/* <label>Rating:</label>
        <br></br>
        <input type="number" onChange={(e) => setStars(e.target.value)} />
        <br></br> */}
        <label>Comments: </label>
        <br></br>
        <textarea onChange={(e) => setComment(e.target.value)} />
        <button
          onClick={() => {
            let newDate = new Date()
            addReviews({ name, comment, id: uuidv4(), date: newDate })}}
        >
          Submit
        </button>
      </div>
    </>
  );
}
