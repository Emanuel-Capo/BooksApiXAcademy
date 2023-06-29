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

const userIsAdminMdw = (req, res, next)=>{
    return passport.authenticate("jwt", {session: false},(err, user, info)=>{
            if (err) {
                console.error(err);
                return next(err)
            }
            if (user.role == "admin") {
                req.user = user;
                return next();
            }
            res.status(401).json({error: "user not admin"})
        }
    ),(req, res, next);
}

module.exports = {SERVER_SECRET, jwtValidMdw, userIsAdminMdw};