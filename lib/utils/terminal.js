const { exec } = require("child_process");

const execCommand = (...args) =>
  new Promise((resolve, reject) => {
    exec(...args, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        return;
      }
      console.log(stdout);
      resolve();
    });
  });

module.exports = { execCommand };
