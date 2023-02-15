import React from 'react';
import PromotionsItem from '../PromotionsItem/PromotionsItem';
import { useMediaQuery } from 'react-responsive';

const Promotions = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 1024px)',
  });

  return (
    <div className="promotions">
      <div className="container">
        <div className="promotions__banner">
          {isMobile && (
            <div className="promotions__backToMenu">
              <button type={'button'} className="promotions__backToMenuButton">
                <svg>
                  <use xlinkHref={'#back'} />
                </svg>
              </button>
            </div>
          )}
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
        {!isMobile && <div className="pagination">pagination</div>}
        {isMobile && (
          <>
            <div className="promotions__loadMore">
              <button type={'button'} className="promotionsLoadMoreButton">
                Load More
              </button>
            </div>
            <div className="scrollTop">
              <button className="scrollTopButton">
                <svg>
                  <use xlinkHref={'#back'} />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Promotions;
