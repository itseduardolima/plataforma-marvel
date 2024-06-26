import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Characters } from "../pages/Characters";
import { Movies } from "../pages/Movies";
import { Comics } from "../pages/Comics";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/personagens" element={<Characters />} />
      <Route path="/filmes" element={<Movies />} />
      <Route path="/hqs" element={<Comics />} />
    </Routes>
  );
};
