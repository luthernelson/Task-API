
const express = require('express');
const { getUser } = require('../../controllers/Authentification/getUserController.js');

const router = express.Router();
// Route pour obtenir les Todos d'une tâche spécifique


router.get('/getUsers/', getUser);

module.exports = router;