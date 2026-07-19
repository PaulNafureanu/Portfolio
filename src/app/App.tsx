import { BrowserRouter, Route, Routes } from "react-router";
import EcommerceApp from "../features/e-commerce/EcommerceApp";
import { Home } from "../features/home/Home";
import { WorkflowDashboard } from "../features/technical-support/WorkflowDashboard";
import { AppLayout } from "./AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="support-cases" element={<WorkflowDashboard />} />
        </Route>

        <Route path="ecommerce/*" element={<EcommerceApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
