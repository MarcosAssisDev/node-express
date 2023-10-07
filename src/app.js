import express from 'express';


const app = express();
app.use(express.json());
var livros = [];

app.get("/", (req, res) => {
    res.status(200).send("Estou na página inicial");
});

app.post("/livro", (req, res) => {
    var livro = implementId(req.body);

    livros.push(livro);
    res.status(200).json(livro);
    console.log(livros);
});

app.get("/livro", (req, res) => {
    res.status(200).json(livros);
});
app.get("/livro/:id", (req, res) => {
    var index = buscaIndexLivro(req.params.id);

    res.status(200).json(livros[index]);
});



function implementId(obj) {
    livros.length == 0 ? obj.id = 1 : obj.id = livros[livros.length - 1].id + 1;

    return obj;
}

function buscaIndexLivro(livroId) {
    return livros.findIndex(livro => livro.id == livroId)

}

export default app;