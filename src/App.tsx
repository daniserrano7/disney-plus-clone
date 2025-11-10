import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./root";
import Home from "./routes/_index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
