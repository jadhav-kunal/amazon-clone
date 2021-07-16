import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://static-cse.canva.com/image/96812/posters.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="83247834"
            title="Atom Bomb | About 140 pounds (64 kilograms) of highly enriched uranium-235|(4,400 kg)"
            price={89.99}
            image="https://www.atomicheritage.org/sites/default/files/styles/large/public/Our%20first%20atom%20bomb%20China%20display.jpg?itok=fm4Hqfxz"
            rating={5}
          />
          <Product
            id="82838246"
            title="Nuclear Bomb | Lockheed Martin F-35 Lightning II | B61 tactical variants are deployed with NATO"
            price={119.69}
            image="https://www.armytimes.com/resizer/KfOG2pl55FOY45JW1s_z8_4Isz8=/1200x0/filters:quality(100)/arc-anglerfish-arc2-prod-mco.s3.amazonaws.com/public/CVWOBCDXP5H6LDNDMJQOQ65PXU.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="25438246"
            title="Plastic Toy Horse : Sneh Toys Yellow Rubber Baby Toys"
            price={126.69}
            image="https://5.imimg.com/data5/NS/OK/MY-37146404/baby-toys-1-500x500.jpg"
            rating={4}
          />
          <Product
            id="25374846"
            title="Baby Toy Baby : Makes best noise, Baby toy to get them excited and engaged"
            price={159.99}
            image="https://rukminim1.flixcart.com/image/416/416/k3lwuq80/musical-toy/y/y/h/weeping-crawling-baby-toy-toyvala-original-imafhzf5hersxvee.jpeg?q=70"
            rating={5}
          />
          <Product
            id="27838246"
            title="Rubber Toy Duck : Sneh Toys Yellow Rubber Baby Toys"
            price={59.69}
            image="https://n4.sdlcdn.com/imgs/a/4/8/Sneh-Toys-Yellow-Rubber-Baby-SDL840366458-2-e484a.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="18274626"
            title="Great Wall of China | Exclusive | Limited Edition | Chemical Free"
            price={9999.0}
            image="https://image.shutterstock.com/image-photo/great-wall-260nw-309635165.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
