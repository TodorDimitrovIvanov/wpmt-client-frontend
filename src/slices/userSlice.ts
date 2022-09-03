import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ENDPOINTS } from "../constants/endpoints";


export const userLogin = createAsyncThunk('/user/login', async () => {

    const body = {
        email: "dimitar@wpmt.tech",
        client_key: "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1UkFAXCQVaHMh0HQgjNs\nEtLflT3I4qLkU6zJt5B8ggkKLA1k/X9BtNquWjGJkS8i4lnlMORqvfPkpYc1X88P\nQPAh5l1hbsZKpm8dRpI97DPGnSKKiDYkAQO20zWY85uDi4I745hzxbZ50OdNDlQ+\nYsEXBbBM/yMlDuhOfrwvfI3p8qShKqdj1xiK8O2Jpr40pZCpSvpgr9gNxF6JRnx4\n+5EKmb0lKO0vjBMO33Ji8QW5e9N+ebN45U/+AkaStFAIOHbcNfbUIYiW8dnTS5V9\no0IVbkNiEIIrjFGJuFqWR32M00GcwjDm8qCtPAqq8V54MH41QK0w8+mvIADAVOqY\ndQIDAQAB\n-----END PUBLIC KEY-----\n"
    };

    const response = await fetch(ENDPOINTS.USER.LOGIN, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.json();

});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {
            name: '',
            isLogged: false
        },
        status: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(userLogin.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                   state.current.isLogged = true;
                   state.current.name = 'dimitar@wpmt.tech';
                   state.status = 'idle';
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.current.isLogged = false;
                state.status = 'failed';
                state.error = 'Login failed';
            });
    }
});

export default userSlice.reducer;
