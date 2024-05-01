import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { callBlogDummyApi } from "../dummy_api_services";
import "../styles/HomePage.css";

export const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  // calling blog api to get blog using id
  useEffect(() => {
    const apiResponse = callBlogDummyApi(id);
    setBlog(apiResponse);
  }, [id]);

  return (
    <>
      <div style={{width : "680px"}}>
        <h1>{blog?.title}</h1>
        <img
          src={blog.imageUrl}
          alt="content"
          className="home-blog-content-img"
        />
        <p className="home-paragraph-container" id="txtArea">
          {blog.description}
        </p>
      </div>
    </>
  );
};
