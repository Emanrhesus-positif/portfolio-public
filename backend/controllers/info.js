const Info = require('../models/info');
const dotenv = require('dotenv');
exports.getInfotByTitle = (req, res) => {
  Project.findOne({ title: req.params.title })
    .then(info => res.status(200).json(info))
    .catch(error => res.status(404).json({ error }));
};

exports.updateInfo = (req, res) => {
  Info.findOne({ title: req.params.title })
    .then((info) => {
      if (info.title !== req.params.title) {
        res.status(401).json({ message: 'Mauvais bloc info' });
      } else {
          Info.updateOne({ title: req.params.title }, { ...infoObject, title: req.params.title })
            .then(() => res.status(200).json({ message: 'Information modifiée !' }))
            .catch((error) => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
