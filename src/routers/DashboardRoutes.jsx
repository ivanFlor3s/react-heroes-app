import { Routes, Route } from "react-router-dom";
import { NavbarScreen } from "../components/ui/NavbarScreen/NavbarScreen";


import { MarvelScreen } from "../components/marvel/MarvelScreen/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen/SearchScreen";
import { DcScreen } from "../components/dc/DcScreen/DcScreen";
import { HeroScreen } from "../components/Hero/Hero";

export const DashboardRoutes = () => {
  return (
    <>
        <NavbarScreen></NavbarScreen>
        <Routes>
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DcScreen />} />
        <Route path="hero" element={<HeroScreen />} />
        <Route path="search" element={<SearchScreen />} />

        <Route path="/" element={<MarvelScreen />} />
      </Routes>
    </>
  )
}
