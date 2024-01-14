module.exports = function override(config, env) {
  console.log("override");
  let loaders = config.resolve;
  loaders.fallback = {
    // existing configs...
    os: require.resolve("os-browserify/browser"),
    fs: false,
    child_process: false,
  };

  return config;
};
