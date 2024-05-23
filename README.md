# Project Setup

## Prerequisites

- MongoDB (make sure the MongoDB daemon is running)
- Yarn (package manager)
- Node.js (v12 or later)


## Backend Setup

1. Navigate to the backend directory:
  `cd path/mh-asgnmnt/be`

2. Install backend dependencies:
  `yarn`

3. Start the backend server:
  `yarn start`

## Frontend Setup

1. Open a new terminal window/tab.

2. Navigate to the frontend directory:
  `cd path/mh-asgnmnt/fe`

3. Install frontend dependencies:
  `yarn`

4. Start the development server:
  `yarn dev`

## Adding Test Data

To add sufficient data for testing, follow these steps:

1. Stop the backend process by pressing `Ctrl+C` in the terminal where it's running.

2. Run the script to seed the database:
  `node "path/to/mh-asgnmnt/be/script.js"`
  Make sure to replace `"path/to/mh-asgnmnt/be/script.js"` with the actual path to the `script.js` file in your project.

3. After the script completes, restart the backend server by running `yarn start` again.

Note: If you encounter any issues or have specific requirements, please refer to the project's documentation or contact the project maintainers for further assistance.