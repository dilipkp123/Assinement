import React, { useEffect, useState } from "react";
import axios from "axios";
import "./post.css";
const Post = () => {
  const [posts, setPosts] = useState([]);
  const Base_URL = "https://jsonplaceholder.typicode.com/posts";
  const getAllPost = async () => {
    try {
      const resp = await axios.get(Base_URL);
      console.log(resp.data);
      setPosts(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllPost();
  }, []);
  return (
    <div>
      <h2>POST LIST</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <div
                style={{
                  height: "300px",
                  width: "200px",
                  border: "1px solid #ccc",
                  margin: "2px",
                  textAlign: "center",
                }}
              >
                <h2>
                  Title: <span>{post.title.slice(0, 50)}</span>
                </h2>
                <p>Body: {post.body.slice(0, 50)}</p>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
