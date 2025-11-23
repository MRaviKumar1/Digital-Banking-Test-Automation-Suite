# Test Plan - Digital Banking Automation Suite

## Scope
UI + API automation for core banking flows: login, dashboard, fund transfer, transactions.

## Objectives
- Verify critical user journeys
- Provide automated regression coverage
- Validate API contracts & basic performance

## Environment
- BASE_URL (env variable) points to the AUT (default: https://demo-bank.example.com)

## Test Types
- Smoke tests (API + UI)
- Functional tests (UI flows)
- Negative tests
- Regression suite

## CI
Run full suite on every push to `main`. Failures should create an issue template for triage.

## Reporting
Playwright HTML report saved to `reports/playwright-report`.
