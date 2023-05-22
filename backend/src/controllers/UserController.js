const mysql = require('mysql2');

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'petschifter',
   password: '1234',
   database: 'decon'
});

function obtemID() {
   return new Promise((resolve, reject) => {
      connection.query(`SELECT CONNECTION_ID()AS Sessao`, (error, results) => {
         if (error) {
            reject(error);
         }
         resolve(results);
      });
   });
}

let connection_id = null

obtemID().then((results) => {
   connection_id = results[0].Sessao
})


const responseModel = {
   sucess: false,
   data: [],
   error: []
}

module.exports = {

   async login(req, res) {
      const jwt = require('jsonwebtoken')

      const emailReq = req.body.email;
      const password = req.body.password;

      let authenticated = false
      let token = "null"
      let keyToken = process.env.KEY_TOKEN
      let dadosUsuario
      let response


      function obtemUsuarios() {
         return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM User WHERE Email = '${emailReq}'`, (error, results) => {
               if (error) {
                  reject(error);
               }
               resolve(results);
            });
         });
      }

      await obtemUsuarios()
         .then((results) => {

            if (Object.keys(results).length === 0) {
               response = { "authenticated": authenticated, token: token, "info": "Email não encontrado" }
            } else if (results[0].Password !== password) {
               response = { "authenticated": authenticated, token: token, "info": "Senha incorreta" }
            } else {
               //Gera o token e monta a resposta da API

               dadosUsuario = results[0]

               delete dadosUsuario.Email
               delete dadosUsuario.Password

               authenticated = true;
               token = jwt.sign(dadosUsuario, keyToken, { expiresIn: '1h' });

               response = { "authenticated": authenticated, token: token, user_data: dadosUsuario, connection_id: connection_id }
            }

         })
         .catch((error) => {
            console.log(error);
         });


      return res.json(response)
   }
}