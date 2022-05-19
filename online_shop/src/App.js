//TODO: Replace given pictures by own pictures (pc hardware online shop)
//index to tell React that it should display together with the parent route

import { Routes, Route } from "react-router-dom";

import Home from "./components/routes/home.comp";
import Navi from "./components/routes/navigation/navi.comp";
import SignIn from "./components/routes/sign-in/sign-in.comp";
import "./index.scss";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navi />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
