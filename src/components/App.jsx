import React, { useState } from 'react';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedback/FeedbackOptions';
import Section from './section/Section';
import Notification from './notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;

  const positivePercentage = totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

  return (
    <div style={{ height: '100vh', fontSize: 20, marginLeft: '20px' }}>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positivePercentage} />
        )}
      </Section>
    </div>
  );
};

export default App;


