import { Image } from "./image";
import React, { useState, useEffect } from "react";

const shuffleArray = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const Gallery = (props) => {
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    if (props.data) {
      const shuffled = shuffleArray([...props.data]); // Copy and shuffle the data
      setShuffledData(shuffled);
    }
  }, [props.data]);

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
          Witness the journey of our club members as they hone their skills, from novice players to seasoned competitors.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {shuffledData.length > 0
              ? shuffledData.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
