import React from 'react';
import CountUp from 'react-countup';

const Card = ({ title, value, lastUpdate, subTitle }) => {
  return (
    <div className="grid text-xl bg-gray-100 p-8 rounded-lg">
      <div>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <CountUp start={0} end={value} duration={2.75} separator="," />
        <h3 className="mt-4">{new Date(lastUpdate).toDateString()}</h3>
        <h3 className="mt-2">{subTitle}</h3>
      </div>
    </div>
  );
};

export default Card;
