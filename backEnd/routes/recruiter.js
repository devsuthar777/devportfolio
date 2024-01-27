const express = require('express');

const router = express.Router();

const {createRecruitInfo} = require('../controllers/createRecruitInfo');
const {createContectorInfo} = require('../controllers/createContectorInfo');
const {createVisitorToken} = require('../controllers/createVisitorToken');
const {isAllowedRecruiter,isAllowedContector,isValid} = require('../middlewares/valid');

router.post("/createRecruiterInfo",isAllowedRecruiter,createRecruitInfo);

router.post("/createVisitorToken",createVisitorToken);
router.post("/createContactorInfo",isAllowedContector,createContectorInfo);


module.exports = router;