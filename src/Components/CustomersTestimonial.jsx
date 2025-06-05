import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { rating, t1, t2, t3 } from "../assets";

const CustomersTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  // Array of service cards data for easy mapping
  const serviceCards = [
    {
      image: rating,
      description:
        " “Analytica Haven is a professional, knowledgeable and always ready to go the extra mile.” ",
      profileImg: t1,
      name: "Kristin Watson",
      position: "CEO of Company",
    },
    {
      image: rating,
      description:
        " “Analtica Haven’s data tools allowed  us to clearly communicate our progress,helping us expand .” ",
      profileImg: t2,
      name: "Albert Flores",
      position: "CTO of Company",
    },
    {
      image: rating,
      description:
        " “Analytica Haven delivers visualization, strategic recommendations, data analysis, and so much more.” ",
      profileImg: t3,
      name: "Michel Smith",
      position: "Ethnographer",
    },
    {
      image: rating,
      description:
        " “Analytica Haven is a professional, knowledgeable and always ready to go the extra mile.” ",
      profileImg: t2,
      name: "Dianne Russell",
      position: "Chief Marketing officer",
    },
  ];

  // Calculate total number of cards
  const totalCards = serviceCards.length;

  // To ensure infinite scrolling, we duplicate the cards
  // We need enough duplicates to create a seamless experience
  const duplicatedCards = [...serviceCards, ...serviceCards, ...serviceCards];

  // Handle navigation with smooth transition for infinite scrolling
  const goToPrev = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      // Decrement index, or loop back to end if at beginning
      const newIndex = prev === 0 ? totalCards - 1 : prev - 1;
      return newIndex;
    });
  };

  const goToNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      // Increment index, or loop back to beginning if at end
      const newIndex = prev === totalCards - 1 ? 0 : prev + 1;
      return newIndex;
    });
  };

  // Go to specific slide index
  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex % totalCards) return;

    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  // Reset transition state after animation completes
  useEffect(() => {
    const transitionEndHandler = () => {
      setIsTransitioning(false);
    };

    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener("transitionend", transitionEndHandler);
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener(
          "transitionend",
          transitionEndHandler
        );
      }
    };
  }, []);

  // Auto-play functionality
  useEffect(() => {
    // Start auto-sliding
    intervalRef.current = setInterval(() => {
      if (!isTransitioning) {
        goToNext();
      }
    }, 5000); // Change slide every 5 seconds

    // Clean up interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isTransitioning]);

  // Pause auto-play when hovering
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Resume auto-play when not hovering
  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      if (!isTransitioning) {
        goToNext();
      }
    }, 5000);
  };

  // State to track screen size
  const [isMobile, setIsMobile] = useState(false);

  // Update screen size state based on viewport width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate slide translations based on screen size and current index
  const getSlideTransform = () => {
    if (isMobile) {
      // On mobile: Slide exactly one card at a time (100% width)
      return `translateX(-${currentIndex * 100}%)`;
    } else {
      // On desktop: Calculate translation for 3.5 cards visible
      // Each card takes 28.57% width (100/3.5), so we move that percentage each time
      return `translateX(-${currentIndex * 28.57}%)`;
    }
  };

  return (
    <section>
      <div className="bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto justify-center lg:p-8 p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between lg:mt-10 mt-5">
            <div>
              <h1 className="lg:text-4xl text-lg font-semibold font-campton lg:text-start text-center">
                Hear from our Community
              </h1>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:ml-[260px] ml-[200px] w-16 h-3 lg:w-[200px] lg:h-[14px] -m-2"
                  viewBox="0 0 219 11"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.33804 2.7039C9.95984 3.30132 22.1062 3.3312 55.0789 3.39094C106.567 3.48055 147.43 4.1377 158.788 5.09356C159.689 5.18318 87.516 5.84033 80.1042 5.3624C68.5497 4.58576 13.3698 5.24292 2.26621 6.13904C-0.890144 6.37801 0.293501 7.21439 2.35077 7.39362C5.56347 7.69232 14.1871 7.66245 37.8317 7.60271C54.4589 7.57283 186.744 8.25987 201.201 9.48457C209.317 10.1716 214.249 10.7989 216.504 10.6495C218.392 10.53 218.42 10.1716 216.786 9.18586C215.686 8.5287 216.926 8.14038 217.716 7.96116C218.927 7.66245 218.42 6.64684 216.898 5.84033C214.841 4.73512 211.29 4.76499 212.981 5.87021C213.347 6.10917 213.432 6.70658 212.136 6.5871C208.359 6.22865 181.671 3.77925 174.428 3.36106C97.0978 -1.17929 21.627 2.13636 5.64802 1.03114C-0.0165111 0.61295 2.57625 2.34546 5.33804 2.7039Z"
                    fill="#0022EC"
                  />
                </svg>
              </div>
            </div>

            {/* Navigation buttons - only visible on desktop */}
            <div className="hidden md:flex items-center justify-center gap-5">
              <button
                onClick={goToPrev}
                className="border-[#193D6F] border p-3 rounded-full hover:bg-[#E0F780] hover:border-[#E0F780]"
                aria-label="Previous slide"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={goToNext}
                className="border-[#193D6F] border p-3 rounded-full hover:bg-[#E0F780] hover:border-[#E0F780]"
                aria-label="Next slide"
              >
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* Slider container with overflow hidden */}
          <div
            className="overflow-hidden mt-6 md:mt-16"
            ref={sliderRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Mobile view - Single card carousel with each card fully transitioning */}
            {isMobile ? (
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: getSlideTransform(),
                }}
              >
                {duplicatedCards.map((card, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0"
                    style={{ minWidth: "100%" }}
                  >
                    <div className="bg-white p-6 rounded-md h-full mx-2">
                      <img
                        src={card.image}
                        alt="Rating"
                        className="w-20 h-10 object-contain"
                      />
                      <p className="text-[#575959] mt-3">{card.description}</p>

                      <div className="flex items-center gap-2 mt-4">
                        <img
                          src={card.profileImg}
                          alt={card.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="space-y-1">
                          <h1 className="text-[#080F10] font-campton font-semibold">
                            {card.name}
                          </h1>
                          <p className="text-[#575959] font-campton text-sm">
                            {card.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Desktop view - 3.5 cards visible with full card transitions */
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: getSlideTransform(),
                }}
              >
                {duplicatedCards.map((card, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{ width: "28.57%" }} // Exactly 3.5 cards visible (100/3.5 = 28.57%)
                  >
                    <div className="bg-white p-5 md:p-5 rounded-md h-full mx-2">
                      <img
                        src={card.image}
                        alt="Rating"
                        className="w-16 h-16 md:w-20 md:h-10 object-contain"
                      />
                      <p className="text-[#575959] mt-3">{card.description}</p>
                      <div className="flex items-center gap-2 mt-4">
                        <img
                          src={card.profileImg}
                          alt={card.name}
                          className="w-10 h-10 md:w-16 md:h-16 rounded-full object-cover"
                        />
                        <div className="space-y-1">
                          <h1 className="text-[#080F10] font-campton font-semibold">
                            {card.name}
                          </h1>
                          <p className="text-[#575959] font-campton text-sm">
                            {card.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile navigation buttons - below the card */}
          {isMobile && (
            <div className="flex items-center justify-center mt-6 gap-5">
              <button
                onClick={goToPrev}
                className="border-[#193D6F] border p-3 rounded-full hover:bg-[#E0F780] hover:border-[#E0F780]"
                aria-label="Previous slide"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={goToNext}
                className="border-[#193D6F] border p-3 rounded-full hover:bg-[#E0F780] hover:border-[#E0F780]"
                aria-label="Next slide"
              >
                <ArrowRight />
              </button>
            </div>
          )}
        </div>
        <br />
      </div>
    </section>
  );
};

export default CustomersTestimonial;
