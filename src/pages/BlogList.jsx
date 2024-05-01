import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { callAllBlogsListDummyApi } from "../dummy_api_services";



const itemsPerPage = 3;

export const BlogList = () => {
  const [blogs , setBlogs] = useState([{}]);
  const [currentPage, setCurrentPage] = useState(1);

  // pagination logic 
  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // initialize the blogs state
  useEffect(()=>{
    const apiResponse = callAllBlogsListDummyApi();
    setBlogs(apiResponse);
  } , []);

  return (
    <div>
      <h1>List of Blogs</h1>
      {currentBlogs.map((blog) => (
        <Link to={`${blog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div
            key={blog.id}
            style={{
              backgroundColor: blog.backgroundColor,
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <img
              src={blog.imageUrl}
              alt={blog.title}
              style={{
                maxWidth: "100px",
                float: "left",
                marginRight: "20px",
                borderRadius: "4px",
              }}
            />
            <div>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
            </div>
          </div>
        </Link>
      ))}
      <div style={{ marginTop: "20px" , display : "flex" , justifyContent : "space-between" , width : "100px" }}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button key={i + 1} onClick={() => paginate(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
