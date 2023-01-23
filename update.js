const { simpleGit, CleanOptions } = require('simple-git');

(async () => {
  const git = simpleGit();
  await git.pull();
})();
