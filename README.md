![Playwright Tests](https://github.com/hetu023/timesheet-playwright-tests/actions/workflows/playwright.yml/badge.svg)

# Playwright Page Object Model (POM)

## Project Structure
```
playwright-pom/
├── pages/
│   ├── BasePage.js       # Base class with common methods
│   └── LoginPage.js      # Login page object
├── tests/
│   └── login.spec.js     # Example test file
├── playwright.config.js  # Playwright configuration
└── package.json
```

## Setup
```bash
npm install
npx playwright install
```

## Run Tests
```bash
npm test                  # Run all tests
npm run test:headed       # Run with browser visible
npm run test:ui           # Run in UI mode
```

## Key Features
- Clean architecture with BasePage inheritance
- Locators defined in constructor
- Reusable action methods
- Base URL configured in playwright.config.js
- ES6 modules
- Scalable structure for adding more pages

## Adding New Pages
1. Create new page class in `pages/` folder
2. Extend BasePage
3. Define locators in constructor
4. Create action methods
5. Export the class
