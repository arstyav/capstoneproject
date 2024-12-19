import React from "react";

const NewsList = ({ articles, onSave, onUnsave, savedArticles }) => {
  const isSaved = (article) => savedArticles.some((a) => a.web_url === article.web_url);

  return (
    <div className="container">
      <div className="row">
        {articles.map((article) => {
          // Dapatkan URL gambar dari multimedia
          const imageUrl =
            article.multimedia && article.multimedia.length > 0
              ? `https://www.nytimes.com/${article.multimedia[0].url}`
              : "https://via.placeholder.com/150"; // Placeholder jika tidak ada gambar

          return (
            <div className="col-md-4 mb-4" key={article._id}>
              <div className="card h-100">
                {imageUrl && (
                  <img src={imageUrl} className="card-img-top" alt={article.headline.main} />
                )}
                <div className="card-body">
                  <h5 className="card-title">{article.headline.main}</h5>
                  <p className="card-text">
                    {article.abstract || "No description available."}
                  </p>
                  <a
                    href={article.web_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-link"
                  >
                    Read More
                  </a>
                  <button
                    className={`btn ${
                      isSaved(article) ? "btn-danger" : "btn-primary"
                    }`}
                    onClick={() =>
                      isSaved(article) ? onUnsave(article) : onSave(article)
                    }
                  >
                    {isSaved(article) ? "Unsave" : "Save"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsList;
