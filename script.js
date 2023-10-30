/*const hoje = new Date()
const dia = hoje.getDate().toString().padStart(2, '0')
const mes = String(hoje.getMonth() + 1).padStart(2, '0')
const ano = hoje.getFullYear()
const dataAtual = `${ano} - ${mes} - ${dia}`
const descrit = "pago";

const { TopologyDescription } = require("mongodb")
let mysql = require("mysql");

let conexao = mysql.createConnection({
  host: "localhost",
  database: "financas",
  user: "root",
  password: ""

});

conexao.connect(function (err) {


  if (err) { throw err }

  else {
    console.log("conexão exitosa")

  }

});

const inserir = "insert into gastos values(default,'2023-10-25',	'" + descrit + "',	    '100',	'doação',	'especie',	   'outubro',	'2');"

conexao.query(inserir, function (error) {
  if (error) {
    throw error;
  }
  else { console.log("dados inseridos corretamente") }

})




const gastos = "select * from gastos";
conexao.query(gastos, function (error, lista) {
  if (error) {
    throw error
  }
  else {
    console.log(lista)

  }
});

conexao.end();*/




