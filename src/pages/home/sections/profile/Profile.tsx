import { Typewriter } from "../../../../components/Typewriter";
import { SWEProfile } from "./Content";

interface Props {
  onComplete: () => void;
}

export function Profile({ onComplete }: Props) {
  const profile = SWEProfile;
  const intro = "[Paul::Entry_Level]: ";

  return (
    <p className="text-lg leading-relaxed p-3 pl-0 ">
      <span className="text-blue-600 font-semibold text-base">{intro}</span>
      <Typewriter text={profile.roleLine} speed={45} startDelay={1000} endDelay={1300} onComplete={onComplete} />
    </p>
  );
}
