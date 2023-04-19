import { RouterProvider } from "react-router-dom";
import "./App.css";
import User from "./features/user/User";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
