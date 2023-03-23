import { useState, useEffect } from "react";
import axios from "axios";
import { BlogNav } from "./blog";

export const CreateBlog = () => {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const submitPost = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/create", {
      username: username,
      title: title,
      text: text,
    });
  };
  //   useEffect(() => {
  //     console.log(username + title + text);
  //   }, [username, title, text]);

  return (
    <>
      <BlogNav />
      <form className="justify-content-center mx-5 my-5">
        {" "}
        <div className="mb-3 w-50">
          <label htmlFor="name" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="name" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="name" className="form-label">
            Post Text:
          </label>
          <textarea
            type="textarea"
            className="form-control"
            id="name"
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={submitPost}>
          Submit
        </button>
      </form>
    </>
  );
};
