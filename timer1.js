const alarmTime = process.argv.slice(2);
const timer = function() {
  for (let num of alarmTime) {
    let timeOut = 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timeOut *= num);
  }
};

timer(alarmTime);