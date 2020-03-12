const express = require('express');
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.post('/upload', upload.single('photo'), (req, res) => {
res.redirect('/');
});

app.listen(PORT, () => {
    console.log('Listening at ' + PORT );
});
