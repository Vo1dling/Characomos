import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header.components";
import HomePage from "./pages/HomePage/HomePage.pages";
import FlashPage from "./pages/FlashCardsPage/FlashCardsPage.pages";
import CreateEditPage from "./pages/CreateEditPage/CreateEditPage.pages";
import CharacterPage from "./pages/CharacterPage/CharacterPage.pages";
import api from "./components/api/api";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentDifficulty, setDifficulty] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get();
      setData(data);
    };
    getData();
  }, []);
  const search = (e) => {
    if (e.target.value === "") setFilteredData([]);
    else
      setFilteredData(
        data.filter(
          (item) =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            item.origin.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
  };
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact>
        <HomePage data={data} search={search} filteredData={filteredData} />
      </Route>
      <Route path="/create">
        <CreateEditPage />
      </Route>

      <Route path="/flash">
        <FlashPage data={data} />
      </Route>
      {data.map((char) => {
        return (
          <Route path={`/${char.name}`}>
            <CharacterPage char={char} />
          </Route>
        );
      })}
    </BrowserRouter>
  );
};

export default App;
