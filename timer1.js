
const alarm = process.argv.slice(2).map(x => x * 1000);

console.log("Alarm will sound in:");

for (const al of alarm) {

  if (al > 0 && Number.isInteger(al)) {
    console.log(`${al / 1000} seconds`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, al);
  }
}




