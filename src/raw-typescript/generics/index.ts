// Generics
type User<T> = T;
type State = { name: string; age: number; id: boolean };
type Key = keyof State;
type Id = State[`id`];

const nameHandler = <T extends State, U extends Key>(data: T, age: U) => {
  console.log("data :", data[`${age}`]);
  return { data, age };
};

let data = nameHandler<State, Key>(
  { name: "ifti", age: 230, id: true },
  "name"
);

console.log("name :", data);
