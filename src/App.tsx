import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authorization from "./pages/sing-in/Authorization";
import { AppRoute } from "./utils/const";
import MainScreen from "./pages/main-screen/MainScreen";
import CreateDeal from "./pages/create-deal/CreateDeal";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path = {AppRoute.auth}
            element = {<Authorization/>}
          />
          <Route
            path = {AppRoute.main}
            element = {<MainScreen/>}
          />
          <Route
            path = {AppRoute.createDeal}
            element = {<CreateDeal/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}
