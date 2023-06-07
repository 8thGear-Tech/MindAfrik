import { useState, useEffect } from "react";
import axios from "axios";

export const CrudApp = () => {
  const [movieName, setMovieName] = useState("");
  const [movieReview, setMovieReview] = useState("");
  const [movieReviewList, setMovieReviewList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/get").then((response) => {
      // console.log(response);
      setMovieReviewList(response.data);
    });
  });

  const submitReview = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/insert", {
        movie_name: movieName,
        movie_review: movieReview,
      })
      .then(() => {
        setMovieReviewList([
          ...movieReviewList,
          { movie_name: movieName, movie_review: movieReview },
        ]);
      });
  };

  const deleteReview = (movie) => {
    axios.delete(`http://localhost:3001/api/delete/${movie}`, {});
  };

  return (
    <>
      <form className="justify-content-center mx-5 my-5">
        {" "}
        <div className="mb-3 w-50">
          <label htmlFor="name" className="form-label">
            Movie Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(event) => {
              setMovieName(event.target.value);
            }}
          />
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="name" className="form-label">
            Review:
          </label>
          <textarea
            type="textarea"
            className="form-control"
            id="name"
            onChange={(event) => {
              setMovieReview(event.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={submitReview}
        >
          Submit
        </button>
        {movieReviewList.map((val) => {
          return (
            <div
              className="card my-5 py-3 text-center border border-3 align-items-center"
              style={{ width: "28rem" }}
            >
              <h4> Movie Name: {val.movie_name}</h4>
              <p>Movie Review: {val.movie_review}</p>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => {
                  deleteReview(val.movieName);
                }}
              >
                Delete
              </button>
              {/* onClick=
              {() => {
                likePost(val.id);
              }} */}
              <textarea
                type="textarea"
                className="form-control my-5"
                id="text"
                // onChange={(event) => {
                //   setMovieReview(event.target.value);
                // }}
              />
              <button
                type="submit"
                className="btn btn-primary"
                // onClick={updateReview}
              >
                Update
              </button>
            </div>
          );
        })}
      </form>
    </>
  );
};
