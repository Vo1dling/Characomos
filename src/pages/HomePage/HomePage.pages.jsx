import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../../components/CustomInput/CustomInput.components";
import "./HomePage.styles.css";
const HomePage = ({ data, filteredData, search }) => {
  return (
    <div className="home-page">
      <CustomInput onChange={search}></CustomInput>
      Home Page{" "}
      {filteredData.map((item) => {
        return (
          <Link
            to={item.name}
            key={item.id}
          >{`${item.name} (${item.origin})`}</Link>
        );
      })}
    </div>
  );
};
export default HomePage;
