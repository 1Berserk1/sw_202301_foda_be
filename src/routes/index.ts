import express from 'express';
const router  = express.Router();

import empresasRouter from './empresas/empresas';
import usuariosRouter from './usuarios/usuarios';
// REST API
// INTERNETM -> HTTP -> REST API ->DB
// SOAP XML wsdl
// {} -> JSON
// [] -> JSON
// {llave:valor}
// valor:texto, numerico, booleano, array, [valores], objeto {llave:valor}

// REST stateless, resource unique representation
// CRUD Create, Read, Update, Delete
//      POST,    GET,  PUT,   DELETE


router.get('/', (_req, res) => {
  res.json({msg:'Hello World!'});
 });

router.get('/version', (_req, res) =>{
  const version: string = "1.0.0";
  const jsonResp = {"name":"FODA Be", "version": version};
  // string, number, boolean, types, interfaces, classes, methods, enums, properties
  res.json(jsonResp);
});

router.use('/empresas', empresasRouter);
router.use('/usuarios', usuariosRouter);

export default router;
