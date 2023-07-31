/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "clover"],
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.ts"],
  moduleFileExtensions: ["ts", "js", "json"],
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  modulePathIgnorePatterns: ["/node_modules/", "/dist/"],
  transform: {
    "^.+\\.ts?$": ["ts-jest", { tsconfig: "tsconfig.json" }],
  },
};
