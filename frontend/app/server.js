const express = require('express');
const path = require('path');


const PORT = process.env.PORT || 8080;

const dApp = express();

dApp.use(express.static(__dirname));
dApp.use(express.static(path.resolve(__dirname, 'build')));


dApp.get('*', () => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

dApp.listen(PORT);