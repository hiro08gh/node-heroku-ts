"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const helmet = require("helmet");
const app = express();
app.use(helmet());
app.get('/', (req, res) => {
    res.send('ok');
});
app.listen(process.env.PORT || 5000, () => {
    console.log('localhost:5000');
});
//# sourceMappingURL=server.js.map