import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import StatusPage from "./pages/StatusPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* ✅ Home Page with Header and Footer */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomePage />
                <Footer />
              </>
            }
          />

          {/* ✅ Register Page */}
          <Route path="/register" element={<RegisterPage />} />

          {/* ✅ Status Page */}
          <Route path="/check-status" element={<StatusPage />} />

          {/* ✅ Admin Login Page without Header/Footer */}
          {/* <Route path="/admin" element={<AdminLogin />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
