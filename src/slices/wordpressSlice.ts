import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ENDPOINTS } from "../constants/endpoints";

export const fetchPlugins = createAsyncThunk('/plugins/fetchPlugins', async () => {
    const response = await fetch(ENDPOINTS.WORDPRESS.PLUGINS, {
        method: 'GET'
    });

    return response.json();
});

export const fetchTheme = createAsyncThunk('/plugins/fetchTheme', async () => {
    const response = await fetch(ENDPOINTS.WORDPRESS.THEMES, {
        method: 'GET',
    });
    return response.json();
});

export const fetchVersion = createAsyncThunk('/core/fetchVersion', async () => {
    const response = await fetch(ENDPOINTS.WORDPRESS.VERSION, {
        method: 'GET'
    });
    return response.json();
});

export const wordpressSlice = createSlice({
    name: 'wordpress',
    initialState: {
        themes: [],
        plugins: [],
        version: '',
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
                state.plugins = state.plugins.concat(Object.values(action.payload.Result));
            })
            .addCase(fetchPlugins.rejected, (state, action) => {
                state.status = 'failed';
                state.error = 'An error has been encountered';
            })
            .addCase(fetchTheme.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchTheme.fulfilled, (state, action) => {
                state.themes = state.themes.concat(Object.values(action.payload.Result));
            })
            .addCase(fetchTheme.rejected, (state, action) => {
                state.status = 'failed';
                state.error = 'An error has been encountered';
            })
            .addCase(fetchVersion.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchVersion.fulfilled, (state, action) => {
                const version = action.payload.Result.replace('["', '').replace('"]', '')
                state.version = version;
            })
            .addCase(fetchVersion.rejected, (state, action) => {
                state.status = 'failed';
                state.error = 'An error has been encountered';
            });
    }
});

export const selectPlugins = (state: { wordpress: { plugins: any; }; }) => state.wordpress.plugins;
export const selectThemes = (state: { wordpress: { themes: any; }; }) => state.wordpress.themes;
export const selectVersion = (state: { wordpress: { version: string } }) => state.wordpress.version;
export const { populate } = wordpressSlice.actions;
export default wordpressSlice.reducer;
