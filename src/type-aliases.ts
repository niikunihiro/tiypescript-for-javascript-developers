export {};

type Mojiiretsu = string;

const fooString: string = "Hello";
const fooMojiretsu: Mojiiretsu = "Hello";

const example1 = {
  name: "Nii",
  age: 43,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: "Nii",
  age: 43,
};

type Profile2 = typeof example1;
