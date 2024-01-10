import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute } from "./utils/const";
import { HelmetProvider } from "react-helmet-async";
import {
  AboutLand,
  ArchiveLand,
  Authorization,
  CreateEntity,
  CreateLand,
  EditLand,
  LkManager,
  MainScreen,
  TasksPage
} from "./pages";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <HelmetProvider>
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
              element = {<CreateLand/>}
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
              path= {AppRoute.tasks}
              element = {<TasksPage/>}
            />
            <Route
              path={`${AppRoute.land}/:id`}
              element={<AboutLand/>}
            />
            <Route
              path={`${AppRoute.createEntity}/:id`}
              element={<CreateEntity/>}
            />
            <Route
              path={`${AppRoute.editLand}/:id`}
              element={<EditLand/>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
