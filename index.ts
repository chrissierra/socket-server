import Server from './classes/server';
import router from './router/router';
import bodyParser from 'body-parser';
import cors from 'cors';
import MySQL from './mysql/mysql'
const server = Server.instance;	
const mysql = MySQL.instance;
//const mysql = new MySQL();
// Parser
server.app.use( bodyParser.urlencoded({extended:true}) );
server.app.use(bodyParser.json());
server.app.use('/', router)

// cors
server.app.use(cors({origin:true, credentials:true}));

server.start( () => {
	console.log("Funcionando en " + server.port)
} )