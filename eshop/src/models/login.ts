


export interface IloginForm {
    email: string;
    password: string;  
  }

  export interface ILoginFormValues extends Partial<IloginForm> {}

  export class  LoginFormValues implements ILoginFormValues {
    email:string =  "";    
    password: string = "";
    constructor(init?: ISignupFormValues) {     
      Object.assign(this, init);
    }
  }

  export interface ISignup {
    email: string;
    displayName: string;
    password: string;
    confirmPassword:string;
  }

  export interface ISignupFormValues extends Partial<ISignup> {}

  export class SignupFormValues implements ISignupFormValues {
    email:string =  "";
    displayName: string = "";
    password: string = "";
    confirmPassword:string = "";

    constructor(init?: ISignupFormValues) {     
      Object.assign(this, init);
    }
  }