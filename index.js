const types = [
  { type: "feat", section: ":rocket: Features" },
  { type: "fix", section: ":beetle: Fixes" },
  { type: "perf", section: ":racehorse: Performance" },
  { type: "build", section: ":wrench: Tools" }
];

const commitGroupsSort = (a, b) =>
  types.findIndex(type => a.title.includes(type.section)) -
  types.findIndex(type => b.title.includes(type.section));

module.exports = {
  preset: "conventionalcommits",
  plugins: [
    [
      // Analyze and select release type based on commits.
      "@semantic-release/commit-analyzer",
      // Add `build` commits to release pipeline.
      { releaseRules: [{ type: "build", release: "patch" }] }
    ],
    [
      // Generate release notes based on commits.
      "@semantic-release/release-notes-generator",
      // Sort commit groups according to our types priority.
      { presetConfig: { types }, writerOpts: { commitGroupsSort } }
    ],
    // Write new version to package.json and publish to npm.
    // If package is private then release will be skiped.
    "@semantic-release/npm",
    // Add package.json to git and push commit with new version.
    "@semantic-release/git",
    // Publish release to github.
    "@semantic-release/github"
  ]
};
