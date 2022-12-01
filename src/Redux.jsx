import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Redux = () => {
  const history = useHistory();
  const location = useLocation();

  const handleOnClick = () => history.goBack();

  const isActive = Boolean(
    history.location.state && history.location.state.isActive
  );

  return (
    <article>
      <h2>Redux</h2>
      <p>Przesłana informacja isActive: {String(isActive)}</p>
      <button onClick={handleOnClick}>Wróć do poprzedniej strony</button>
    </article>
  );
};

export default Redux;
