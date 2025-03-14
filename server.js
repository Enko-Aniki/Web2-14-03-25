const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;
const HOST = process.env.HOST || '192.168.56.1'
app.set('view engine', 'ejs');
app.set('view', './view');
const homeRoutes = require('./routes/homeRoutes');
app.use('/home', homesRoutes);

app.get('/', (req, res) => {
    res.status.render('index',
    tittle:'Pagina Inicial',
    message:'Bem Vindo ao express com EJS!'
    )
});

const rotaAdmin = express.Router();

rotaAdmin.get('/', (req,res) => {
    res.status(200).send('Dashboard Adimin');


});

rotaAdmin.get('/usuarios', (req, res) => {
    res.status(200).send('Gerenciamento do Usuário');


});

rotaAdmin.get('/xxxx', (req, res) => {
    res.status(200).json{nome: "enzo", idade: "24"};


});

app.use('/admin', rotaAdmin);


app.listen(PORT, () => { //template string 192.168.56.1

    console.log(`Servidor http://${HOST}:${PORT}`)

});

