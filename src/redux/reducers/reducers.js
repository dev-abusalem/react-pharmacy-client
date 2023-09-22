import { combineReducers } from '@reduxjs/toolkit';
import medicinesReducer from '../state/medicineSlice/medicineSlice';
import setSectionToggleReducer from "../state/sectionToggleSlice/sectionToggleSlice"
import customerReducer from "../state/customerSlice/customerSlice"
const rootReducer = combineReducers({
    medicines: medicinesReducer,
    customers:customerReducer,
    setSectionToggle:setSectionToggleReducer
});

export default rootReducer;