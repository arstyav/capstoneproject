import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SavedNews from "../components/SavedNews.jsx";
import { unsaveArticle } from "../redux/actions.jsx";

const Saved = () => {
  const savedArticles = useSelector((state) => state.savedArticles);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Saved Articles</h1>
      <SavedNews
        savedArticles={savedArticles}
        onUnsave={(article) => dispatch(unsaveArticle(article))}
      />
    </div>
  );
};

export default Saved;
