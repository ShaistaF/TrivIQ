import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Analytics() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchAnalytics() {
      const response = await axios.get('http://localhost:8000/api/analytics/');
      setData(response.data);
    }
    fetchAnalytics();
  }, []);

  if (!data) return <div>Loading analytics...</div>;

  return (
    <div>
      <h2>Progress Analytics</h2>
      <p>Total Questions Answered: {data.total_questions_answered}</p>
      <p>Correct Answers: {data.correct_answers}</p>
      <p>Average Difficulty: {data.average_difficulty.toFixed(2)}</p>
    </div>
  );
}

export default Analytics;
