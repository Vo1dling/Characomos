import React from "react";
import "./CustomInput.styles.css";
class CustomInput extends React.Component {
  render() {
    const { type, onChange, placeHolder, inputRef, name, className } =
      this.props;
    if (type === "textarea")
      return (
        <textarea
          name={name}
          id={name}
          cols="40"
          rows="20"
          placeholder={placeHolder}
          className={className}
          style={{ resize: "none" }}
          ref={inputRef}
        />
      );
    else
      return (
        <input
          type={type}
          onInput={onChange}
          placeholder={placeHolder}
          ref={inputRef}
          className={className}
        />
      );
  }
}
export default CustomInput;
