import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/SearchBar.jsx";
import NewsList from "../components/NewsList";
import { saveArticle, unsaveArticle } from "../redux/actions.jsx";
import axios from "axios";

const Search = () => {
  const [articles, setArticles] = useState([]); // State untuk artikel hasil pencarian
  const [loading, setLoading] = useState(false); // State untuk loading
  const dispatch = useDispatch();
  const savedArticles = useSelector((state) => state.savedArticles); // State artikel yang disimpan

  const handleSearch = async (query) => {
    try {
      setLoading(true); // Mulai loading
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${import.meta.env.VITE_API_KEY}`
      );
      setArticles(response.data.response.docs); // Set artikel ke state
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false); // Selesai loading
    }
  };

  const handleSave = (article) => {
    dispatch(saveArticle(article));
  };

  const handleUnsave = (article) => {
    dispatch(unsaveArticle(article));
  };

  return (
    <div>
      <h1>Search News</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <NewsList
          articles={articles}
          onSave={handleSave}
          onUnsave={handleUnsave}
          savedArticles={savedArticles}
        />
      )}
      <style jsx>{`
        .spinner-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-top: 4px solid #000;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Search;
