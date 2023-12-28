import { z } from "zod";

const User = z.object({
  username: z.string(),
});

console.log(User.parse({ username: "Ludwig" }));

type User = z.infer<typeof User>;
