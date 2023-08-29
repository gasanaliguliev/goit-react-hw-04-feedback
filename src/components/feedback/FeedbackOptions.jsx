import React from 'react';
import css from './FeedbackButton.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <button 
      key={option} 
      onClick={() => onLeaveFeedback(option)}
      className={css.button}>
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
