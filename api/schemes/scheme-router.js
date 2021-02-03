const express = require('express');

const Schemes = require('./scheme-model.js');

const router = express.Router();

router.get('/', async(req, res) => {
  Schemes.find()
    .then(schemes => {
      if(schemes){
        res.json(schemes);
      }else{
        res.status(404).json({
          message: 'Could not be completed schems 400 /api/schemes/ ',schemes
        })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get schemes 500 GET //api/schemes/ ',err });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Schemes.findById(id)
    .then(scheme => {
      if (scheme) {
        res.json(scheme);
      } else {
        res.status(404).json({ message: 'Could not find scheme with given id. 404 GET api/schemes/id ',scheme })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get schemes 500 GET /api/schemes/ID',err });
    });
});

router.get('/:id/steps', async(req, res) => {
  const { id } = req.params;

  Schemes.findSteps(id)
    .then(steps => {
      if (steps != undefined) {
        res.json(steps);
      } else {
        res.status(404).json({ message: 'Could not find steps for given scheme ',steps })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get steps' ,err});
    });
});

router.post('/', async (req, res) => {
  const schemeData = req.body;

  Schemes.add(schemeData)
    .then(scheme => {
      res.status(201).json(scheme);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new scheme' });
    });
});

router.post('/:id/steps', (req, res) => {
  const stepData = req.body;
  const { id } = req.params;

  Schemes.findById(id)
    .then(scheme => {
      if (scheme) {
        return Schemes.addStep(stepData, id);
      } else {
        res.status(404).json({ message: 'Could not find scheme with given id.' })
      }
    })
    .then(step => {
      res.status(201).json(step);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new step' });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Schemes.findById(id)
    .then(scheme => {
      if (scheme) {
        return Schemes.update(changes, id);
      } else {
        res.status(404).json({ message: 'Could not find scheme with given id PUT /api/shemes/id 404 ',Schemes });
      }
    })
    .then(updatedScheme => {
      res.json(updatedScheme);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to update scheme 500 PUT /apit/schemes/id ',err });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Schemes.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find scheme with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete scheme' });
    });
});

module.exports = router;
