import React from "react";
import { FieldRenderProps } from "react-final-form";
import "./textinput.styles.scss";

// interface IProps extends FieldRenderProps<string, HTMLInputElement> {
// }

export const TextInput2 = (props) => {
  return (
    <div className="group">
      <input className="form-input" {...props.input} {...props.rest} />
      {props.label ? (
        <label
          className={`${
            props.input.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {props.label}
        </label>
      ) : null}
    </div>
  );
};
