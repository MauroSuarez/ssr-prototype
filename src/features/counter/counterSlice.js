import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { initialState, counterReducer } from './reducer'

// First, create the thunk
const fetchUserById = createAsyncThunk('users/fetchByIdStatus', async (UserId, thunkAPI) => {
  //const response = await getUserDetails1(1).then(res => res);
  console.log("desde tunk");
  setTimeout(() => {
    
  }, 1000)
  return true;//response;
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: counterReducer,
  extraReducers: {
    [fetchUserById.pending]: (state, action) => {
      // Add user to the state array
      console.log(state, action, 'pending')
    },
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchUserById.fulfilled]: (state, action) => {
      // Add user to the state array
      console.log(state, action)
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const countSelector = (state) => state.counter

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  dispatch(fetchUserById(12))
  /*setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)*/
}

/*
// Method use async dispatch
export const login2 = ({ username, password }) => async dispatch => {
  try {
    dispatch(loginRequest())
    dropConsole({ type: 'warn', message: 'login RQ >> ', data: { username, password } })
    let result = await getUserDetails1(1).then(res => res);
    dropConsole({ type: 'warn', message: 'login RES >> ', data: result })
    dispatch(loginSuccess({ username, password, isLoading: false }));
  } catch (e) {
    dropConsole({ type: 'error', message: 'login >> ' + e.message, data: { username, password } })
    return console.error(e.message);
  }
}
*/

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value

export default counterSlice.reducer