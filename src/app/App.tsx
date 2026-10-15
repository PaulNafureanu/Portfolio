import { BrowserRouter, Route, Routes } from "react-router";
import { AppLayout } from "./AppLayout";
import { HomePage } from "../pages/home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
