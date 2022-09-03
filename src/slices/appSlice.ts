import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice(
    {
        name: 'app',
        initialState: {
            sidebar: false
        },
        reducers: {
            openSidebar: state => {
                state.sidebar = true
            },
            closeSidebar: state => {
                state.sidebar = false
            }
        }
    }
)

export const selectSidebarState = (state: { app: { sidebar: boolean }; }) => state.app.sidebar;
export const { openSidebar, closeSidebar } = appSlice.actions;
export default appSlice.reducer;
