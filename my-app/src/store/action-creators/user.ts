import { UserActions, UserActionTypes } from "../../types/todo"
import axios from "axios"
import { Dispatch } from "redux"



export const fetchUsers = () => {
   return async (dispatch: Dispatch<UserActions>) => {
      try {
         dispatch({ type: UserActionTypes.FETCH_USERS })
         const response = await axios.get('https://jsonplaceholder.typicode.com/users')
         dispatch({
            type: UserActionTypes.FETCH_USERS_SUCCESS,
            payload: response.data
         })
      } catch (e) {
         dispatch({
            type: UserActionTypes.FETCH_USERS_ERROR,
            payload: 'There was an error loading'
         })
      }
   }
}