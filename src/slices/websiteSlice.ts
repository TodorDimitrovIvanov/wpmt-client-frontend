import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ENDPOINTS } from "../constants/endpoints";


export const selectSite = createAsyncThunk('/website/active/set', async () => {

    const body = {
        website_id: "wordpress.ivostanchev.com"
    };

    const response = await fetch(ENDPOINTS.WEBSITE.SET_ACTIVE, {
        method: 'POST',
        body: JSON.stringify(body)
    });

    return response.json();
});

export const websiteSlice = createSlice({
    name: 'website',
    initialState: {
        selectedWebsite: '',
        status: 'idle',
        error: ''
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(selectSite.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(selectSite.fulfilled, (state, action) => {
                state.selectedWebsite = 'wordpress.ivostanchev.com'
                state.status = 'idle'
            })
            .addCase(selectSite.rejected, (state, action) => {
                state.status = 'failed'
                state.error = 'Something went wrong!'
            });
    }
});


export default websiteSlice.reducer;
