import { Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Home from "./pages/Home.tsx";
import RecipeDetails from "./pages/RecipeDetails.tsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main__container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
