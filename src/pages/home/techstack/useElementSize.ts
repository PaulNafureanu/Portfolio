// import { useEffect, useRef, useState } from "react";

// export const useElementSize = <T extends HTMLElement>() => {
//   const ref = useRef<T>(null);
//   const [size, setSize] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     if (!ref.current) return;

//     const observer = new ResizeObserver(([entry]) => {
//       setSize({
//         width: entry.contentRect.width,
//         height: entry.contentRect.height,
//       });
//     });

//     observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, []);

//   return { ref, ...size };
// };

import { useEffect, useRef, useState } from "react";

type ElementSize = {
  width: number;
  height: number;
};

export const useElementSize = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [size, setSize] = useState<ElementSize | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;

      if (width > 0 && height > 0) {
        setSize({ width, height });
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return {
    ref,
    width: size?.width,
    height: size?.height,
    isMeasured: size !== null,
  };
};
