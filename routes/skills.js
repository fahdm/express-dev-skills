var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

// All actual paths start with "/skills"

// GET / skills

router.get('/', skillsCtrl.index);



// GET/skills/new 

router.get('/new', skillsCtrl.new);


// GET /skills/:id
router.get('/:id', skillsCtrl.show);

// POST/ skills

router.post('/', skillsCtrl.create );

// DELETE skills/:id

router.delete('/:id',skillsCtrl.delete);


module.exports = router;

