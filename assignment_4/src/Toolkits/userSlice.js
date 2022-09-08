import { createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native';

const initialState = {
    users: {
        email: null,
        password: null,
        username: null
    }
}

export const userSlice = createSlice(
    {
        name: 'User',
        initialState, //ya da initialState:initialState
        reducers: {
            setUser: (state, action) => {
                state.user = [
                    state.users.email = action.email,
                    state.users.password = action.password,
                    state.users.username = action.username
                ]
            },
        }
    }
);

export const { setUser } = userSlice.actions;

export default userSlice.reducer;