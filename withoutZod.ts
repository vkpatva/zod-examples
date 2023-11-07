type Person = {
  name: string;
  movies: string[];
};

async function fetchPerson(): Promise<Person> {
  const results = await fetch("https://swapi.dev/api/people/1").then((res) =>
    res.json()
  );

  console.log("Fetch results: ", results);

  return results;
}

fetchPerson().then((person) => {
  console.log(person.name);
  console.log(person.movies);
});
