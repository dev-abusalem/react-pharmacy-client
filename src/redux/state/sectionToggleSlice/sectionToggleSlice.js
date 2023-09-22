import { createSlice } from "@reduxjs/toolkit";


const sectionToggleSlice = createSlice({
    name: 'sectiontoggle',
    initialState:{
        sectiontoggle:true, 
    },
    reducers:{
        setSectionToggleAddRemove: (state, action) => {
            state.sectiontoggle = action.payload;
          }
    }
})

export const { setSectionToggleAddRemove } = sectionToggleSlice.actions;
export default sectionToggleSlice.reducer;