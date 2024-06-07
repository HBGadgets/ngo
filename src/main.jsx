import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "@/App";
import Home from "./views/Home";
import Detail from "./views/Detail";
import "@/assets/main.css";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import ScholarshipForm from "./components/ScholarshipForm";
import Form from "./components/Form";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.baseURL = "http://localhost:5000/api";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<Detail />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/scholarship" element={<ScholarshipForm />} />
        <Route path="/form" element={<Form/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
