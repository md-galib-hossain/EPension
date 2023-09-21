import { configureStore } from "@reduxjs/toolkit";
import allFormReducer from "../feature/pensionData/pensionFormSlice";
import juniorOfficer from "../feature/juniorOfficer/juniorOfficerSlice";
import GeneralOfficer from "../feature/assistantGeneral/assistantGeneralSlice";
import authReducer from "../feature/auth/authSlice";
import headOfficerSlice from "../feature/headOfficer/headOfficerSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    allFormReducer: allFormReducer,
    juniorOfficer: juniorOfficer,
    GeneralOfficer: GeneralOfficer,
    headOfficer: headOfficerSlice,
  },
});

export default store;