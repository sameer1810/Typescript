const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Initialize express app
const app = express();

// Serve the static HTML file
app.use(express.static(path.join(__dirname, 'public')));

// Set the storage engine for multer
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Initialize upload variable
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // Limit file size to 1MB
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    }
}).single('myFile');

// Check file type
function checkFileType(file, cb) {
    // Allowed extensions
    const filetypes = /jpeg|jpg|png|gif/;
    // Check extension
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

// Route to handle file upload
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.send(`
                <h2>${err}</h2>
                <a href="/">Go Back</a>
            `);
        } else {
            if (req.file == undefined) {
                res.send(`
                    <h2>Error: No File Selected!</h2>
                    <a href="/">Go Back</a>
                `);
            } else {
                res.send(`
                    <h2>File Uploaded!</h2>
                    <p>File Name: ${req.file.filename}</p>
                    <a href="/">Upload Another File</a>
                `);
            }
        }
    });
});

// Create the uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(Server started on http://localhost:${PORT});
});