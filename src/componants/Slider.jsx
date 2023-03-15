import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="ms-5 me-5 mt-5">
        <Carousel responsive={responsive}>
          <div className="cardS">
            <img
              src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2023/02/LE-JOUR-SE-LEVE-1.webp"
              alt="product"
              height={[200]}
              width={[]}
            />
            <h6 className="w-75 ">
              Le Jour Se Leve By Louis Vuitton 2ml Official Sample Spray
            </h6>
            <p className="price">₹950.00</p>
            <button>
              {" "}
              <b> Add to cart </b>
            </button>
          </div>

          <div className="cardS">
            <img
              src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2023/02/oud-al-.jpg"
              alt="product"
              height={[200]}
              width={[]}
            />
            <h6>Oud Al Emarat By Blend Oud EDP Perfume</h6>
            <p className="price">₹1,250.00 – ₹12,800.00</p>
            <button>
              {" "}
              <b> Add to cart </b>
            </button>
          </div>

          <div className="cardS">
            <img
              src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2023/02/labdanum.jpg"
              alt="product"
              height={[200]}
              width={[]}
            />
            <h6>Labdanum 18 By Le Labo Edp Perfume</h6>
            <p className="price">₹850.00 – ₹25,950.00</p>
            <button>
              {" "}
              <b> Add to cart </b>
            </button>
          </div>

          <div className="cardS">
            <img
              src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2022/04/logo-website-editing-3-1.jpg"
              alt="product"
              height={[200]}
              width={[]}
            />
            <h6>Chance By Chanel Sample Discovery Vial Spray</h6>
            <p className="price">₹1,650.00</p>
            <button>
              {" "}
              <b> Add to cart </b>
            </button>
          </div>

          <div className="cardS">
            <img
              src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2020/03/Alhambra-Oud-By-Ramon-Monegal-Extrait-De-Parfum-NEW.jpg"
              alt="product"
              height={[200]}
              width={[]}
            />
            <h6 className="w-75">
              Alhambra Oud By Ramon Monegal Extrait De Parfum{" "}
            </h6>
            <p className="price">₹1,050.00 – ₹24,800.00</p>
            <button>
              {" "}
              <b> Add to cart </b>
            </button>
          </div>

          <div className="cardS">
            <img
              src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2022/11/Santal-Pondicherry-By-Blend-Oud-EDP-Perfume-jpg.webp"
              alt="product"
              height={[200]}
              width={[]}
            />
            <h6>Santal Pondicherry By Blend Oud EDP Perfume</h6>
            <p className="price">₹1,250.00 – ₹14,500.00</p>
            <button>
              {" "}
              <b> Add to cart </b>
            </button>
          </div>

          <div className="cardS">Item 3</div>
        </Carousel>
      </div>
    </>
  );
};
