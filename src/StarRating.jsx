import Star from './Star'
import React, { useState } from "react";

const createArray = lenght => [...Array(lenght)];

export default function StarRating({ totalStars = 5}) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star 
          key={i} 
          selected={selectedStars > i} 
          onSelect={() => setSelectedStars(i + 1)}
          />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}