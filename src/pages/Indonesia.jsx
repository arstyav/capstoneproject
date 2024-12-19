import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsList from "../components/NewsList";
import { saveArticle, unsaveArticle } from "../redux/actions";
import axios from "axios";

const Indonesia = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Tambahkan state untuk animasi loading
  const dispatch = useDispatch();
  const savedArticles = useSelector((state) => state.savedArticles);

  useEffect(() => {
    setIsLoading(true); // Set isLoading ke true sebelum memulai fetch
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=indonesia&api-key=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => {
        setArticles(response.data.response.docs);
        setIsLoading(false); // Set isLoading ke false setelah data dimuat
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false); // Set isLoading ke false jika terjadi error
      });
  }, []);

  return (
    <div>
      <h1>Indonesia News</h1>
      {isLoading ? ( // Tampilkan animasi loading jika isLoading true
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <NewsList
          articles={articles}
          onSave={(article) => dispatch(saveArticle(article))}
          onUnsave={(article) => dispatch(unsaveArticle(article))}
          savedArticles={savedArticles}
        />
      )}
    </div>
  );
};

export default Indonesia;

