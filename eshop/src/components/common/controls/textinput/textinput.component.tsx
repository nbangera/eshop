import React from "react";
import { FieldRenderProps } from "react-final-form";
import './textinput.styles.scss'


// interface MyFormFieldProps {  
//   label:string;
// }
// interface IProps extends FieldRenderProps<string, HTMLInputElement>,MyFormFieldProps {
// }

// interface MyFormFieldProps {  
//   label:string;
// }
interface IProps extends FieldRenderProps<string, any> {}



export const TextInput: React.FC<IProps> = ({input,meta,...rest}:IProps) => {
  let label = 'some'
  return (
    <div className="form-group">
      <input {...input} {...rest} />
      {label ? (
        <label
          className={`${input.value.length ? "shrink" : ""} form-input-label`}
        >{label}
        </label>
      ) : null}
    </div>
  );
};
