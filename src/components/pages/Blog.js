import React from "react";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    window.location.href = "https://google.com";
  }, []);

  return (
    <div>
      <h2>Something</h2>
    </div>
  );
};

export default Blog;
