import React from 'react';
import './styles.css';

const StackVisualizer = ({ stack }) => {
  return (
    <div className="stack-container">
      {stack.map((item, index) => (
        <div key={index} className="stack-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default StackVisualizer;
