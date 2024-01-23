

/**
 * Data types
 */
export interface User {
  name: string;
  age: string;
  sex: string;
  mobile: string;
  govIdType: string;
  govIdNo: string;
  address: String;
  state: string;
  city: string;
  country: string;
  pincode: string;
}


/**
 * Action types
 */
export enum UserTypes {
  ADD_USER = 'ADD_USER',
}

/**
 * State types
 */
export interface UsersState {
  readonly data: User[];
}


export interface UserListActionTypes {
  type: string,
  payload: User,
  data: User[]
}