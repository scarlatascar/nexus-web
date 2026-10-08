import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import { GlobalProvider } from './context/GlobalContext';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './views/HomePage';
import AboutUs from './views/AboutUs';
import BookDetails from './views/BookDetails';
import BookReservation from './views/BookReservation';
import Login from './views/Login';
import { useBooks } from './hooks/useBooks';

// Página de administración protegida
const AdminPage = () => {
  const { darkMode } = useBooks();

  return (
      <PrivateRoute>
        <div className={`page-container ${darkMode ? 'dark' : ''}`}>
          <div className="movie-details">
            <h1>Panel de Administración</h1>
            <p>Contenido solo para administradores</p>

            <div className="movie-info-grid">
              <div className="info-item">
                <strong>Usuarios registrados</strong><br/>
                4 usuarios
              </div>
              <div className="info-item">
                <strong>Libros</strong><br/>
                8 títulos
              </div>
              <div className="info-item">
                <strong>Espacios</strong><br/>
                3 zonas
              </div>
              <div className="info-item">
                <strong>Reservas hoy</strong><br/>
                156 reservas
              </div>
            </div>
          </div>
        </div>
      </PrivateRoute>
  );
};

function AppContent() {
  const { darkMode } = useBooks();

  return (
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route
              path="/book/:id/reserve"
              element={
                <PrivateRoute>
                  <BookReservation />
                </PrivateRoute>
              }
          />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>

        <Footer />
      </div>
  );
}

function App() {
  return (
      <AuthProvider>
        <GlobalProvider>
          <Router>
            <AppContent />
          </Router>
        </GlobalProvider>
      </AuthProvider>
  );
}

export default App;