# Cash Counter Application

## Overview
This is an Angular application developed for the Bland Group software engineering assessment. The application allows users to input and count bills and coins from a cash box to ensure that the physical money matches the expected amount provided by the system.

## Features
- **Real-time Calculation:** Automatically updates the entered total and difference as users input values.
- **Two Input Modes:** Users can enter either the number of bills/coins or their monetary value.
- **Target Amount Display:** Shows the expected cash amount.
- **Submit Functionality:** Outputs a structured JSON object to the console representing the data to be sent to an API.
- **Unit Testing:** Ensures correct calculations and submit button functionality.

## Technologies Used
- **Framework:** Angular v19.1.0
- **Language:** TypeScript v5.7.2
- **Testing:** Jasmine v5.5.0 & Karma v6.4.0
- **Version Control:** Git & GitHub

## Dependencies
```
@angular/animations: ^19.1.0
@angular/common: ^19.1.0
@angular/compiler: ^19.1.0
@angular/core: ^19.1.0
@angular/forms: ^19.1.0
@angular/platform-browser: ^19.1.0
@angular/platform-browser-dynamic: ^19.1.0
@angular/router: ^19.1.0
rxjs: ~7.8.0
tslib: ^2.3.0
zone.js: ~0.15.0
```

## Dev Dependencies
```
@angular-devkit/build-angular: ^19.1.6
@angular/cli: ^19.1.6
@angular/compiler-cli: ^19.1.0
@types/jasmine: ~5.1.0
jasmine-core: ~5.5.0
karma: ~6.4.0
karma-chrome-launcher: ~3.2.0
karma-coverage: ~2.2.0
karma-jasmine: ~5.1.0
karma-jasmine-html-reporter: ~2.1.0
typescript: ~5.7.2
```

## Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/LiverpoolOwen/Bland-Assessment.git
   cd cash-counter
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the application:**
   ```sh
   ng serve
   ```
   Open `http://localhost:4200/` in a browser.

4. **Run tests:**
   ```sh
   ng test
   ```

## Project Structure
```
 cash-counter/
 ├── src/
 │   ├── app/
 │   │   ├── cash-counter/
 │   │   │   ├── cash-counter.component.ts
 │   │   │   ├── cash-counter.component.html
 │   │   │   ├── cash-counter.component.css
 │   │   ├── app.module.ts
 │   ├── assets/
 │   ├── environments/
 ├── angular.json
 ├── package.json
 ├── README.md
```

## JSON Output Example
When submitting the form, the following JSON object will be logged to the console:
```json
{
  "targetAmount": 500,
  "enteredAmount": 480,
  "difference": 20,
  "denominations": [
    { "denomination": "100", "count": 3, "total": 300 },
    { "denomination": "50", "count": 2, "total": 100 },
    { "denomination": "20", "count": 2, "total": 40 },
    { "denomination": "10", "count": 1, "total": 10 },
    { "denomination": "5", "count": 0, "total": 0 }
  ]
}
```

## Git Commit Guidelines
Follow this format for commit messages:
```
TASK-ID: Short description

  - Commit detail 1.
  - Commit detail 2.
  - Commit detail X.
```
Example:
```
TASK-002: Implemented real-time calculation feature

  - Added two-way data binding for user inputs.
  - Implemented dynamic total calculation.
  - Updated UI to reflect entered values in real-time.
```
