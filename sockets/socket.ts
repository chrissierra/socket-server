import {Socket} from 'socket.io';



export const desconectar = ( cliente:Socket ) => {

	cliente.on('disconnect',  ()=>{
		console.log('Cliente Desconectado')
	} )
}



export const mensaje = ( cliente:Socket ) => {

	cliente.on('mensaje',  (payload)=>{
		console.log('mensaje recibido en servidor ', payload)
	} )
}
