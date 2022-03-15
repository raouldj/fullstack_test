import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {
  const {id, title, description, body, author} = props;
  const [titleState, setTitleState] = useState(title);
  const [descriptionState, setDescriptionState] = useState(description);
  const [bodyState, setBodyState] = useState(body);
  const [authorState, setAuthorState] = useState(author);

  const save = (event) => {
    console.log('save');
  }

  return (
    <form>
      <div>
      {id !== null ? `Id: ${id}` : 'Add article'}
      </div>
      <div>
        Title:
        <input
          type="text"
          value={titleState === null ? '' : titleState}
          onChange={(e) => {setTitleState(e.target.value)}}
        />
      </div>
      <div>
        Description:
        <input
          type="text"
          value={descriptionState === null ? '' : descriptionState}
          onChange={(e) => {setDescriptionState(e.target.value)}}
        />
      </div>
      <div>
        Body:
        <textarea
          value={bodyState === null ? '' : bodyState}
          onChange={(e) => {setBodyState(e.target.value)}}
        />
      </div>
      <div>
        Author:
        <input
          type="text"
          value={authorState === null ? '' : authorState}
          onChange={(e) => {setAuthorState(e.target.value)}}
        />
      </div>
      <div>
        <button type="button" onClick={save}>Save</button>
      </div>
    </form>
  );
};

Article.defaultProps = {
  id: null,
  title: '',
  description: '',
  body: '',
  author: '',
};

Article.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
};

export default Article;
