import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql'
const mysql = MySQL.instance;
const router = Router();

router.get('/mensajes', (req: Request,  res: Response) => {
	res.json({
		ok:true,
		mensaje:' Todo bien...'
	});
} );




router.get('/TrabajadoresEnTurno', (req: Request,  res: Response) => {
	
	const query = `
		SELECT * FROM asistencia
	`;

	MySQL.ejecutarQuery('SELECT * FROM asistencia WHERE anio="2019"', (err:any, asistencia:Object[]) => {
		if(err){
			console.log("En error al ejecutar la query")
			res.status(400).json({
				ok:false,
				error:err
			})
		}else{
			res.json({
				ok:true,
				asistencia
			})
		}
	})

} );




router.post('/mensajes', (req: Request,  res: Response) => {

	const romina = req.body.romina;

	res.json({
		ok:true,
		mensaje:' Todo bien...',
		romina
	});
} );


export default router;