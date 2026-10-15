import { PageLayout } from "../../components/PageLayout";
import type { NavAnchor } from "../../components/PageNav";
import { Profile } from "./sections/profile/Profile";
import TechStack from "./sections/techstack/TechStack";

const anchors: NavAnchor[] = [
  { url: "/#profile", label: "Profile" },
  { url: "/#work", label: "Work" },
  // { url: "/#comment", label: "Comment" },
  // { url: "/#fandq", label: "F&Q" },
  { url: "/#contact", label: "Contact" },
];

export function HomePage() {
  const DEBUG = false;
  const debugStyles = DEBUG ? "**:outline-2 **:outline-blue-500" : "";

  return (
    <PageLayout pageAnchors={anchors}>
      <div id="profile" className={`${debugStyles} mt-10 flex h-screen`}>
        <div className="flex-1">
          <Profile />
        </div>
        <div className="flex-2">
          <TechStack />
        </div>
      </div>
    </PageLayout>
  );
}
