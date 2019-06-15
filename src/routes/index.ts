import * as _ from "underscore";
import {id} from "cls-rtracer";
import { hi } from "../service/test";
export const home = (req, res, next) => {
  console.log(`${id()} 요청`)
  hi();
  res.status(200).json({
    "msg": "this is home"
  })
}

export const test = (req, res) => {
  console.log("this is test log : " + id());
  hi();
  const ary1 = [1,2,3]
  const ary2 = [4,5,6]
  const ary3 = _.zip(ary1, ary2);
  res.status(200).json({
    msg: "hihihi",
    ary3: ary3
  })
};
