import React from 'react';

import '../../scss/components/hint.scss';

function Hint({ text }) {
  return (
    <div className="hint">
      <span className="hint__text">{text}</span>
    </div>
  );
}

export default Hint;
