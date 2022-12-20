interface IFormState {
  inputs: {
    title?: {
      value: string;
      isValid: boolean;
    };
    description?: {
      value: string;
      isValid: boolean;
    };
    address?: {
      value: string;
      isValid: boolean;
    };
    email?: {
      value: string;
      isValid: boolean;
    };
    password?: {
      value: string;
      isValid: boolean;
    };
    name?: {
      value: string;
      isValid: boolean;
    };
  };
  isValid: boolean;
}

export default IFormState;
