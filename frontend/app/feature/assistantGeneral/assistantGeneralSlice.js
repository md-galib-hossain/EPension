import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


//  Define an async thunk to fetch all pensions data from the API
export const MyProfileAssistanceGeneral = createAsyncThunk(
  'assistanceGeneral/MyProfileAssistanceGeneral',
  async () => {
    try {
      const response = await axios.get('http://localhost:5000/profile/assistanceGeneral', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      // console.log("MyProfileAssistanceGeneral : ", response.data);
      return response.data;

    } catch (error) {
      throw error;
    }
  }
);


// Define an async thunk to fetch all pensions data from the API
export const fetchAllPensions = createAsyncThunk(
  'assistanceGeneral/fetchAllPensions',
  async () => {
    try {
      const response = await axios.get('http://localhost:5000/pensions/applications', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      // console.log("fetchAllPensions : ", response.data.applications);

      return response.data.applications;
    } catch (error) {
      throw error;
    }
  }
);


export const updateAssistanceGeneral = createAsyncThunk(
  'assistanceGeneral/updateAssistanceGeneral',
  async ({ formId, newData }) => {
    console.log("updateAssistanceGeneral before: ", formId, newData);

    try {
      const response = await axios.put(`http://localhost:5000/pension/application/${formId}`, newData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      console.log("updateAssistanceGeneral after: ", response.data);
      return response.data;

    } catch (error) {
      throw error;
    }
  }
);


// Rest of your Redux slice code...
const initialassistanceGeneralData = {
  allApplications: [],
  assistantGeneral: {},
};

const assistanceGeneralSlice = createSlice({
  name: "assistanceGeneral",
  initialState: initialassistanceGeneralData,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPensions.fulfilled, (state, action) => {
        state.allApplications = action.payload;
      })
      .addCase(updateAssistanceGeneral.fulfilled, (state, action) => {
        const updatedData = action.payload;
        state.allApplications = state.allApplications.map((item) => {
          if (item.userId === updatedData.userId) {
            return { ...item, ...updatedData };
          }
          return item;
        });
      })
      .addCase(MyProfileAssistanceGeneral.fulfilled, (state, action) => {
        state.assistanceGeneral = action.payload;
      })
      .addCase(MyProfileAssistanceGeneral.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateAssistanceGeneral.rejected, (state, action) => {
        state.error = action.error.message;
      })
  },
});


export default assistanceGeneralSlice.reducer;

