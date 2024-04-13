import { useState, useEffect, useRef } from "react";
import './slider.css'
import pa from '../assets/images/employment-based.png'

const Slider = () => {
  const delay = 8000;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slide, index) => (
          <div
            className={`slide w-[100%] bg-center bg-cover bg-no-repeat font-bold rounded-2xl px-6 py-5`}
            key={index}
            // style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.bgimage})`}}
          >
            <div className="w-fit mx-auto mb-[20px]">
              <img src={slide?.img} alt="Achievent" />
              {/* <h2 className="text-wrap text-[30px] font-semibold leading-10 mt-4 mb-[10px]">
                {slide.title}
              </h2>
              <p className="text-wrap text-base font-normal leading-normal">
                {slide.subTitle}
              </p> */}
            </div>
            <div className="slideshowDots">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const slides = [
  {
    img: pa,
    title: "Self Petition Approval",
    subTitle:
      "We’re ecstatic to share that our client’s EB-2 NIW petition has been SUCCESSFULLY APPROVED!",
  },
  {
    img: pa,
    title: "Self Petition Approval",
    subTitle:
      "We’re ecstatic to share that our client’s EB-2 NIW petition has been SUCCESSFULLY APPROVED!",
  },
  {
    img: pa,
    title: "Self Petition Approval",
    subTitle:
      "We’re ecstatic to share that our client’s EB-2 NIW petition has been SUCCESSFULLY APPROVED!",
  },
  {
    img: pa,
    title: "Self Petition Approval",
    subTitle:
      "We’re ecstatic to share that our client’s EB-2 NIW petition has been SUCCESSFULLY APPROVED!",
  },
];

export default Slider;
