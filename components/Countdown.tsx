
import React from 'react';
import useCountdown from '../hooks/useCountdown';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <span className="font-playfair text-4xl md:text-6xl font-bold gold-text">{value.toString().padStart(2, '0')}</span>
      <span className="font-montserrat text-xs md:text-sm uppercase tracking-widest mt-1">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center items-center">
      <TimeBlock value={days} label="Days" />
      <TimeBlock value={hours} label="Hours" />
      <TimeBlock value={minutes} label="Minutes" />
      <TimeBlock value={seconds} label="Seconds" />
    </div>
  );
};

export default Countdown;
