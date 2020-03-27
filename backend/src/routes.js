const express =  require('express');
const OngService = require('./services/OngService');
const IncidentService = require('./services/IncidentService');
const ProfileService = require('./services/ProfileService');
const SessionService = require('./services/SessionService');


const routes = express.Router(); 
 
routes.post('/sessions', SessionService.create);

routes.get('/ongs', OngService.index);
routes.post('/ongs', OngService.create);


routes.get('/incidents', IncidentService.index);
routes.post('/incidents', IncidentService.create);
routes.delete('/incidents/:id', IncidentService.delete);

routes.get('/profile', ProfileService.index);

module.exports = routes;