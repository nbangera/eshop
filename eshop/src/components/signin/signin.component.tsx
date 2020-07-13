import React, { useState } from "react";
import { IloginForm,LoginFormValues } from "../../models/login";
import { Form, Field } from "react-final-form";
import { TextInput2 } from "../common/controls/textinput/textinput2.component";
import { CustomButton } from "../common/controls/button/button.component";
import {signinWithGoogle} from '../../firebase/firebase.config'
import {auth,createUserProfileDocument} from '../../firebase/firebase.config'
import './signin.styles.scss'
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";

export const Signin: React.FC = () => {
  const [signinValues, setFormValues] = useState(new LoginFormValues());
  const dispatch = useDispatch();

  const handleSubmitForm = async (values: IloginForm) => {
    if(values){
        console.log(values);
        const {email,password} = values;
        try {
          var user = await auth.signInWithEmailAndPassword(email!,password!).then(()=>{
            //dispatch(setCurrentUser(user))
          }).catch((err)=>console.log(err));
          
          const reset = new LoginFormValues();
          setFormValues(reset);
        } catch (error) {
            setFormValues({email:'',password:''});
            console.log(error);
        }        
    }
  };

  return (
    <div className="signin">
      <h1>Already have an account</h1>
      <span>Singin with your email and password</span>
      <Form
        onSubmit={handleSubmitForm}
        initialValues={signinValues}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              
                {/* <Field name="email" type='input' component='input' placeholder="email" />
                <label
          className={`${input.value.length ? "shrink" : ""} form-input-label`}>Email</label> */}
        
              <Field name="email" type='input' label='Email' component={TextInput2} placeholder="email" />
              <Field name="password" type="password" label="Password" component={TextInput2} placeholder="password" />              
              <div className="buttons">
              <CustomButton type="submit" isGoogleSignIn={false} inverted={false}>Signin</CustomButton>
              <CustomButton onClick={signinWithGoogle} isGoogleSignIn={true} inverted={false} type="button">Signin with Google</CustomButton>
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
};
