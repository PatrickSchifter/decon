module.exports = {
    async authenticateJWT(req, res, next) {
        const authHeader = req.headers.authorization;
        if (authHeader) {
          const token = authHeader.split(' ')[1];
          jwt.verify(token, keyToken, (err, user) => {
            if (err) {
              return res.sendStatus(403);
            }
            req.user = user;
            next();
          });
        } else {
          res.sendStatus(401);
        }
      }
 }
