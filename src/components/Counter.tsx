import { useState, useEffect, useRef } from "kaioken";

export function Counter() {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);
  const countRef = useRef(null);

  function reset_animation() {
    var el = document.getElementById('counter')!;
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null!;
  }

  useEffect(() => {
    if (countRef.current) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className="flex justify-center items-center">
      <img
        src="/favicon.svg"
        className="w-32 h-32 animate-pulse cursor-pointer"
        alt="kaioken logo"
        onclick={() => {
          setCount(count + 1);
          setAnimate(true);
          reset_animation();
        }}
      />
      <p
        id="counter"
        ref={countRef}
        className={`${animate ? 'animate-punch-in' : ''}`}
      >
        {count}
      </p>
    </div>
  );
}
