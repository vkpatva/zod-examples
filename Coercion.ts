import { z } from "zod";
const schema = z.coerce.string();

console.log(typeof "tuna");
console.log(typeof 12);
console.log(typeof true);

console.log("-------");
console.log(typeof schema.parse("tuna"));
console.log(typeof schema.parse(12));
console.log(typeof schema.parse(true));
