import { BrowserRouter, Routes, Route} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { ProtectedRoute } from './components/ProtectedRoute';
import { auth } from './firebase';

import Home from './pages/Home';
import Private from './pages/Private';
import './App.css';

import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const lol = onAuthStateChanged(auth, (user) => {
      if(user) {
        setUser(user);
        setIsFetching(false);
        return
      }

      setUser(null)
      setIsFetching(false);
    });
    return () => lol();
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/private" element={<ProtectedRoute user={user}><Private></Private></ProtectedRoute>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
