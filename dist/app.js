"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const index_1 = require("./routes/index");
const users_1 = require("./routes/users");
const debug = require('debug')('express-for-deploy:server');
const http = require("http");
const cls_rtracer_1 = require("cls-rtracer");
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cls_rtracer_1.expressMiddleware());
app.get('/', index_1.home);
app.get("/test", index_1.test);
app.get('/users', users_1.users);
// catch 404 and forward to error handler
app.use((req, res, next) => {
    res.status(404).json({
        status: 404,
        msg: "not found"
    });
});
// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
//# sourceMappingURL=app.js.map