const express = require("express");
const router = express.Router();

const { GetAllPensionForm, GetSinglePensionForm, UpdatePensionForm, DeletePensionForm, CreatePensionForm, Filereport } = require("../controllers/PensionFormController");
const { isAuthenticated, authorizeRoles } = require("../middlewares/auth");
const { GetAllReports, GetSingleReport } = require("../controllers/HeadOfficerController");

router.post("/pension/form", isAuthenticated, authorizeRoles('pensionholder'), CreatePensionForm);
router.put("/pension/form/:id", isAuthenticated, authorizeRoles('pensionholder','headOficer'), UpdatePensionForm);
router.delete("/pension/form/:id", isAuthenticated, authorizeRoles('pensionholder'), DeletePensionForm);

router.get("/pension/form/:id", isAuthenticated, authorizeRoles('headOficer', 'juniorOfficer', 'assistantGeneral'), GetSinglePensionForm);
router.get("/pensions", isAuthenticated, authorizeRoles('headOficer', 'pensionholder'), GetAllPensionForm);

// Report to HeadOficer
router.post("/pension/reportfile", isAuthenticated, authorizeRoles('pensionholder'), Filereport);
router.get("/my/reports", isAuthenticated, authorizeRoles('pensionholder'), GetAllReports);
router.get("/my/report/:id", isAuthenticated, authorizeRoles('pensionholder'), GetSingleReport);


module.exports = router;