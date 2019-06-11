"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("underscore");
exports.home = (req, res, next) => {
    res.status(200).json({
        "msg": "this is home"
    });
};
exports.test = (req, res) => {
    console.log("this is test log");
    const ary1 = [1, 2, 3];
    const ary2 = [4, 5, 6];
    const ary3 = _.zip(ary1, ary2);
    res.status(200).json({
        msg: "hihihi",
        ary3: ary3
    });
};
//# sourceMappingURL=index.js.map