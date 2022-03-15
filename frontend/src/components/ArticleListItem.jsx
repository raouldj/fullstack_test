import React from "react";
import PropTypes from 'prop-types';
import Article from "./Article";

const ArticleListItem = (props) => {
  const {id, title, author, description} = props;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{author}</td>
      <td>{description}</td>
      <td>Delete</td>
    </tr>
  );
};

ArticleListItem.defaultProps = {
  title: null,
  description: null,
  body: null,
  author: null,
};

ArticleListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
};

export default ArticleListItem;
