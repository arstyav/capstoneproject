export const saveArticle = (article) => ({
    type: "SAVE_ARTICLE",
    payload: article,
  });
  
  export const unsaveArticle = (article) => ({
    type: "UNSAVE_ARTICLE",
    payload: article,
  });