import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;

  const { background, classname, label, key } = config;

  return (
    <button
      data-testid={key}
      className={classname}
      onClick={() => selectNextBackground({ background: background })}
    >
      {label}
    </button>
  );
};

export default ColourSelector;
