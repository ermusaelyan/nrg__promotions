import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Promotion = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 1024px)',
  });

  return (
    <div className="promotion">
      <div className="container">
        <div className="promotion__head">
          {isMobile && (
            <div className="promotion__prevPage">
              <button className="promotion__prevButton">
                <svg>
                  <use xlinkHref={'#back'} />
                </svg>
              </button>
            </div>
          )}
          <div className="promotion__title">PROMOTIONS PIKSMARTPIK</div>
        </div>
        <div className="promotion__body">
          <div className="promotion__banner">
            <div className="image-container">
              <img
                src="https://fs.betunit.com/1659957357990756x312_Promo.jpg"
                alt="PROMOTIONS PIKSMARTPIK"
              />
            </div>
          </div>
          <div className="promotion__conditions">
            WIN 20 PIKIPIKI <span>OR</span> 100 SMARTPHONES !
          </div>
          <div className="promotion__info">
            <p className="promotion__text">
              The hottest promotion ever on PMbet!
            </p>
            <p className="promotion__text">
              Win either one of the 20 PikiPikis or 100 smartphones every day !
            </p>
            <p className="promotion__text">
              For participating you should just choose your favorite slots from
              the large amount of online slots and start spinning!
            </p>
            <p className="promotion__text">
              The winner will be chosen randomly every day! So the more you
              play, the bigger are chances to be among the winners!
            </p>
            <p className="promotion__text">
              Don’t hesitate to take part, it’s your victory time now!
            </p>
          </div>
          <div className="promotion__start">
            <button className="promotion__startButton" type={'button'}>
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
