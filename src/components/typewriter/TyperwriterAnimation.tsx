import { useEffect, useEffectEvent, useState } from "react";

export type TypewriterProps = {
  text: string;
  speed?: number;
  startDelay?: number;
  endDelay?: number;
  onComplete?: () => void;
};

export function TypewriterAnimation({
  text,
  speed = 45,
  startDelay = 500,
  endDelay = 500,
  onComplete,
}: TypewriterProps) {
  const [characterCount, setCharacterCount] = useState(0);
  const handleComplete = useEffectEvent(() => onComplete?.());

  useEffect(() => {
    let timer: number;
    let index = 0;

    const typeNext = () => {
      index++;
      setCharacterCount(index);

      if (index >= text.length) {
        timer = window.setTimeout(handleComplete, endDelay);
      } else {
        timer = window.setTimeout(typeNext, speed);
      }
    };

    if (text.length === 0) {
      timer = window.setTimeout(handleComplete, startDelay + endDelay);
    } else {
      timer = window.setTimeout(typeNext, startDelay);
    }

    return () => window.clearTimeout(timer);
  }, [text, speed, startDelay, endDelay]);

  return (
    <span>
      <span className="sr-only">{text}</span>

      <span aria-hidden="true">
        {text.slice(0, characterCount)}

        <span className="terminal-cursor ml-[0.15ch] inline-block h-[1em] w-[0.65ch] bg-slate-950 align-[-0.15em]" />
      </span>
    </span>
  );
}
