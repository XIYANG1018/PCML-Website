import { Link, Navigate } from 'react-router-dom';

function ScrollToTopLink({ to, ...props }) {
  const handleClick = () => {
    setTimeout(() => window.scrollTo(0, 0), 0);
  };

  return <Link to={to} onClick={handleClick} {...props} />;
}

export default ScrollToTopLink;