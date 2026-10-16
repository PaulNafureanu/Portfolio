export const runBrowserConfig = () => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
};
