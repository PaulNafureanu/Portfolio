import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../features/home/Home";
import { WorkflowDashboard } from "../features/technical-support/WorkflowDashboard";
import { AppLayout } from "./AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/technical-support-workflow-examples"
            element={<WorkflowDashboard />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
