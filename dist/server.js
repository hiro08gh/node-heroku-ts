"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (req, res) => {
    res.json(JSON.stringify({ ok: 1 })).end();
});
app.get('/ok', (req, res) => {
    res.send('ok');
});
app.listen(process.env.PORT || 5000, () => {
    console.log('localhost:5000');
});
//# sourceMappingURL=server.js.map