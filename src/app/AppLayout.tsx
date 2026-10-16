import { Outlet } from "react-router";

export function AppLayout() {
  const DEBUG = false;
  const debugStyles = DEBUG ? "**:outline **:outline-blue-500" : "";

  return (
    <div className={`${debugStyles}`}>
      <Outlet />
    </div>
  );
}
