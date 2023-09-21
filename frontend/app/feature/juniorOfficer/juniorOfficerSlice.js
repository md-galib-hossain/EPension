import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


// Define an async thunk to fetch all pensions data from the API
export const fetchPensions = createAsyncThunk(
  'juniorOfficer/fetchPensions',
  async () => {
    try {
      const response = await axios.get('http://localhost:5000/profile/pensions/applications', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      // console.log("fetchPensions : ", response.data.applications);

      return response.data.applications;
    } catch (error) {
      throw error;
    }
  }
);

// JuniorOfficer Profile data 
export const JuniorOfficerProfile = createAsyncThunk(
  'juniorOfficer/JuniorOfficerProfile',
  async () => {
    try {
      const response = await axios.get('http://localhost:5000/profile/juniorOfficer', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);


export const updateJuniorOfficer = createAsyncThunk(
  'juniorOfficer/updateJuniorOfficer',
  async ({ formId, newData }) => {
    console.log("updateJuniorOfficer before: ", formId, newData);

    try {
      const response = await axios.put(`http://localhost:5000/pensions/application/${formId}`, newData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      console.log("updateJuniorOfficer after: ", response.data);

      return response.data;

    } catch (error) {
      throw error;
    }
  }
);



// Rest of your Redux slice code...

const initialjuniorOfficerData = {
  juniorOfficer: {},
  allApplications: [],
  error: null,
};


const juniorOfficerSlice = createSlice({
  name: "juniorOfficer",
  initialState: initialjuniorOfficerData,
  reducers: {
    // Your other reducers can go here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPensions.fulfilled, (state, action) => {
        state.allApplications = action.payload;
      })
      .addCase(fetchPensions.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateJuniorOfficer.fulfilled, (state, action) => {
        // Handle the successful update of junior officer data
        // For example, you can update the state with the new data.
        const updatedData = action.payload;
        state.allApplications = state.allApplications.map((item) => {
          if (item.userId === updatedData.userId) {
            return { ...item, ...updatedData };
          }
          return item;
        });
      })
      .addCase(updateJuniorOfficer.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(JuniorOfficerProfile.fulfilled, (state, action) => {
        state.juniorOfficer = action.payload;
      })
      .addCase(JuniorOfficerProfile.rejected, (state, action) => {
        state.error = action.error.message;
      })

  },
});


export const {
  addJuniorOfficerStatus,
  updateJuniorOfficerComplains,
} = juniorOfficerSlice.actions;
export default juniorOfficerSlice.reducer;
