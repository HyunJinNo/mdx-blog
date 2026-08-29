import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-case": [2, "always", "lower-case"],
    "scope-empty": [2, "never"],
    "scope-enum": [2, "always", ["main"]],
    "scope-max-length": [2, "always", Infinity],
    "scope-min-length": [2, "always", 0],
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "subject-max-length": [2, "always", Infinity],
    "subject-min-length": [2, "always", 0],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
    "type-max-length": [2, "always", Infinity],
    "type-min-length": [2, "always", 0],
  },
};

export default Configuration;
