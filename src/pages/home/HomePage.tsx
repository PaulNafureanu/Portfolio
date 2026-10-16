import { useRef, useState } from "react";
import { PageLayout } from "../../components/PageLayout";
import type { NavAnchor } from "../../components/PageNav";
import { Profile } from "./sections/profile/Profile";
import { Work } from "./sections/work/Work";
import TechStack from "./sections/techstack/TechStack";

const anchors: NavAnchor[] = [
  { url: "/#home", label: "Home" },
  // { url: "/#profile", label: "Profile" },
  { url: "/#work", label: "Work" },
  { url: "/#comment", label: "Comment" },
  { url: "/#fandq", label: "F&Q" },
  { url: "/#contact", label: "Contact" },
];

export function HomePage() {
  const [showWork, setShowWork] = useState(false);
  const workRef = useRef<HTMLDivElement>(null);

  const handleTypingComplete = () => {
    setShowWork(true);
  };

  const handleWorkAnimationComplete = () => {
    workRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <PageLayout id="home" pageAnchors={anchors}>
      <div id="profile" className="mt-3 p-3">
        <Profile onComplete={handleTypingComplete} />
      </div>

      <div id="work" ref={workRef} className="p-3 scroll-mt-28 sm:scroll-mt-16">
        <Work showFlow={showWork} onEntranceComplete={handleWorkAnimationComplete} />
      </div>
      <div className="w-full h-dvh flex items-center justify-center">
        <TechStack />
      </div>
    </PageLayout>
  );
}
