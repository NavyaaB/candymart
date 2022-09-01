import React, { useState } from "react";
import "../styles/sliderStyles.scss";

const SLIDES = [
  {
    title: "Fun Fact!",
    text: "Chocolate comes from a fruit tree; it’s made from a seed.",
  },
  {
    title: "Fun Fact!",
    text: "Studies have demonstrated that one of the major saturated fats in chocolate does not raise cholesterol like other hard fats–meaning chocolate can be enjoyed in moderation.",
  },
  {
    title: "Fun Fact!",
    text: "It takes 400 cocoa beans to make one pound of chocolate.",
  },
  {
    title: "Fun Fact!",
    text: "Research to date supports that chocolate can be enjoyed as part of a balanced, heart-healthy diet and lifestyle.",
  },
  {
    title: "Fun Fact!!",
    text: "Theobroma Cacao is the tree that produces cocoa beans, and it means “food of the gods.” Carolus Linnaeus, the father of plant taxonomy, named it.",
  },
];

export default function Slider() {
  let [arrayIndex, setArrayIndex] = useState(0);

  const onNext = () => {
    if (arrayIndex < SLIDES.length - 1) {
      arrayIndex = arrayIndex + 1;
      setArrayIndex(arrayIndex);
    } else {
      setArrayIndex(0);
    }
  };

  const onPrev = () => {
    if (arrayIndex > 0) {
      arrayIndex = arrayIndex - 1;
      setArrayIndex(arrayIndex);
    } else {
      setArrayIndex(0);
    }
  };

  return (
    <div>
      <div className='slider'>
        <p className='title'>{SLIDES[arrayIndex].title}</p>
        <br />
        <p className='text'>{SLIDES[arrayIndex].text}</p>
      </div>

      <div className='content flexLayout'>
        <button className='button' onClick={() => setArrayIndex(0)}>
          Restart
        </button>
        <button type='button' className='button' onClick={() => onPrev()}>
          Prev
        </button>
        <button type='button' className='button' onClick={() => onNext()}>
          Next
        </button>
      </div>
    </div>
  );
}
