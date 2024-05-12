import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Characters } from "../pages/Characters";
import { Movies } from "../pages/Movies";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/personagens" element={<Characters />} />
      <Route path="/filmes" element={<Movies />} />
    </Routes>
  );
};
