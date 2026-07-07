import { BrowserRouter, Route, Routes } from "react-router";
import { AppLayout } from "./AppLayout";
import { Home } from "../features/home/Home";
import { TechnicalSupportWorkflowExamples } from "../features/technical-support/TechnicalSupportWorkflowExamples";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/technical-support-workflow-examples"
            element={<TechnicalSupportWorkflowExamples />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
