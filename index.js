import express from 'express'
const app = express();

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')

//Liberar acesso a pasta public
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import routes from "./routes/route.js"
import exp from 'constants';
import mongoose, { Mongoose } from 'mongoose';
const url = "mongodb+srv://aluno:aluno@cluster0.kgvfz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
console.log(mongoose.connect)



//Converte o caminho do arquivo atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'));

app.use(routes)

app.listen(3000)