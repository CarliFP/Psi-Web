const express = require ("express");
const path = require ("path");
const app = express(); 


app.use(express.static("public"));

/*app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo en el puerto 3000'); 
})*/


/*app.listen (3000, () => {
    console.log ("Levantando un servidor con Express: Puerto 3000")
});*/
app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor corriendo en puerto 3000'); 
})


app.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
});


app.get('/notas', (req, res) => {
    res.sendFile(path.resolve('./views/notas.html'));
});

app.get('/404', (req, res) => {
      res.send("Error página no encontrada", 404);
    //console.log ();
}); 

