const multer = require('multer');
const SharpMulter = require('sharp-multer');

const options = {
  fileFormat: 'webp',
  quality: 90,
  resize: { width: 800, resizeMode: 'contain'},
  useTimestamp: true,
};

// create a new file Naming convention
const newFilename = (ogFilename, options, req) => {
  const timestamp = options.useTimestamp ? `${Date.now()}` : '';
  const finalname = `upload_${timestamp}.${options.fileFormat}`;
  return finalname;
};

// create a new storage with the options
const storage = SharpMulter({
  destination: (req, file, callback) => callback(null, 'images'),
  imageOptions: options,
  filename: newFilename,
});

const upload = multer({ storage });

// middleware to upload the image
const uploadMiddleware = (req, res, next) => {
  upload.single('image')(req, res, next);
};

module.exports = uploadMiddleware;
