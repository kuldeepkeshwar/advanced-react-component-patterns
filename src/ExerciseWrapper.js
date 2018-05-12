import React from 'react';

const exerciseStyles = {
  minHeight: '300px',
  padding: '5px',
  margin: '5px',
  border: '2px solid grey'
};
const styles = {
  flex: '1'
};
export default ({ title, Component }) => (
  <div style={styles}>
    {title && <h3>{title}</h3>}
    <div style={exerciseStyles}>
      <Component />
    </div>
  </div>
);
