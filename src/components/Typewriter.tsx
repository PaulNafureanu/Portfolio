import { TypewriterAnimation, type TypewriterProps } from "./typewriter/TyperwriterAnimation";

export function Typewriter({ text, speed = 45, startDelay = 500, endDelay = 500, onComplete }: TypewriterProps) {
  return (
    <TypewriterAnimation
      key={`${text}-${speed}-${startDelay}-${endDelay}`}
      text={text}
      speed={speed}
      startDelay={startDelay}
      endDelay={endDelay}
      onComplete={onComplete}
    />
  );
}
