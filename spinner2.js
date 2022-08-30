const spinner = () => {
  const spinners = ["|", "/", "-", "\\", "|"];
  let delay = 100;
  spinners.forEach(element => {
    setTimeout(() => {
      process.stdout.write(`\r${element}   `);
    }, delay);
    delay += 200;
  });
};

spinner();