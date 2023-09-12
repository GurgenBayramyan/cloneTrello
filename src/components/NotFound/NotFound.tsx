import  { useState } from 'react';
import style from './NotFound.module.scss'

const NotFound = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
<div
  className={`${style.notFound} ${isAnimating ? `${style.animated} ${style.spin}` : ''}`}
  onClick={startAnimation}
>
  <h5 className={style.title}>This board is not found</h5>
</div>


  );
};

export default NotFound;
