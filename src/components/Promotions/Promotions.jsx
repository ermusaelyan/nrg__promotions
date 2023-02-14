import React from 'react';
import PromotionsItem from '../PromotionsItem/PromotionsItem';

const Promotions = () => {
  return (
    <div className="promotions">
      <div className="container">
        <div className="promotions__banner">
          <div className="promotions__icon">
            <svg>
              <use xlinkHref={'#promotions'} />
            </svg>
          </div>
          <div className="promotions__title">promotions</div>
        </div>
        <ul className="promotions__list">
          {Array.from(Array(6), (_, i) => (
            <PromotionsItem key={i} />
          ))}
        </ul>
        <div className="pagination">pagination</div>
      </div>
    </div>
  );
};

export default Promotions;
