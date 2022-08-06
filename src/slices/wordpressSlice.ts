import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd29yZHByZXNzLml2b3N0YW5jaGV2LmNvbSIsImlhdCI6MTY1OTcwNzgxNCwibmJmIjoxNjU5NzA3ODE0LCJleHAiOjE2NjAzMTI2MTQsImRhdGEiOnsidXNlciI6eyJpZCI6IjIifX19.QJxk06Mg91XZlf7R7d7kGzjHENtJQn1H2lzSrqrisC4';
const host = 'https://wordpress.ivostanchev.com';
const pluginEndpoint = '/wp-json/wp/v2/plugins';

export const fetchPlugins = createAsyncThunk('/plugins/fetchPlugins', async () => {
    const response = await fetch(host + pluginEndpoint, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        }
    });

    return response.json();
});

export const wordpressSlice = createSlice({
    name: 'wordpress',
    initialState: {
        data: [],
        status: 'idle',
        error: ''
    }, reducers: {
        populate: state => {

        }
    }, extraReducers(builder) {
        builder
            .addCase(fetchPlugins.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchPlugins.fulfilled, (state, action) => {
                state.data = state.data.concat(action.payload);
            })
            .addCase(fetchPlugins.rejected, (state, action) => {
                state.status = 'failed'
                state.error = 'An error has been encountered'
            } )
    }
});

export const selectPlugins = (state: { wordpress: { data: any; }; }) => state.wordpress.data
export const { populate } = wordpressSlice.actions;
export default wordpressSlice.reducer;
