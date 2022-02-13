import React from 'react';
import Loader from '../Loader';
import Card from './Card/Card';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <Loader />;
  }
  return (
    <div className="mt-4 mb-12">
      <h3 className="text-center text-2xl font-bold mb-4">グローバル</h3>
      <div className="grid grid-flow-col justify-around items-center gap-4">
        <Card
          title="感染者累計"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          subTitle="コロナ感染者累計数"
        />
        <Card
          title="死者累計"
          value={deaths.value}
          lastUpdate={lastUpdate}
          subTitle="コロナ死者累計数"
        />
        <Card
          title="回復した人の累計"
          value={recovered.value}
          lastUpdate={lastUpdate}
          subTitle="コロナ回復者数"
        />
      </div>
    </div>
  );
};

export default Cards;
