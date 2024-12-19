import React from "react";

const SavedNews = ({ savedArticles, onUnsave }) => {
  return (
    <ul className="list-group">
      {savedArticles.map((article) => (
        <li className="list-group-item d-flex justify-content-between align-items-center" key={article.web_url}>
          <a href={article.web_url} target="_blank" rel="noopener noreferrer">
            {article.headline.main}
          </a>
          <button
            className="btn btn-danger"
            onClick={() => onUnsave(article)}
          >
            Unsave
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SavedNews;
