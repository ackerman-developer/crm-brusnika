import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authorization from "./pages/sing-in/Authorization";
import { AppRoute } from "./utils/const";
import MainScreen from "./pages/main-screen/MainScreen";
import CreateDeal from "./pages/create-deal/CreateDeal";
import Layout from "./components/layout/Layout";
import ArchiveLand from "./pages/archive-land/ArchiveLand";
import LkManager from "./pages/lk-manager/LkManager";
import AboutLand from "./pages/about-land/AboutLand";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path = {AppRoute.auth}
            element = {<Authorization/>}
          />
          <Route path={AppRoute.main} element={<Layout/>}
          >
            <Route
              path = {AppRoute.main}
              element = {<MainScreen/>}
            />
            <Route
              path = {AppRoute.createDeal}
              element = {<CreateDeal/>}
            />
            <Route
              path= {AppRoute.archiveLand}
              element = {<ArchiveLand/>}
            />
            <Route
              path= {AppRoute.lkManager}
              element = {<LkManager/>}
            />
            <Route
              path= {AppRoute.land}
              element = {<AboutLand/>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
