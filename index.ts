import Server from './classes/server';
import router from './router/router';
import bodyParser from 'body-parser';
import cors from 'cors';
const server = new Server();

// Parser
server.app.use( bodyParser.urlencoded({extended:true}) );
server.app.use(bodyParser.json());
server.app.use('/', router)

// cors
server.app.use(cors({origin:true, credentials:true}));

server.start( () => {
	console.log("Funcionando en " + server.port)
} )