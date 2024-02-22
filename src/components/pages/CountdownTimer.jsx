import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Set the target date for the countdown
  const targetDate = new Date('September 14, 2024 00:00:00').getTime();

  // Initialize state for the remaining time
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Function to calculate the remaining time
  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    return { months, days, hours, minutes };
  }

  // Update the remaining time every second
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div>
      <div>
      <p>{`${timeRemaining.months} Month : ${timeRemaining.days} Day :  
      ${timeRemaining.hours} Hour : ${timeRemaining.minutes} Minute`}</p>
      </div>
    </div>
    
  );
};

export default CountdownTimer;
