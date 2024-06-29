export interface RegisterMutation {
  email: string;
  password: string;
  full_name: string;
  phone: string;
}

export interface User {
  _id: string;
  email: string;
  token: string;
  role: string;
  position_name: string;
  full_name: string;
  phone: string;
}

export interface ValidationError {
  errors: {
    [key: string]: {
      name: string;
      message: string;
    };
  };
  message: string;
  name: string;
  _message: string;
}

export interface RegisterResponse {
  message: string;
  user: User;
}

export interface LoginMutation {
  email: string;
  password: string;
}

export interface GlobalError {
  error: string;
}

export interface ProductI {
  id: string;
  image: string;
  title: string;
  price: string;
  description: string;
  height: string;
  width: string;
  depth: string;
  quantity: string;
  category_name: string;
  user: {
    full_name: string;
    phone: string;
  };
}

export interface ProductMutation {
  image: string;
  title: string;
  price: string;
  description: string;
  height: string;
  width: string;
  depth: string;
  quantity: string;
  categoryId: string;
}

export interface CategoryI {
  id: string;
  name: string;
}

export interface CardsI {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  quantity: string;
}
