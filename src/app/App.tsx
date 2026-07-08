import { BrowserRouter, Route, Routes } from "react-router";
import { AppLayout } from "./AppLayout";
import { Home } from "../features/home/Home";
import { WorkflowDashboard } from "../features/technical-support/WorkflowDashboard";

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
