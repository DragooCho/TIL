// const starOutput = () => {
//   for (let i = 1; i < 5; i++) {
//     let star = "";
//     for (let j = 0; j < i; j++) {
//       star = star + "*";
//     }
//     console.log(star);
//   }
// };

const currentDate = () => {
  let currentTime = new Date();
  let year = currentTime.getUTCFullYear();
  let month = currentTime.getMonth();
  let day = currentTime.getDate();
  return `${year}. ${month + 1}. ${day}`;
};

console.log(currentDate());
