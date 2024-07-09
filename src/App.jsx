import {
  HashRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Layout from "./pages/en/Layout";
import Races from "./pages/en/Races";
import TopUsers from "./pages/en/TopUsers";
import Profile from "./pages/en/Profile";
import Tap from "./pages/en/Tap";
import Faq from "./pages/en/Faq";
import Income from "./pages/en/Income";
import Purchase from "./pages/en/Purchase";
import Loading from "./pages/en/Loading";
import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";

function App() {
  const FallbackNavigate = ({ to }) => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate(to);
    }, [to, navigate]);
    return null;
  };

  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Loading />} />
        <Route path="/en" element={<Layout />}>
          <Route index element={<FallbackNavigate to="races" />} />
          <Route path="races" element={<Races />} />
          <Route path="top-users" element={<TopUsers />} />
          <Route path="profile">
            <Route index element={<Profile />} />
            <Route path="purchase" element={<Purchase />} />
            <Route path="income" element={<Income />} />
          </Route>

          <Route path="tap" element={<Tap />} />
          <Route path="faq" element={<Faq />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
