SwiftTranslator Automation Testing Suite (Singlish to Sinhala)
This repository includes an automated test suite for the SwiftTranslator web application. Playwright is utilized as the framework for the test suite to assess the accuracy, reliability, and UI behavior of the Singlish to Sinhala phonetic conversion.

 Project Overview
The main objective of this project is to recognize the system's limitations and weaknesses as part of the ITPM Assignment. The test suite includes the following test cases:

Positive Functional Tests (24 Cases): Evaluating scenarios where the system is functioning correctly by converting Singlish to accurate Sinhala Unicode.

Negative Functional Tests (10 Cases): Identifying scenarios where the system is not functioning correctly by failing to provide the accurate output for complex grammar rules, using special vowel signs like Pili, and mixing alphanumeric characters.

UI Testing: Evaluating the real-time behavior and UI element behavior, such as the "Clear" button.

Tech Stack
1.Framework: Playwright (Node.js)

2.Language: JavaScript

3.Test Runner: Playwright Test Runner

🚀 How to Run
To run the automation suite on your machine locally, follow these steps:

1. Prerequisites
The first prerequisite is to ensure that Node.js is installed on the system.

2. Clone the Repository
To clone the repository, open the terminal and run the following commands:
git clone https://github.com/chathu-02/ITPM-Assignment-Playwright.git
cd ITPM-Assignment-Playwright

3. Install Dependencies
To install the required dependencies and the Playwright browsers, run the following command:

npm install
npx playwright install

4. Execute Tests
To run all the test cases:
****npx playwright test***

5. Generate and View Reports
Once all the tests are executed, you can view the detailed HTML report to analyze the "Pass" and "Fail" status:

****npx playwright show-report***


 Interpretation of Results
The results obtained from the automation script can be interpreted as follows:

Positive Cases:
These test cases are expected to Pass (Green) as the system is able to handle standard Singlish phrases correctly.

Negative Cases:
These test cases are expected to Fail (Red) in the report. This is because the logic implemented is "Expected != Actual." This is done intentionally to demonstrate the bugs and limitations of the translator.
