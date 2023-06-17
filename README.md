# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It is using NPM and Firebase. 

Check if the terminal is running node, zsh or bit.
If you encounter an area with bit commands do not work, run:
* export PATH=$HOME/bin:$PATH
Then either run:
* bit start
OR
* npx @teambit/bvm install 

## Available Scripts
In the project directory, you can run these common npm commands:
* npm i -- you know what it does!
* npm start -- runs app in dev mode on local host
* npm run build -- makes a build of the app for deployment
* firebase deploy -- deploys the latest build

Bit commands include:
* bit status -- check status; shows modified and new components
* bit tag "$message" -- locks changes to components; not sure why --all is deprecated or how to add messages.
Ex: bit tag timeline
* bit init -- makes workspace.json, .bitmap, hidden bit files
* bit start -- starts local dev server; see everything rendered in isolation; see dependencies and other info
* bit install -- installs dependencies
* bit compile -- ensure compilation is successful; not mandatory (auto runs)
* bit show $component (ex: ui/button) -- pulls table with details on the component

Bit add or remove files:
* bit add $location --main $file -- bit will automatically pick index file as main. if there is no index file you need to specify using the --main designation. Can also use --id $lowercasename to name the component.
ex: bit add src/components/timeline --main Timeline.js
* bit remove $component (ex: ui/my-welcome) -- removes and deletes component from local scope.
-- add --force if the component is modified
* bit remove $orgName.$scopename.$component --remote (ex: kingofthechill.guidancespace) -- removes and deletes component remotely. did not work?

For testing and deployment in future, may use following:
* npm test -- runs test runners. currently not applicable.
* npm run build -- makes a build of the app for deployment
* npm run eject -- does anyone use this? please dont
* bit test -- runs tests in isolation
* bit check-types -- validate type script types

## Learn More
To learn React, check out the [React documentation](https://reactjs.org/).

Even more scripts:
* npm view react version -- Please check you are on a late NPM version for security and compatability purposes