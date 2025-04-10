const fs = require("fs");
const {join} = require("path");

module.exports = (() => {
  const pathToJson = require.resolve(join(__dirname, '../../../package.json'));
  try {
    const contents = fs.readFileSync(pathToJson, 'utf8');
    const {version} = JSON.parse(contents);
    console.log(`Current version: ${version}`);
    return version;
  } catch (e) {
    throw new Error(`Could not read lerna.json from ${pathToJson}`);
  }
})();
