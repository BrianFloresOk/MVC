const express = require('express');
const app = express();
const PORT = 3000;

const indexRouter = require('./routes/indexRoutes')

app.use(express.static("public"))

app.use('/', indexRouter)


app.listen(PORT, () => {
    console.log(`Servidor levantado en http://localhost:${PORT}`)
})