export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverate: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  battingAverate: 0.367,
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverate: number;
// };

type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 156,
  battingAverate: 0.286,
};
