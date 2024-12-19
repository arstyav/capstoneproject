import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsList from "../components/NewsList";
import { saveArticle, unsaveArticle } from "../redux/actions.jsx";
import axios from "axios";

const Programming = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Tambahkan state untuk loading
  const dispatch = useDispatch();
  const savedArticles = useSelector((state) => state.savedArticles);

  useEffect(() => {
    setIsLoading(true); // Atur loading ke true sebelum fetch
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=programming&api-key=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => {
        setArticles(response.data.response.docs);
        setIsLoading(false); // Atur loading ke false setelah data berhasil dimuat
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false); // Atur loading ke false jika terjadi error
      });
  }, []);

  return (
    <div>
      <h1>Programming News</h1>
      {isLoading ? ( // Tampilkan animasi loading saat data sedang dimuat
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

export default Programming;

