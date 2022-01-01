import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header.components";
import HomePage from "./pages/HomePage/HomePage.pages";
import FlashPage from "./pages/FlashCardsPage/FlashCardsPage.pages";
import CreateEditPage from "./pages/CreateEditPage/CreateEditPage.pages";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/create">
        <CreateEditPage />
      </Route>

      <Route path="/flash">
        <FlashPage />
      </Route>
    </BrowserRouter>
  );
};

export default App;
