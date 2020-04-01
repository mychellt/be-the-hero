const express =  require('express');
const OngService = require('./services/OngService');
const IncidentService = require('./services/IncidentService');
const ProfileService = require('./services/ProfileService');
const SessionService = require('./services/SessionService');
const {celebrate, Segments, Joi} =  require('celebrate');


const routes = express.Router(); 
 
routes.post('/sessions', SessionService.create);

routes.get('/ongs', OngService.index);

routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  }) 
}), OngService.create);


routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), IncidentService.index);
routes.post('/incidents', IncidentService.create);

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }),
}), IncidentService.delete);

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({authorization: Joi.string().required()}).unknown(),
}), ProfileService.index);

module.exports = routes;