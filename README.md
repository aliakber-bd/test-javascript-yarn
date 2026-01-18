# Test JavaScript Project (YARN)

Tests component locator support for YARN package manager.

## Vulnerable Dependencies
- `lodash 4.17.11` - Prototype pollution vulnerabilities
- `axios 0.18.0` - Known security issues
- `express 4.16.0` - Old version with vulnerabilities
- `minimist 1.2.0` - Prototype pollution

## Setup
```bash
yarn install
```

## Expected Behavior
When Blackduck Detect runs:
1. Detects YARN package manager
2. Finds vulnerable components in package.json/yarn.lock
3. Component locator should process (not skip) YARN manager
4. Locates components in package.json file

## Note
After running `yarn install`, yarn.lock will be created which Detect will also analyze.
