// The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating

const alarmTime = process.argv.slice(2);
const timer = function() {
  for (let element of alarmTime) {
    if (element === 'b') {
      process.stdout.write('\x07');
    }
    if (element === '1' || element === '2' || element === '3' || element === '4' || element === '5' || element === '6' || element === '7' || element === '8' || element === '9') {
      console.log(`setting timer for ${element} seconds ...`);
      setTimeout(() => {
        process.stdout.write(`\x07`);
      }, (element * 1000));
    }
    if (element === 'U0003') {
      process.exit();
    }
  }
};

timer(alarmTime);