import React from "react";
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

const adzunaID = process.env.REACT_APP_ID;
const adzunaKey = process.env.REACT_APP_KEY;

const jobURL = `https://api.adzuna.com/v1/api/jobs/sg/search/1?app_id=${adzunaID}&app_key=${adzunaKey}&results_per_page=50`;

export default function MiniJB() {
  const [topFive, setTopFive] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(jobURL);
      const json = await res.json();
      setTopFive(json.results);
    };
    makeApiCall();
  }, []);

  const feelingLucky = (companyName) => {
    let words;
    if (companyName.includes(" ")) {
      words = companyName.split(" ").join("+");
    } else {
      words = companyName;
    }
    const newWord = words.replace(/&/g, "%26");
    return `http://www.google.com/search?hl=en&q=${newWord}&btnI=Iwords`;
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = topFive.slice(indexOfFirstPost, indexOfLastPost)

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(topFive.length / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <h1>Jobs For You</h1>
      <table className="minijb">
        <thead>
          <tr>
            <th>JOB ID</th>
            <th>JOB TITLE</th>
            <th>COMPANY</th>
            <th>JOB LINK</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((props, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="title">
                {props.title}{" "}
                <span className="hovertext">{props.description}</span>
              </td>

              <td>
                <a href={feelingLucky(props.company.display_name)} target="_blank">
                  {props.company.display_name}
                </a>
              </td>
              <td>
                <a href={props.redirect_url} target="_blank">Link</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav id="page">
        <ul className = "pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <Button
            size="small"
            variant="contained"
            color="primary"
            style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}
            onClick={() =>
              paginate(number)} className="page-link"
          >
            {number}
          </Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
