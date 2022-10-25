const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@core": "src/core",
    "@features": "src/features",
    "@pages": "src/pages",
    "@components": "src/components",
    "@assets": "src/assets",
    "@const": "src/const",
  })(config);

  return config;
};
