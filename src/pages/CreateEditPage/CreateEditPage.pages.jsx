import React from "react";
import CustomInput from "../../components/CustomInput/CustomInput.components";
import "./CreateEditPage.styles.css";
const CreatePage = () => {
  return (
    <div className="create-page">
      <div className="grid">
        <div className="paragraph-container">
          <CustomInput
            type="text"
            className="input title"
            placeHolder="Please Enter The Paragraph's Title"
          ></CustomInput>
          <CustomInput
            type="textarea"
            className="input content"
            placeHolder="Please Enter The Paragraph's Content"
          ></CustomInput>
        </div>
        <div className="card-container">
          <img className="character-image" src="" alt="" />
          <CustomInput
            type="text"
            className="input origin"
            placeHolder="Please Enter The ImageURL"
          ></CustomInput>
          <CustomInput
            type="text"
            className="input origin"
            placeHolder="Please Enter Where The Character Comes From"
          ></CustomInput>
          <CustomInput
            type="text"
            className="input region"
            placeHolder="Please Enter Where The Character Exists In It's World"
          ></CustomInput>
          <CustomInput
            type="text"
            className="input author"
            placeHolder="Please Enter The Page's Author Here"
          ></CustomInput>
        </div>
        <div className="paragraph-container">
          <CustomInput
            type="text"
            className="input title"
            placeHolder="Please Enter The Paragraph's Title"
          ></CustomInput>
          <CustomInput
            type="textarea"
            className="input content"
            placeHolder="Please Enter The Paragraph's Content"
          ></CustomInput>
        </div>
        <div className="flash-inputs">
          <CustomInput
            type="text"
            className="input question"
            placeHolder="Please Enter Flash Card Medium Difficulty Question"
          ></CustomInput>
          <CustomInput
            type="text"
            className="input answer"
            placeHolder="Please Enter Flash Card Medium Difficulty Answer"
          ></CustomInput>
          <CustomInput
            type="text"
            className="input question"
            placeHolder="Please Enter Flash Card Hard Difficulty Question"
          ></CustomInput>
          <CustomInput
            type="text"
            className="input answer"
            placeHolder="Please Enter Flash Card Hard Difficulty Answer"
          ></CustomInput>
        </div>
        <div className="paragraph-container">
          <CustomInput
            type="text"
            className="input title"
            placeHolder="Please Enter The Paragraph's Title"
          ></CustomInput>
          <CustomInput
            type="textarea"
            className="input content"
            placeHolder="Please Enter The Paragraph's Content"
          ></CustomInput>
        </div>
      </div>
    </div>
  );
};
export default CreatePage;
