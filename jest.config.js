const buildConfig = () => {
  return {
    preset: '@codeplant-de/jest-config',
    testEnvironment: "jsdom",
  }
}

module.exports = buildConfig()
