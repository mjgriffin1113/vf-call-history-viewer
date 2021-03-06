# Call History Viewer App

Application can be found [here](http://vf-vanity-num-generator.s3-website-us-east-1.amazonaws.com).

This application shows the 5 most recent call records from the vanity number generator.\
It auto-refreshes every 10 seconds and relies on the call history lamba which it calls through the AWS API Gateway at:

[https://lajsxhrwbj.execute-api.us-east-1.amazonaws.com/Staging/call-history](https://lajsxhrwbj.execute-api.us-east-1.amazonaws.com/Staging/call-history)

## Overview

(arrow directions show the flow of response data)

![ArchitectureDiagram](public/callHistoryArchDiagram.png)

## Deploy Steps

App will automatically build and deploy (using Github workflows) when a branch is approved and merged into Master

## Manual Deploy Steps

run `yarn install` if needed

Provision the s3 bucket\
Build your app\
Upload the build folder

```
yarn run provision
yarn run deploy
```

You may need to:

- update the `provision` and `upload` commands in package.json file to change the bucket name to something unique.
- sign into the aws cli with an admin IAM user (`aws configure`)
- update CallHistory.js fetch URL to point to the correct API (the one in the account with the Connect instance you are monitoring)


## Verify Deploy

Ensure that the files were uploaded to s3

Find the bucket in the s3 service, go to Properties tab and find the website URL at the bottom under 'Bucket website endpoint'

## Running the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
