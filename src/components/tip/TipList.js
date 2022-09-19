import React, { useEffect, useState } from 'react';
import { TipCard } from './TipCard';
import { getAllTips, getTipById } from './TipManager';

export const TipList = () => {

  const [tips, setTips] = useState([])

  const getTips = () => {
    return getAllTips().then(tipsFromAPI => {
      // We'll do something more interesting with this data soon.
      setTips(tipsFromAPI);
    });
  };

  useEffect(() => {
    getTips();
  }, []);

  return (
    <div className="container__cards">
    {tips.map(tip => <TipCard key={tip.id} tip={tip} />)}
  </div>
  );
};