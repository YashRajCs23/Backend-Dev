import fs from 'fs';

const logger=(req, res, next) => {
  const log = `${new Date().toISOString()} - ${req.method} ${req.originalUrl}\n`;
  fs.appendFile('server.txt', log, (err) => {
    if(err){
      console.error('Error writing to log file', err);
    }
    next();
  });
};

export default logger;