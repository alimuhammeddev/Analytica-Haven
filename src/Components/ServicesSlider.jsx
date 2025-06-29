import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { processdev, projectmgt, qualityass } from "../assets";

const ServicesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  // Array of service cards data for easy mapping
  const serviceCards = [
    {
      image: projectmgt,
      title: "Project Management",
      description:
        "Stay oganized. Stay on track Turning plans into results, step by step."
    },
    {
      image: processdev,
      title: "Process Development",
      description:
        "We design and refine systems for efficiency improving how work gets done, step by step.",
    },
    {
      image: qualityass,
      title: "Quality Assurance",
      description:
        "Committed to excellence at every stage. We ensure all outcomes meet the highest standards.",
    },
    {
      image: processdev,
      title: "Software Development",
      description:
        "Building robust solutions that drive innovation and efficiency, step by step.",
    },
    {
      image: qualityass,
      title: "Quality Assurance",
      description:
        "Committed to excellence at every stage. We ensure all outcomes meet the highest standards.",
    },
    {
      image: projectmgt,
      title: "Human Resources",
      description:
        "Empowering to excellence at every stage. We ensure all outcomes meet the highest standards."
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
      sliderElement.addEventListener('transitionend', transitionEndHandler);
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('transitionend', transitionEndHandler);
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
      <div className="bg-[#193D6F]">
        <div className="max-w-7xl mx-auto justify-center lg:p-8 p-5">
          <div className="lg:block hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="48"
              viewBox="0 0 38 48"
              fill="none"
            >
              <path
                d="M0.138672 0.382812H37.1387V10.3828C37.1387 30.8173 20.5732 47.3828 0.138672 47.3828V0.382812Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-[#FFFFFF] md:text-[1.5rem] text-[1.2rem] font-campton lg:mt-12 text-start">
                Our Services
              </h1>

              <h1 className="lg:text-[2rem] text-[1.2rem] font-semibold font-campton text-[#FFFFFF] text-start mt-3">
                Powerful Solutions to
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:ml-0 ml-20 w-28 h-3 lg:w-[320px] lg:h-[14px] -m-2"
                  viewBox="0 0 465 15"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.6693 3.38262C20.5063 4.18113 46.3583 4.22106 116.537 4.30091C226.123 4.42068 313.096 5.29903 337.269 6.57663C339.188 6.69641 185.576 7.57476 169.801 6.93595C145.208 5.8979 27.764 6.77626 4.13122 7.97401C-2.58671 8.29341 -0.0674588 9.41132 4.3112 9.65087C11.1491 10.0501 29.5035 10.0102 79.8282 9.93034C115.217 9.89041 396.771 10.8087 427.541 12.4456C444.816 13.3639 455.313 14.2023 460.111 14.0027C464.13 13.843 464.19 13.3639 460.711 12.0464C458.372 11.168 461.011 10.649 462.69 10.4094C465.27 10.0102 464.19 8.65274 460.951 7.57476C456.572 6.09753 449.015 6.13746 452.614 7.61469C453.393 7.93409 453.573 8.73259 450.814 8.57289C442.777 8.09378 385.974 4.81993 370.559 4.26098C205.969 -1.80763 45.3386 2.62404 11.329 1.14682C-0.727283 0.587864 4.7911 2.90352 10.6693 3.38262Z"
                    fill="#E0F780"
                  />
                </svg>
                Elevate Your Business
              </h1>
            </div>

            <div className="hidden md:flex items-center gap-5">
              <button
                onClick={goToPrev}
                className="border-[#FFFFFF] border p-3 rounded-full hover:bg-[#E0F780] hover:border-[#E0F780] text-[#FFFFFF] hover:text-[#193D6F] transition-colors"
                aria-label="Previous slide"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={goToNext}
                className="border-[#FFFFFF] border p-3 rounded-full hover:bg-[#E0F780] hover:border-[#E0F780] text-[#FFFFFF] hover:text-[#193D6F] transition-colors"
                aria-label="Next slide"
              >
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* Slider container with overflow hidden */}
          <div 
            className="overflow-hidden mt-16" 
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
                        alt={card.title}
                        className="justify-center mx-auto w-16 h-16 object-contain"
                      />
                      <h1 className="text-[#080F10] font-campton lg:text-xl text-lg font-semibold text-center mt-4">
                        {card.title}
                      </h1>
                      <p className="text-[#575959] text-center mt-3">
                        {card.description}
                      </p>
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
                    <div className="bg-white p-5 md:p-10 rounded-md h-full mx-2">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="justify-center mx-auto w-16 h-16 md:w-20 md:h-20 object-contain"
                      />
                      <h1 className="text-[#080F10] font-campton text-xl font-semibold text-center mt-4">
                        {card.title}
                      </h1>
                      <p className="text-[#575959] text-center mt-3">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile navigation buttons (only visible on small screens) */}
          <div className="flex md:hidden justify-center mt-6 gap-5">
            <button
              onClick={goToPrev}
              className="border-[#FFFFFF] border p-3 rounded-full hover:bg-[#E0F780] hover:border-[#E0F780] text-[#FFFFFF] hover:text-[#193D6F] transition-colors"
              aria-label="Previous slide"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={goToNext}
              className="border-[#FFFFFF] border p-3 rounded-full hover:bg-[#E0F780] hover:border-[#E0F780] text-[#FFFFFF] hover:text-[#193D6F] transition-colors"
              aria-label="Next slide"
            >
              <ArrowRight />
            </button>
          </div>

          {/* Desktop pagination dots */}
          <div className="hidden md:flex justify-center md:justify-start mt-6 gap-4">
            {serviceCards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  currentIndex % totalCards === index
                    ? "bg-[#E0F780]"
                    : "bg-white opacity-60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div><br />
      </div>
    </section>
  );
};

export default ServicesSlider;