import Redis from "ioredis";

export const pub = new Redis({
  //host: "",
  //port: 0,
  //username: "default",
  //password: "",
});

export const sub = new Redis({
  //host: "",
  //port: 0,
  //username: "",
  //password: "",
});