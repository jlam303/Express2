const fs = require('fs');
const path = require('path');
// fs.writeFileSync(path.join(__dirname, '/name.txt'), 'e', (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });
// fs.appendFileSync(
//   path.join(__dirname, '/name.txt'),
//   'My name is bernard',
//   (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//   }
// );
// fs.unlinkSync(path.join(__dirname, '/name.txt'), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });
fs.mkdirSync(path.join(__dirname, '/lam'), (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
