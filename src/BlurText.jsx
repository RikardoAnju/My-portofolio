
import { useEffect, useState } from "react";

const BlurText = ({
  text,
  delay = 100,
  animateBy = "letters",
  direction = "top",
  onAnimationComplete,
  className,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
      if (onAnimationComplete) onAnimationComplete();
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, onAnimationComplete]);

  const animationClass = visible
    ? "opacity-100 translate-y-0 transition duration-700 ease-out"
    : `opacity-0 ${direction === "top" ? "translate-y-4" : "translate-y-0"}`;

  return (
    <div className={`${animationClass} ${className}`}>
      {text}
    </div>
  );
};

export default BlurText;
