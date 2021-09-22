import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Events from "./Events";
import Users from "./Users";

import "./global.module.scss";

const App = () => (
  <main>
    <nav>
      <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </main>
);

const Home = () => {
  const [selectedUser, setSelectedUser] = React.useState();

  return (
    <>
      <Users {...{ selectedUser, setSelectedUser }} />
      <Events {...{ selectedUser }} />
    </>
  );
};

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

export default App;
