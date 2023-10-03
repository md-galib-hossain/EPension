const express = require('express');
const { getAllPensionApplications, approveRejectPensionApplication, getMyProfile } = require('../controllers/AssistantGeneralController');
const { isAuthenticated, authorizeRoles } = require('../middlewares/auth');
const router = express.Router();




// Route to view all submitted pension applications
router.get('/pensions/applications', isAuthenticated, authorizeRoles('assistantGeneral'), getAllPensionApplications);

router.get('/profile/assistanceGeneral', isAuthenticated, authorizeRoles('assistantGeneral'), getMyProfile);

router.put('/pension/application/:id', isAuthenticated, authorizeRoles('assistantGeneral'), approveRejectPensionApplication);

module.exports = router;