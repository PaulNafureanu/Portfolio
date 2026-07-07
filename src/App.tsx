import { BrowserRouter, Route, Routes } from "react-router";
import { AppLayout } from "./components/AppLayout";
import { Home } from "./pages/Home";
import { TechnicalSupportWorkflowExamples } from "./pages/TechnicalSupportWorkflowExamples";

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
