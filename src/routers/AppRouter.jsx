import { Routes, Route } from "react-router-dom";
import { DcScreen } from "../components/dc/DcScreen/DcScreen";
import { LoginScreen } from "../components/login/LoginScreen/LoginScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen/SearchScreen";
import { BrowserRouter } from "react-router-dom";
import { NavbarScreen } from "../components/ui/NavbarScreen/NavbarScreen";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavbarScreen></NavbarScreen>
      <Routes>
        <Route path="/" element={<MarvelScreen />} />
        <Route path="/marvel" element={<MarvelScreen />} />
        <Route path="/dc" element={<DcScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
