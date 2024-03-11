import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export const IndividualBlog = () => {
  let { blogId } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/api/getFromId/${blogId}`).then((data) => {
      // console.log(data);
      setBlog({
        title: data.data[0].title,
        text: data.data[0].post_text,
        username: data.data[0].user_name,
      });
    });
  }, []);

  return (
    <div className="card mb-5" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <p className="card-title">{blog.text}</p>
        <p className="card-title">{blog.username}</p>
      </div>
    </div>
  );
};
