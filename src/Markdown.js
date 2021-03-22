import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

export default function Markdown(props) {
  const { filePath } = props;
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(filePath)
      .then(response => response.text())
      .then(result => {
        setText(result)});
  }, [filePath]);

  return (
    <ReactMarkdown source={text} />
  );
}

Markdown.propTypes = {
  filePath: PropTypes.string,
};
