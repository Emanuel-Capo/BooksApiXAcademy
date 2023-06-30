const SERVER_SECRET = "ClaveUltraSecreta1234";

const passport = require("passport");
const passportJwt = require("passport-jwt");

const JWTStrategy = passportJwt.Strategy;
const extractJWT = passportJwt.ExtractJwt;

passport.use(
    new JWTStrategy({
        jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: SERVER_SECRET
    }, 
    (jwtPayload, done)=>{
        const user = jwtPayload;
        return done(null, user)
    })
)

const jwtValidMdw = passport.authenticate("jwt",{session: false})


// Middleware que comprueba que el rol sea Admin
const userIsAdminMdw = (req, res, next)=>{
    return passport.authenticate("jwt", {session: false},(err, user, info)=>{
            if (err) {
                console.log(err);
                return next(err)
            }
            if (user.role == "Admin") {
                req.user = user;
                return next();
            }
            res.status(401).json({error: "user not admin"})
        }
    )(req, res, next);
}

// Middleware utilizado al editar usuario, que comprueba que el token corresponda al user enviado por params
const userIsCorrect = (req, res, next)=>{
    return passport.authenticate("jwt", {session: false},(err, user, info)=>{
            if (err) {
                console.log(err);
                return next(err)
            }
            console.log("USER ",user);
            console.log("PARAMS ",req.params);
            if (user.id == req.params.userId) {
                req.user = user;
                return next();
            }
            res.status(401).json({error: "user is not allowed to edit this data"})
        }
    )(req, res, next);
}

module.exports = {SERVER_SECRET, jwtValidMdw, userIsAdminMdw, userIsCorrect};