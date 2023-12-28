import { z } from "zod";

const PersonSchema = z.object({
  name: z.string(),
  movies: z.array(z.string()),
});

type Person = z.infer<typeof PersonSchema>;

async function fetchPerson(): Promise<Person> {
  const results = await fetch("https://swapi.dev/api/people/1").then((res) =>
    res.json()
  );
  // try {
  //   PersonSchema.parse(results);
  //   return results;
  // } catch (error) {
  //   console.log("ZodError Identified : ", error);
  //   throw "Zod Validation failed";
  // }
  if (PersonSchema.safeParse(results).success) {
    return results;
  } else {
    console.log({ ...PersonSchema.safeParse(results) });
    throw "Zod Validation Failed";
  }
}

fetchPerson()
  .then((person) => {
    console.log(person.name);
    console.log(person.movies[0]);
  })
  .catch((err) => {
    console.log("here is error");
    console.log(err);
  });
