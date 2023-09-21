const express = require('express');
const { approveRejectPensionApplication, approveApplication, getAllPensionApplicationsByJuniorOfficer, getMyProfile } = require('../controllers/JuniorOfficerController');
const { isAuthenticated, authorizeRoles } = require('../middlewares/auth');
const router = express.Router();


// Route to view all submitted pension applications
router.get('/profile/pensions/applications', isAuthenticated, authorizeRoles('juniorOfficer'), getAllPensionApplicationsByJuniorOfficer);

router.get('/profile/juniorOfficer', isAuthenticated, authorizeRoles('juniorOfficer'), getMyProfile);

router.put('/pensions/application/:id', isAuthenticated, authorizeRoles('juniorOfficer'), approveApplication);

// Route to approve/reject applications and provide rejection reasons
router.put('/pensions/application/:id', isAuthenticated, authorizeRoles('juniorOfficer'), approveRejectPensionApplication);


module.exports = router;