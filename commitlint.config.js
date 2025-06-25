module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Type enum - allowed commit types
    'type-enum': [
      2,
      'always',
      [
        'feat',     // A new feature
        'fix',      // A bug fix
        'docs',     // Documentation only changes
        'style',    // Changes that do not affect the meaning of the code
        'refactor', // A code change that neither fixes a bug nor adds a feature
        'perf',     // A code change that improves performance
        'test',     // Adding missing tests or correcting existing tests
        'build',    // Changes that affect the build system or external dependencies
        'ci',       // Changes to our CI configuration files and scripts
        'chore',    // Other changes that don't modify src or test files
        'revert',   // Reverts a previous commit
      ],
    ],
    
    // Subject case - enforce lowercase
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    
    // Subject length
    'subject-max-length': [2, 'always', 100],
    'subject-min-length': [2, 'always', 10],
    
    // Subject empty
    'subject-empty': [2, 'never'],
    
    // Type case
    'type-case': [2, 'always', 'lower-case'],
    
    // Type empty
    'type-empty': [2, 'never'],
    
    // Header max length
    'header-max-length': [2, 'always', 120],
    
    // Body leading blank
    'body-leading-blank': [1, 'always'],
    
    // Footer leading blank
    'footer-leading-blank': [1, 'always'],
  },
};
