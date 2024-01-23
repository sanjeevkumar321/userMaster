import { User, UserTypes } from "../../type";


export const NewUser = (user:User) => {
  return {
    type: UserTypes.ADD_USER,
    payload: {
      id: Date.now(),
      ...user,
    },
  };
};

