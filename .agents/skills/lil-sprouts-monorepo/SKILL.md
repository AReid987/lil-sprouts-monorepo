```markdown
# lil-sprouts-monorepo Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `lil-sprouts-monorepo` repository. The codebase is written in TypeScript and does not use a specific framework. It follows clear, conventional commit patterns and emphasizes consistent code style, including file naming, import/export practices, and test organization.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `userProfile.ts`, `orderService.test.ts`

### Import Style
- Use **relative imports** for referencing modules within the codebase.
  - Example:
    ```typescript
    import { getUser } from './userService';
    ```

### Export Style
- Use **named exports** for all modules.
  - Example:
    ```typescript
    // userService.ts
    export function getUser(id: string) { ... }
    export const USER_ROLE = 'admin';
    ```

### Commit Messages
- Follow **conventional commit** format.
- Use the `chore` prefix for maintenance and non-feature changes.
  - Example:  
    ```
    chore: update dependencies to latest versions
    ```

## Workflows

_No automated workflows detected in this repository._

## Testing Patterns

- Test files follow the `*.test.*` naming convention.
  - Example: `userService.test.ts`
- The testing framework is **unknown**, but tests are colocated with source files or in the same directory.
- Example test file structure:
  ```typescript
  // userService.test.ts
  import { getUser } from './userService';

  describe('getUser', () => {
    it('returns user data for a valid ID', () => {
      // test implementation
    });
  });
  ```

## Commands

| Command | Purpose |
|---------|---------|
| /commit-chore | Create a conventional commit with the `chore` prefix |
| /run-tests | Run all test files matching `*.test.*` |
| /format-code | Format code according to repository conventions |

```
