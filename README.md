# Test App

Built on ionic v6 and Capacitor

###### Features

- User can login (validation and authentication)
- User can see a list of results coming from an API
- User can see details of each item from the fetched list


## -

###### How to run the project locally in your computer browser

- Ensure you have the latest version of NODE installed on your system
- If you do not have ionic, please install by going to your terminal and running `npm install -g @ionic/cli`
- Clone the project.
- Once cloned, go into the project folder and run `npm install`
- Run the app. run `ionic serve`. It should open automatically on your browser
- Using the browser devtools, change screen to be a mobile screen size.

###### How to run the project on your android device

- Ensure you have Android Studio installed on your system
- To begin the process of debugging, run `ionic cap sync`, then run `ionic capacitor run android --livereload --external`. This will allow for changes to reflect on the app automatically while working
- To run it, the above step should have opened Android Studio. Use the **RUN** button in Android studio to run it
- While running, you can use Android Studio to read the logs of what's going on in the app. I use Google Chrome. In Google Chrome, type `chrome://inspect` in the address bar and press enter
- You make want to build the app to send to someone, use the **BUILD** button in Android studio to build the app
- When you choose to build, check your capacitor.config.json file, ensure that there is no object holding a server ip address.

###### Programming language

- Javascript(Ionic Framework)
- Typescript
- HTML5
- CSS3

## Author

- [Duziem Ugoji](https://www.linkedin.com/in/duziem-ugoji/)
