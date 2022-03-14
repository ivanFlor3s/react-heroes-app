import { Routes, Route } from "react-router-dom";
import { DcScreen } from "../components/dc/DcScreen/DcScreen";
import { LoginScreen } from "../components/login/LoginScreen/LoginScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen/SearchScreen";
import { BrowserRouter } from "react-router-dom";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <h1>Welcome to react router!</h1>
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
