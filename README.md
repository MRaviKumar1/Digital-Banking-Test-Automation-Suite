# Digital Banking Test Automation Suite

**Stack:** Playwright + JavaScript (Node.js)  
**Scope:** UI + API automation for a sample digital-banking app, with CI/CD (GitHub Actions), reports, and test plans.

## Contents
- `tests/` — Playwright UI & API tests
- `playwright.config.js` — Playwright configuration
- `package.json` — npm scripts and dependencies
- `.github/workflows/ci.yml` — GitHub Actions pipeline
- `test-plan.md` — Test plan and approach
- `test-cases.md` — Sample test cases
- `data/` — test data files
- `utils/` — helper utilities
- `reports/` — generated reports (empty)

## Quick start (local)
1. Install Node.js (16+ recommended)
2. Clone repo
3. Install deps:
```bash
npm ci
npx playwright install
```
4. Run tests (all):
```bash
npm test
```
5. Run API tests only:
```bash
npm run test:api
```
6. Run a single spec:
```bash
npx playwright test tests/login.spec.js
```

## CI
This repository includes a GitHub Actions workflow `.github/workflows/ci.yml` that:
- Installs Node.js
- Installs Playwright browsers
- Runs the test suite
- Uploads test artifacts

