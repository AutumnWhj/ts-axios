module.exports = {
  "transform": {
    ".(ts|tsx)": "ts-jest"
  },
  "testEnvironment": "jsdom",
  "testRegex": "/__tests__/.*\\.(test|spec)\\.(ts)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 90,
      "functions": 95,
      "lines": 95,
      "statements": 95
    }
  },
  "collectCoverageFrom": [
    "src/*.{js,ts}",
    "src/**/*.{js,ts}"
  ],
  "setupFilesAfterEnv": [
    "<rootDir>/src/__tests__/boot.ts"
  ]
}
