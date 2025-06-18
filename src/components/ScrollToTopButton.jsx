import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-10 right-10 text-white px-4 py-4 rounded-full shadow-lg z-50"
      style={{
        background: 'radial-gradient(105% 100% at 50% 0%, #040521 30%, #2053CA 70%, #307DE3 75%, #F5F8FF 100%)',
      }}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
