const express = require("express");
const { GiveflagToJuniorOfficer, GiveflagToAssistantGeneral, GetAllReports, GetSingleReport, GetAllPensionForm, GetAllOfficers, DeactiveJuniorOfficerAndAssistantGeneral, getAllPensionApplicationsExpired } = require("../controllers/HeadOfficerController");
const { authorizeRoles, isAuthenticated } = require("../middlewares/auth");
const router = express.Router();

// pension form
router.get("/allpenionform", isAuthenticated, authorizeRoles('headOficer'), GetAllPensionForm);
router.get("/allOfficers", isAuthenticated, authorizeRoles('headOficer'), GetAllOfficers);
router.get("/allexpiredApplications", isAuthenticated, authorizeRoles('headOficer'), getAllPensionApplicationsExpired);

// get all reports
router.get("/headofficer/allreports", isAuthenticated, authorizeRoles('headOficer'), GetAllReports);
router.get("/report/:id", isAuthenticated, authorizeRoles('headOficer'), GetSingleReport);

// update the flags
router.put("/juniorOfficer/flag/:id", isAuthenticated, authorizeRoles('headOficer'), GiveflagToJuniorOfficer);
router.put("/assistantGeneral/flag/:id", isAuthenticated, authorizeRoles('headOficer'), GiveflagToAssistantGeneral);
router.put("/assistantGeneral/account/:id", isAuthenticated, authorizeRoles('headOficer'), DeactiveJuniorOfficerAndAssistantGeneral);


module.exports = router;