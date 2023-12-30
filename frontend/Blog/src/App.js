import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Frontend/Home";
import Blog from "./Pages/Frontend/Blog";
import Category from "./Pages/Frontend/Category";
import AboutPage from "./Pages/Frontend/AboutPage";
import ContactPage from "./Pages/Frontend/ContactPage";
import AdminHome from "./Pages/Backend/AdminHome";
import Login from "./components/Backend/Login";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import NotloggedInRoutes from "./routes/NotloggedInRoutes";
import Profile from "./components/Backend/Profile";
import Template from "./components/Backend/Template";
import MainArea from "./components/Backend/MainArea";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/blog" element={<Blog />} exact />
        <Route path="/category/fashion" element={<Category />} exact />
        <Route path="/about-me/" element={<AboutPage />} exact />
        <Route path="/contact/" element={<ContactPage />} exact />

        {/* Backend Route*/}

        <Route element={<NotloggedInRoutes />}>
          <Route path="/login" element={<Login />} exact />
        </Route>

        <Route element={<LoggedInRoutes />}>
          <Route path="/" element={<Template />}>
            <Route path="/admin/dashboard" element={<MainArea />} exact />
            <Route path="/admin/profile" element={<Profile />} exact />
          </Route>
        </Route>

      </Routes>
    </>
  );
}
