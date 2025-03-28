const express = require('express');
const CampusController = require('../controllers/campusController');
const { validateCampus, validateCampusIDParam,validateNameParam, validateCampusUpdate } = require('../validators/campusDTO');

const router = express.Router();

router.post('/', validateCampus, CampusController.createCampus);
router.get('/:name', validateNameParam, CampusController.getCampus);
router.get('/id/:campusID', validateCampusIDParam, CampusController.getCampusByID);
router.get('/', CampusController.getAllCampuses);
router.put('/:name', validateCampusUpdate, CampusController.updateCampus);
router.delete('/:name', validateNameParam, CampusController.deleteCampus);
router.delete('/', CampusController.deleteAllCampuses);

module.exports = router;
