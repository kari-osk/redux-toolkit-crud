import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1', name: 'John Doe'
  },
  {
    id: '2',
    name: 'Anna Mari'
  },
  {
    id: '3',
    name: 'Bella Smith'
  }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer