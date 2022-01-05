import React, { useRef } from "react";
import api from "../../components/api/api";
import CustomInput from "../../components/CustomInput/CustomInput.components";
import CustomButton from "../../components/CustomButton/CustomButton.components";
import "./CreateEditPage.styles.css";
const CreatePage = () => {
  const nameRef = useRef("");
  const imageRef = useRef("");
  const originRef = useRef("");
  const regionRef = useRef("");
  const authorRef = useRef("");
  const titleRef1 = useRef("");
  const contentRef1 = useRef("");
  const titleRef2 = useRef("");
  const contentRef2 = useRef("");
  const titleRef3 = useRef("");
  const contentRef3 = useRef("");
  const mediumQRef = useRef("");
  const mediumARef = useRef("");
  const hardQRef = useRef("");
  const hardARef = useRef("");

  const postItem = async (e) => {
    const name = nameRef.current.value;
    const imageURL = imageRef.current.value;
    const origin = originRef.current.value;
    const region = regionRef.current.value;
    const author = authorRef.current.value;
    const title1 = titleRef1.current.value;
    const content1 = contentRef1.current.value;
    const title2 = titleRef2.current.value;
    const content2 = contentRef2.current.value;
    const title3 = titleRef3.current.value;
    const content3 = contentRef3.current.value;
    const mediumQ = mediumQRef.current.value;
    const mediumA = mediumARef.current.value;
    const hardQ = hardQRef.current.value;
    const hardA = hardARef.current.value;

    const item = {
      name: `${name}`,
      imageURL: `${imageURL}`,
      origin: `${origin}`,
      region: `${region}`,
      author: `${author}`,
      paragraph1Title: `${title1}`,
      paragraph1Content: `${content1}`,
      paragraph2Title: `${title2}`,
      paragraph2Content: `${content2}`,
      paragraph3Title: `${title3}`,
      paragraph3Content: `${content3}`,
      normalQuestion: `${mediumQ}`,
      normalAnswer: `${mediumA}`,
      hardQuestion: `${hardQ}`,
      hardAnswer: `${hardA}`,
    };
    if (e.target.id) {
      await api.put(e.target.id, item);
    } else {
      await api.post("", item);
    }
  };
  return (
    <div className="create-page">
      <div className="grid">
        <div className="paragraph-container">
          <CustomInput
            type="text"
            inputRef={titleRef1}
            className="input title"
            placeHolder="Please Enter The Paragraph's Title"
          ></CustomInput>
          <CustomInput
            type="textarea"
            inputRef={contentRef1}
            className="input content"
            placeHolder="Please Enter The Paragraph's Content"
          ></CustomInput>
        </div>
        <div className="card-container">
          <img className="character-image" src="" alt="" />
          <CustomInput
            type="text"
            className="input origin"
            inputRef={imageRef}
            placeHolder="Please Enter The ImageURL"
          ></CustomInput>
          <CustomInput
            type="text"
            className="input origin"
            inputRef={nameRef}
            placeHolder="Please Enter The Character's Name"
          ></CustomInput>
          <CustomInput
            type="text"
            className="input origin"
            inputRef={originRef}
            placeHolder="Please Enter Where The Character Comes From"
          ></CustomInput>
          <CustomInput
            type="text"
            className="input region"
            inputRef={regionRef}
            placeHolder="Please Enter Where The Character Exists In It's World"
          ></CustomInput>
          <CustomInput
            type="text"
            className="input author"
            inputRef={authorRef}
            placeHolder="Please Enter The Page's Author Here"
          ></CustomInput>
        </div>
        <div className="paragraph-container">
          <CustomInput
            type="text"
            className="input title"
            inputRef={titleRef2}
            placeHolder="Please Enter The Paragraph's Title"
          ></CustomInput>
          <CustomInput
            type="textarea"
            className="input content"
            inputRef={contentRef2}
            placeHolder="Please Enter The Paragraph's Content"
          ></CustomInput>
        </div>
        <div className="flash-inputs">
          <CustomInput
            type="text"
            className="input question"
            inputRef={mediumQRef}
            placeHolder="Please Enter Flash Card Medium Difficulty Question"
          ></CustomInput>
          <CustomInput
            type="text"
            className="input answer"
            inputRef={mediumARef}
            placeHolder="Please Enter Flash Card Medium Difficulty Answer"
          ></CustomInput>
          <CustomInput
            type="text"
            className="input question"
            inputRef={hardQRef}
            placeHolder="Please Enter Flash Card Hard Difficulty Question"
          ></CustomInput>
          <CustomInput
            type="text"
            className="input answer"
            inputRef={hardARef}
            placeHolder="Please Enter Flash Card Hard Difficulty Answer"
          ></CustomInput>
        </div>
        <div className="paragraph-container">
          <CustomInput
            type="text"
            className="input title"
            inputRef={titleRef3}
            placeHolder="Please Enter The Paragraph's Title"
          ></CustomInput>
          <CustomInput
            type="textarea"
            className="input content"
            inputRef={contentRef3}
            placeHolder="Please Enter The Paragraph's Content"
          ></CustomInput>
        </div>
        <CustomButton onClick={postItem} className="submit">
          Submit
        </CustomButton>
      </div>
    </div>
  );
};
export default CreatePage;
