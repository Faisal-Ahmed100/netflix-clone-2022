import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Account from "./account/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import Error from "./components/Error";
import SaveMovies from "./account/SaveMovies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/save-movies" element={<SaveMovies />}/>
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
