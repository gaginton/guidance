# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:
* npm i -- you know what it does!
* npm start -- runs app in dev mode on http://localhost:3000
* npm test -- runs test runners. currently not applicable.
* npm run build -- makes a build of the app for deployment
* npm run eject -- does anyone use this? please dont
* firebase deploy -- deploys the latest build

But I'm using Bit now!
* bit status -- check status; shows modified and new components
* bit tag "$message" -- locks changes to components
* bit init -- makes workspace.json, .bitmap, hidden bit files
* bit start -- starts local dev server; see everything rendered in isolation; see dependencies and other info
* bit install -- installs dependencies
* bit compile -- ensure compilation is successful; not mandatory (auto runs)
* bit test -- runs tests in isolation
* bit check-types -- validate type script types
* bit show $component (ex: ui/button) -- pulls table with details on the component
* bit remove $component (ex: ui/my-welcome) -- removes and deletes component from local scope.
-- add --force if the component is modified
* bit remove $orgName.$scopename.$component --remote (ex: kingofthechill.guidancespace) -- removes and deletes component remotely. did not work?

Need to fix error. Keep re-running:
* export PATH=$HOME/bin:$PATH
* npx @teambit/bvm install 


Ex: Adding component
bit add

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

### Deployment
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
