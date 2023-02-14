import React from 'react';

const PromotionsItem = () => {
  return (
    <li className="promotions__item">
      <a className="promotions__link">
        <span className="promotions__image">
          <span className="image-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png"
              alt="SMART WINNING TOURNAMENT"
            />
          </span>
        </span>
        <span className="promotions__name">SMART WINNING TOURNAMENT</span>
        <span className="promotions__subtitle">SMART WINNING TOURNAMENT</span>
      </a>
    </li>
  );
};

export default PromotionsItem;
