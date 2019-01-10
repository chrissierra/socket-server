import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', (req: Request,  res: Response) => {
	res.json({
		ok:true,
		mensaje:' Todo bien...'
	});
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