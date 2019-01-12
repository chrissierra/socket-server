import mysql = require('mysql');

export default class MySQL{

	private static _instance: MySQL;
	cnn: mysql.Connection;
	conectado:boolean= false;

	private constructor(){
		console.log("Clase inicializada. (Debe aparecer sólo 1 vez ) ")
			/*
			path: "http://www.google.com",
		  	headers: {
		    Host: "www.google.com"
		  }
			*/
		this.cnn =  mysql.createConnection({
											  host     : 'sister.cl', 
											  connectTimeout:50000,
											  user     : 'chris',
											  password : 'jazzmaster',
											  database : 'recursos_humanos',
											  port     :  3306,
											});
		this.conectarDB();

	}

	public static get instance(){

		return this._instance || (this._instance = 	new this());
	}


	private conectarDB(){
		this.cnn.connect((err:mysql.MysqlError) => {
			if(err){
				console.log(err.message)
				console.log(err.stack)
				return;
			}

			this.conectado = true;
			console.log("Conectado a la base de datos")
		})
	} // Fin función conectarDB



	static ejecutarQuery(query:string, callback:Function){
		this.instance.cnn.query(query, (err, results: Object[], fields)=>{

			if(err){
				console.log("Error en consulta")
				console.log(err)
				return callback(err);			
			}


			if(results.length === 0){
				callback('Sin registros')
			}else{
        		callback(null, results, )
			}

		});
	} // Fin función ejecutarQuery

}