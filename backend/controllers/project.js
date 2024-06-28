const Project = require('../models/project');
const fs = require('fs');
const dotenv = require('dotenv');

//create a new project and save it in the database with the image url gotten from the multer middleware
exports.createProject = (req, res) => {
    if (req.body.project) {
        const projectObject = JSON.parse(req.body.project);
        delete projectObject._id;
        const project = new Project({
            ...projectObject,
            imageUrl: `${process.env.SITE_URL}/images/${req.file.filename}`,
        });
        project.save().then(
            () => {
            res.status(201).json({
                message: 'Projet sauvegardé',
            });
            },
        ).catch(
            (error) => {
            res.status(400).json({
                error: error,
            });
            },
        );
        } else {
        res.status(400).json({
            error: 'Requête incorrecte',
        });
    }
};

exports.getAllProjects = (req, res) => {
    console.log('AllProjects called');
    Project.find()
        .then(projects => res.status(200).json(projects))
        .catch(error => res.status(400).json({ error }));
};

exports.getProjectById = (req, res) => {
    Project.findOne({ _id: req.params.id })
        .then(project => res.status(200).json(project))
        .catch(error => res.status(404).json({ error }));
};

//change the project image if a new image is uploaded and delete the old one from the server + update the project data
exports.updateProject = (req, res) => {
    const projectObject = req.file ? {
        ...JSON.parse(req.body.project),
        imageUrl: `${process.env.SITE_URL}/images/${req.file.filename}`,
      } : { ...req.body };
    
      delete projectObject._userId;
      Project.findOne({ _id: req.params.id })
        .then((project) => {
          if (project.userId !== req.auth.userId) {
            res.status(401).json({ message: 'Non autorisé' });
          } else {
            const filename = project.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
              Project.updateOne({ _id: req.params.id }, { ...projectObject, _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Projet modifié!' }))
                .catch((error) => res.status(401).json({ error }));
            });
          }
        })
        .catch((error) => {
          res.status(400).json({ error });
        });
};

//delete the project image from the server and the project data
exports.deleteProject = (req, res, next) => {
    Project.findOne({ _id: req.params.id })
    .then((project) => {
        const filename = project.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
    Project.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Projet supprimé !'}))
        .catch(error => res.status(400).json({ error }));
    });
})
.catch((error) => {
res.status(500).json({ error });
});
};

