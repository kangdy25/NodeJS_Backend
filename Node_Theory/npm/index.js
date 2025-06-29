import { compareAsc, format } from "date-fns";

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
];
dates.sort(compareAsc);

dates.forEach((date) => {
  console.log(format(date, "yyyy-MM-dd"));
});