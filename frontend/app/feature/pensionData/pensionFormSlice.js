
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an async thunk to fetch individual pension form data from the API
export const createPensionForm = createAsyncThunk(
  'pensionForm/createPensionForm',
  async (pensionFormData) => {
    const response = await axios.post('http://localhost:5000/pension/form', pensionFormData, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  }
);


// Define an async thunk to fetch individual pension form data by ID from the API
export const updatePensionForm = createAsyncThunk(
  'pensionForm/updatePensionForm',
  async ({ formId, pensionFormData }) => {
    const response = await axios.put(`http://localhost:5000/pension/form/${formId}`, pensionFormData, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data.pensiondata; // Assuming the response contains the form data for the specified ID
  }
);


// Define an async thunk to fetch all pension form data from the API
export const fetchAllPensionFormData = createAsyncThunk(
  'pensionForm/fetchAllPensionFormData',
  async () => {
    const response = await axios.get('http://localhost:5000/pensions', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data.pensiondata;
  }
);


// post a report to headofficer
export const postReport = createAsyncThunk(
  'pensionForm/postReport',
  async (reportData) => {
    console.log("reportData: ", reportData);
    const response = await axios.post('http://localhost:5000/pension/reportfile', reportData, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    console.log("response frm api: ", response.data);

    return response.data;
  }
);

// get all reports of pensionholder from headofficer
export const fetchAllReports = createAsyncThunk(
  'pensionForm/fetchAllReports',
  async () => {
    const response = await axios.get('http://localhost:5000/my/reports', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    console.log("response: ", response.data);
    return response.data;
  }
);



const initialState = {
  pensionFormData: null, // Store the data for the currently loaded form
  allPensionFormData: [], // Store data for all forms
  reports: [],
  loading: false,
  error: null,
};


const pensionFormSlice = createSlice({
  name: 'pensionForm',
  initialState,
  reducers: {
    // Add other reducers as needed for updating form data
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPensionForm.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPensionForm.fulfilled, (state, action) => {
        state.loading = false;
        state.allPensionFormData = action.payload;
        state.error = null;
      })
      .addCase(createPensionForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle the new async thunk action fetchAllPensionFormData
      .addCase(fetchAllPensionFormData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllPensionFormData.fulfilled, (state, action) => {
        state.loading = false;
        state.allPensionFormData = action.payload;
        state.error = null;
      })
      .addCase(fetchAllPensionFormData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updatePensionForm.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePensionForm.fulfilled, (state, action) => {
        state.loading = false;
        state.pensionFormData = action.payload;
        state.error = null;
      })
      .addCase(updatePensionForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // reporst case
      .addCase(postReport.pending, (state) => {
        state.loading = true;
      }
      )
      .addCase(postReport.fulfilled, (state, action) => {
        state.loading = false;
        state.reports = action.payload;
        state.error = null;
      }
      )
      .addCase(postReport.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }
      )
      // fetch all reports
      .addCase(fetchAllReports.pending, (state) => {
        state.loading = true;
      }
      )
      .addCase(fetchAllReports.fulfilled, (state, action) => {
        state.loading = false;
        state.reports = action.payload;
        state.error = null;
      }
      )
      .addCase(fetchAllReports.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }
      )

  },
});

export default pensionFormSlice.reducer;
