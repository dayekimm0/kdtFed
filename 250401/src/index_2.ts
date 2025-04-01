interface IStudent {
  type: "student";
  school: string;
}

interface IDeveloper {
  type: "developer";
  skill: string;
}

interface IUser<T> {
  name: string;
  profile: IStudent | IDeveloper;
}

const goToSchool = (user: IUser<IStudent>) => {
  if (user.profile.type !== "student") {
    console.log("잘 못 오셨습니다!");
    return;
  }
  const school = user.profile.school;
  console.log(`${school}로 등교완료!`);
};

const developerUser: IUser<IDeveloper> = {
  name: "David",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};
const studentUser: IUser<IStudent> = {
  name: "David",
  profile: {
    type: "student",
    school: "Ezen",
  },
};
