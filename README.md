# WG Business - Timesheet Management System PoC
This is a project to provide Proof of Concept (PoC) for a timesheet management system created using Next.js. The PoC aims to demonstrate the core functionalities of a web-based timesheet management system, including timesheet entry, submission, and client approval notification.

## Live Demo
https://wg-timesheet-poc-kamilkahar90.vercel.app/


## To clone the repo and run the project manually.
### 1) Installation
Before running the PoC, you need to have Node.js and npm installed on your local machine.
First, install the dependencies by cloning the repo and running one of the following commands, depending on your current setup:
```bash
git clone https://github.com/kamilkahar90/WG-timesheet-poc.git
cd WG-timesheet-poc
npm install # or yarn install
```

### 2) Set API Token

API Token has been provided in .env.example

```bash
cp .env.example .env
```

### 3) Run the local server

To view the app in a browser, you'll need to run the local development server:

```bash
npm run dev # or yarn dev
```

Congratulations! Your starter project is now live: [http://localhost:3000](http://localhost:3000).

## Deployment
The PoC is deployed on Vercel and can be accessed at https://wg-timesheet-poc-kamilkahar90.vercel.app/.

## Acknowledgments
This PoC uses Next.js for frontend development.
React-Bootstrap is used for styling components.

## Additional Notes
This is a basic PoC to demonstrate the timesheet management system's functionalities. Further development may include database integration, additional security measures, and more advanced features based on specific requirements.
