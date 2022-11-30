import React from 'react';
import { useHistory } from 'react-router-dom';

const Redux = () => {
  const history = useHistory();

  const handleOnClick = () => history.goBack();

  return (
    <article>
      <h2>Redux</h2>
      <button onClick={handleOnClick}>Wróć do poprzedniej strony</button>
    </article>
  );
};

export default Redux;
