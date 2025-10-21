
import React from 'react';
import useCountdown from '../hooks/useCountdown';

interface CountdownProps {
  targetDate: string;
}

// Moved TimeBlock outside of Countdown to prevent it from being re-created on every render.
// This ensures animations only trigger when the 'value' prop actually changes.
const TimeBlock = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center mx-2 md:mx-4">
    <div className="h-12 md:h-16 w-16 md:w-20 flex items-center justify-center overflow-hidden">
      <span 
        key={value} 
        className="font-playfair text-4xl md:text-6xl font-bold gold-text animate-tick"
      >
        {value.toString().padStart(2, '0')}
      </span>
    </div>
    <span className="font-montserrat text-xs md:text-sm uppercase tracking-widest mt-1">{label}</span>
  </div>
);

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div className="flex justify-center items-start">
      <TimeBlock value={days} label="Days" />
      <TimeBlock value={hours} label="Hours" />
      <TimeBlock value={minutes} label="Minutes" />
      <TimeBlock value={seconds} label="Seconds" />
    </div>
  );
};

export default Countdown;
