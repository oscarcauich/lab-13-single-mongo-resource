'use strict';

module.exports = (err, req, res, next) => {
  console.log('Logged followiing erro: ', err.message);

  if(err.message.toLowerCase().includes('validation failed'))
    return res.sendStatus(400);

  if(err.message.toLowerCase().includes('duplicate key'))
    return res.sendStatus(409);

  if(err.message.toLowerCase().includes('objectid failed'))
    return res.sendStatus(404);

  res.sendStatus(503);
};
