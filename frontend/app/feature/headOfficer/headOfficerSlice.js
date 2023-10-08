// src/slices/headOfficerSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    reports: [],
    Officers: [],
    applications: [],
    assistantGeneralFlag: 0,
    juniorOfficerFlag: 0,
    singleReport: null,
    loading: false,
    error: null,
};

// Separate API functions
export const accountStatusUpdate = createAsyncThunk(
    'headOfficer/accountStatusUpdate',
    async ({ id, Status }) => {


        const accountStatus = await axios.put(
            `http://localhost:5000/assistantGeneral/account/${id}`, { account_status: Status }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });


        return accountStatus.data;
    }
);

export const AddJuniorOfficerFlag = createAsyncThunk(
    'headOfficer/AddJuniorOfficerFlag',
    async ({ id, flags }) => {
        const flagResponse = await axios.put(
            `http://localhost:5000/juniorOfficer/flag/${id}`, { flag: flags }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });

        console.log("flagResponse: ", flagResponse.data);

        return flagResponse.data;
    }
);

export const fetchReports = createAsyncThunk(
    'headOfficer/fetchReports',
    async () => {
        const reportsResponse = await axios.get('http://localhost:5000/headofficer/allreports', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        console.log("fetchReports: ", reportsResponse.data.reports);

        return reportsResponse.data.reports;
    }
);

export const allOfficers = createAsyncThunk(
    'headOfficer/allOfficers',
    async () => {
        const Response = await axios.get('http://localhost:5000/allOfficers', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        console.log("allOfficers: ", Response.data);

        return Response.data;
    }
);

export const AddAssistantGeneralFlag = createAsyncThunk(
    'headOfficer/AddAssistantGeneralFlag',
    async ({ id, flags }) => { // Destructure id and flags from the parameter
        const flagResponse = await axios.put(
            `http://localhost:5000/assistantGeneral/flag/${id}`, { flag: flags }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }
        );

        return flagResponse.data.flagsUpdate;
    }
);
const currentDate = new Date();

// pension expiry status update
export const updatePensionFormExpiry = createAsyncThunk(
    'headOfficer/updatePensionFormExpiry',
    async (id) => {
        
            const response = await axios.put(`http://localhost:5000/pension/form/${id}`,{
                status: 'pending',
                rejected_by_role: '',
                rejectionReason: '',
                process_status_by_role: 'juniorOfficer',
                rejectionDate: '',
                approvalDate: '',
                created: currentDate,
                from_expired_out: [] }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            return response.data;
       
    }
);




export const fetchReportById = createAsyncThunk(
    'headOfficer/fetchReportById',
    async (reportId) => {
        const response = await axios.get(`http://localhost:5000/report/${reportId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    }
);

// get all reports of pensionholder
export const fetchAllReports = createAsyncThunk(
    'pensionForm/fetchAllReports',
    async () => {
        const response = await axios.get('http://localhost:5000/headofficer/allreports', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        console.log("response: ", response.data);
        return response.data;
    }
);

// get single report of pensionholder
export const fetchSingleReport = createAsyncThunk(
    'pensionForm/fetchSingleReport',
    async (reportId) => {
        const response = await axios.get(`http://localhost:5000/report/${reportId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        console.log("response: ", response.data);
        return response.data;
    }
);

// Define an async thunk to fetch all pensions data from the API
export const fetchAllPensions = createAsyncThunk(
    'headOfficer/fetchAllPensions',
    async () => {
        try {
            const response = await axios.get('http://localhost:5000/allpenionform', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            return response.data.pensiondata;
        } catch (error) {
            throw error;
        }
    }
);



const headOfficerSlice = createSlice({
    name: 'headOfficer',
    initialState,
    reducers: {
        decreaseAssistantGeneralFlag: (state) => {
            state.assistantGeneralFlag -= 1;
        },
        decreaseJuniorOfficerFlag: (state) => {
            state.juniorOfficerFlag -= 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchReports.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchReports.fulfilled, (state, action) => {
                state.loading = false;
                state.reports = action.payload;
            })
            .addCase(fetchReports.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(allOfficers.pending, (state) => {
                state.loading = true;
            })
            .addCase(allOfficers.fulfilled, (state, action) => {
                state.loading = false;
                state.Officers = action.payload;
            })
            .addCase(allOfficers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(AddJuniorOfficerFlag.pending, (state) => {
                state.loading = true;
            })
            .addCase(AddJuniorOfficerFlag.fulfilled, (state, action) => {
                state.loading = false;
                state.juniorOfficerFlag = action.payload;
            })
            .addCase(AddJuniorOfficerFlag.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(AddAssistantGeneralFlag.pending, (state) => {
                state.loading = true;
            })
            .addCase(AddAssistantGeneralFlag.fulfilled, (state, action) => {
                state.loading = false;
                state.assistantGeneralFlag = action.payload; // Update the flags value in the state
            })
            .addCase(AddAssistantGeneralFlag.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchReportById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchReportById.fulfilled, (state, action) => {
                state.loading = false;
                state.singleReport = action.payload;
            })
            .addCase(fetchReportById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(accountStatusUpdate.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(accountStatusUpdate.fulfilled, (state, action) => {
                state.loading = false;
                state.Officers = action.payload;
            }
            )
            .addCase(accountStatusUpdate.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
           .addCase(updatePensionFormExpiry.fulfilled, (state, action) => {
                // Handle the fulfilled action if needed
            })
            .addCase(updatePensionFormExpiry.rejected, (state, action) => {
                // Handle the rejected action, possibly show an error message
                console.error('Update Pension Form Expiry failed:', action.payload);
            })
            
            // get all reports of pensionholder
            .addCase(fetchAllReports.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(fetchAllReports.fulfilled, (state, action) => {
                state.loading = false;
                state.reports = action.payload;
            }
            )
            .addCase(fetchAllReports.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // get single report of pensionholder
            .addCase(fetchSingleReport.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(fetchSingleReport.fulfilled, (state, action) => {
                state.loading = false;
                state.singleReport = action.payload;
            }
            )
            .addCase(fetchSingleReport.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            }
            )
            // get all pensions
            .addCase(fetchAllPensions.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(fetchAllPensions.fulfilled, (state, action) => {
                state.loading = false;
                state.applications = action.payload;
            }
            )
            .addCase(fetchAllPensions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            }
            );

    },
});


export const {
    decreaseAssistantGeneralFlag,
    decreaseJuniorOfficerFlag,
} = headOfficerSlice.actions;

export default headOfficerSlice.reducer;
