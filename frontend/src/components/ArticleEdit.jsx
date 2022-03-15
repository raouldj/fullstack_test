import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import Article from "./Article";
import {useDispatch, useSelector} from "react-redux";
import {articleSelector} from "../selectors/articlesSelectors";
import {actionGetArticle} from "../actions/articleActions";

const ArticleEdit = () => {
  const {
    articleId: articleIdStr,
  } = useParams();
  const id = articleIdStr === 'add' ? null : parseInt(articleIdStr, 10);

  const article = useSelector(articleSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    if (id === null) {
      return;
    }
    dispatch(actionGetArticle(id))
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  if (article === null) {
    return ('');
  }

  return (
    <Article
      id={id}
      title={article.title}
      description={article.description}
      body={article.body}
      author={article.author}
    />
  );
};

export default ArticleEdit;
