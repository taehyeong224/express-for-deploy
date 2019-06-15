"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("underscore");
const cls_rtracer_1 = require("cls-rtracer");
const test_1 = require("../service/test");
exports.home = (req, res, next) => {
    console.log(`${cls_rtracer_1.id()} 요청`);
    test_1.hi();
    res.status(200).json({
        "msg": "this is home"
    });
};
exports.test = (req, res) => {
    console.log("this is test log : " + cls_rtracer_1.id());
    test_1.hi();
    const ary1 = [1, 2, 3];
    const ary2 = [4, 5, 6];
    const ary3 = _.zip(ary1, ary2);
    res.status(200).json({
        msg: "hihihi",
        ary3: ary3
    });
};
//# sourceMappingURL=index.js.map