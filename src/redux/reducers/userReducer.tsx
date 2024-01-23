import { UserListActionTypes, UserTypes, UsersState } from "../../type";
const initialState: UsersState = {
  data: [],
};

const userReducer = (
  state = initialState,
  action: UserListActionTypes
): UsersState => {
  switch (action.type) {
    case UserTypes.ADD_USER:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};
export default userReducer;
