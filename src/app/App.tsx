import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../pages/home/Home";
import { AppLayout } from "./AppLayout";
import { Portfolio } from "../pages/portfolio/Portfolio";
import { Contact } from "../pages/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
