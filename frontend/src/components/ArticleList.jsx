import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ArticleListItem from "./ArticleListItem";
import { actionGetArticles } from "../actions/articleActions";
import { articlesSelector } from "../selectors/articlesSelectors";

const ArticleList = () => {
  const articles = useSelector(articlesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetArticles())
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  if (articles === null) {
    return ('');
  }

  return (
  <>
    <div>
      <table>
        <tbody>
          {articles.map((article) => (
            <ArticleListItem
              key={article.id}
              id={article.id}
              title={article.title}
              author={article.author}
              description={article.description}
            />
          ))}
        </tbody>
      </table>
    </div>
    <div>
      <div>
        Add article
      </div>
    </div>
  </>
  );
};

export default ArticleList;
