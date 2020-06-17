# Poll App. Hatchways Project

### How to Add the Poll Button anywhere

1. import PollModal from "<components>/polls/PollModal";
2. Put <PollModal view="edit or add"> anywhere you want to display the button

### User Friends Logic

- Any _follower_ of the current/target user is considered a friend
  - Friend information (suggestions, followers, and followings) can be found through `FriendsContext`

## Instructions

### React

A component can only be imported into another if:

- It is inside the components folder of the parent, or
- It is inside the src/components folder

All multi-purpose React components should be placed inside src/components.

### Material-UI

Material-UI should be styled from within theme.js using overrides and specific styling should be made using the makeStyles hook. This project is not using any StyledComponents.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
