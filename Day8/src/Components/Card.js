import React from "react";
function Card({ imgSrc, altText, title, address, price }) {
    return (
      <div className="card">
        <div className="card__img">
          <picture>
            <source
              media="(max-width: 320px)"
              srcSet={imgSrc.small}
            />
            <source
              media="(min-width: 481px)"
              srcSet={imgSrc.large}
            />
            <img src={imgSrc.medium} alt={altText} />
          </picture>
        </div>
        <div className="card__details">
          <h3>{title}</h3>
          <div className="address">{address}</div>
          <div className="price">
            <div className="star">
              {[1, 2, 3, 4].map((starId) => (
                <img
                  key={starId}
                  src="https://image.flaticon.com/icons/svg/291/291205.svg"
                  alt="Star"
                />
              ))}
            </div>
            <div className="price__l">
              <span className="price__label">{price}</span>
              <span className="measure__label">night</span>
            </div>
          </div>
          <button>Detail</button>
        </div>
        <span className="credit-img">image by: unsplash.com/@jazzband</span>
      </div>
    );
  }

  export default Card;


