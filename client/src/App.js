import { Route, RouterProvider, Routes } from "react-router-dom";
import publicRoute from "./routes/publicRoute";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <>
      <RouterProvider router={publicRoute} />
    </>
  );
}

export default App;
