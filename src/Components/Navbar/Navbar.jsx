import { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : 20;
      scrollToItem(newIndex);
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex < 20 ? prevIndex + 1 : 0;
      scrollToItem(newIndex);
      return newIndex;
    });
  };

  const handleItemClick = (index) => {
    setCurrentIndex(index);
    scrollToItem(index);
  };

  const scrollToItem = (index) => {
    const container = containerRef.current;
    if (container) {
      const itemWidth = container.scrollWidth / 21;
      container.scrollTo({
        left: itemWidth * index,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='max-w-7xl mx-auto'>
     <div>
     <div className="relative flex items-center overflow-hidden">
        <button
          className="absolute left-0 z-10 p-2 bg-gray-200 rounded-full"
          onClick={handlePrev}
        >
          <FaChevronLeft />
        </button>
        <div
          className="flex overflow-x-auto scrollbar-hide space-x-4"
          ref={containerRef}
        >
          <Link
            to="/environment"
            onClick={() => handleItemClick(0)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 0 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Environment
          </Link>
          <Link
            to="/"
            onClick={() => handleItemClick(1)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 1 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Fabric & Textile Raw Material
          </Link>
          <Link
            to="/"
            onClick={() => handleItemClick(2)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 2 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Fabrication Services
          </Link>
          <Link
            to="/"
            onClick={() => handleItemClick(3)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 3 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Food & Beverage
          </Link>
          <Link
            to="/"
            onClick={() => handleItemClick(4)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 4 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Industrial Machinery
          </Link>
          <Link
            to="/"
            onClick={() => handleItemClick(5)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 5 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Lights & Lighting
          </Link>
          <Link
            to="/environment"
            onClick={() => handleItemClick(6)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 6 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Environment
          </Link>
          <Link
            to="/"
            onClick={() => handleItemClick(7)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 7 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Fabric & Textile Raw Material
          </Link>
          <Link
            to="/"
            onClick={() => handleItemClick(8)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 8 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Fabrication Services
          </Link>
          <Link
            to="/"
            onClick={() => handleItemClick(9)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 9 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Food & Beverage
          </Link>
          <Link
            to="/"
            onClick={() => handleItemClick(10)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 10 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Industrial Machinery
          </Link>
          <Link
            to="/environment"
            onClick={() => handleItemClick(11)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 11 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Environment
          </Link>
          <Link
            to="/fabric-textile-raw-material"
            onClick={() => handleItemClick(12)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 12 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Fabric & Textile Raw Material
          </Link>
          <Link
            to="/"
            onClick={() => handleItemClick(13)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 13 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Fabrication Services
          </Link>
          <Link
            to="/"
            onClick={() => handleItemClick(14)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 14 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Food & Beverage
          </Link>
          <Link
            to="/"
            onClick={() => handleItemClick(15)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 15 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Industrial Machinery
          </Link>
          <Link
            to="/"
            onClick={() => handleItemClick(16)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 16 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Environment
          </Link>
          <Link
            to="/"
            onClick={() => handleItemClick(17)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 17 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Fabric & Textile Raw Material
          </Link>
          <Link
            to="/"
            onClick={() => handleItemClick(18)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 18 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Fabrication Services
          </Link>
          <Link
            to="/"
            onClick={() => handleItemClick(19)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 19 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Food & Beverage
          </Link>
          <Link
            to="/"
            onClick={() => handleItemClick(20)}
            className={`flex-shrink-0 p-4 transition-transform duration-300 ${
              currentIndex === 20 ? "scale-100 border-b-2 border-black" : "scale-75"
            } `}
          >
            Industrial Machinery
          </Link>
        </div>
        <button
          className="absolute right-0 z-10 p-2 bg-gray-200 rounded-full"
          onClick={handleNext}
        >
          <FaChevronRight />
        </button>
      </div>
     </div>
    </div>
  );
};

export default Navbar;
