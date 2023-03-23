import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Blog = () => {
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/api/get").then((data) => {
      setPostList(data.data);
    });
  }, []);

  const likePost = (id) => {
    axios.post(`http://localhost:3001/api/like/${id}`).then((data) => {
      alert("you liked a post");
    });
  };

  return (
    <>
      <BlogNav />
      {postList.map((val, key) => {
        return (
          <div
            className="card mb-5"
            style={{ width: "18rem" }}
            key={key}
            onClick={() => {
              // navigate(`/blog/${val.id}`);
            }}
          >
            <div className="card-body">
              <h5 className="card-title">{val.title}</h5>
              <p className="card-title">{val.post_text}</p>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => {
                  likePost(val.id);
                }}
              >
                Like
              </button>
              <p className="card-title">{val.user_name}</p>
              <p className="card-title">{val.likes}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export const BlogNav = () => {
  return (
    <>
      <Navbar expand="md" className="navbar-light">
        <Container fluid>
          <Nav className="d-flex align-items-center">
            <Nav.Link href="/Blog" className="text-black mx-2">
              Blog
            </Nav.Link>
            <Nav.Link href="/CreateBlog" className="text-black mx-2">
              Create Blog
            </Nav.Link>
            <Nav.Link href="/blog/:blogId" className="text-black mx-2">
              Individual Blog
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
