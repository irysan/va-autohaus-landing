# Development Guide

This document outlines the development setup and best practices for the V&A Autohaus project.

## 🛠️ Development Tools

### Code Quality Tools
- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Husky** - Git hooks
- **lint-staged** - Pre-commit linting
- **Commitlint** - Commit message validation

## 📝 Available Scripts

```bash
# Development
npm start              # Start development server
npm run build          # Build for production
npm test              # Run tests

# Code Quality
npm run lint          # Run ESLint
npm run lint:fix      # Fix ESLint issues automatically
npm run format        # Format code with Prettier
npm run format:check  # Check if code is formatted
npm run type-check    # Run TypeScript type checking
npm run validate      # Run all checks (type-check + lint + format)
```

## 🔧 Pre-commit Hooks

The project uses Husky to run pre-commit hooks that ensure code quality:

1. **lint-staged** - Runs on staged files before commit:
   - ESLint with auto-fix
   - Prettier formatting
   
2. **commitlint** - Validates commit messages follow conventional format

## 📋 Commit Message Format

We use [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>: <description>

[optional body]

[optional footer]
```

### Types:
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `build` - Build system changes
- `ci` - CI configuration changes
- `chore` - Other changes

### Examples:
```bash
feat: add hamburger menu for mobile navigation
fix: resolve language toggle button styling issue
docs: update development setup instructions
style: format code with prettier
refactor: simplify hero component structure
```

## 🎨 Code Style

### ESLint Rules
- Prettier integration for formatting
- React best practices
- TypeScript strict rules
- Accessibility checks
- Import organization

### Prettier Configuration
- Single quotes
- 2-space indentation
- Semicolons
- Trailing commas (ES5)
- Line width: 80 characters

## 🔍 VS Code Setup

Install recommended extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

The project includes VS Code settings for:
- Format on save
- Auto-fix ESLint issues
- Tailwind CSS support

## 🚀 Development Workflow

1. **Start development server**:
   ```bash
   npm start
   ```

2. **Make changes** following the code style

3. **Before committing**:
   ```bash
   npm run validate  # Check everything is good
   ```

4. **Commit with conventional format**:
   ```bash
   git commit -m "feat: add new feature"
   ```

5. **Pre-commit hooks will run automatically** and fix/validate code

## 🧪 Testing

```bash
npm test              # Run tests
npm test -- --watch  # Run tests in watch mode
npm test -- --coverage  # Run tests with coverage
```

## 🏗️ Build

```bash
npm run build         # Production build
npm run type-check    # TypeScript compilation check
```

## 📦 Dependencies

### Production Dependencies
- React 18
- TypeScript
- react-i18next (internationalization)
- Tailwind CSS

### Development Dependencies
- ESLint + plugins
- Prettier
- Husky
- lint-staged
- Commitlint
- TypeScript types

## 🔧 Configuration Files

- `.eslintrc.json` - ESLint configuration
- `.prettierrc.js` - Prettier configuration
- `commitlint.config.js` - Commit message rules
- `tsconfig.json` - TypeScript configuration
- `.husky/` - Git hooks
- `.vscode/` - VS Code settings
