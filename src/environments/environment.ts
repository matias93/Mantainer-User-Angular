// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUsers: 'http://localhost:3000',
  firebaseConfig : {
    apiKey: "AIzaSyD6mcsQNTtLF-XEgONSaSQxeW7RHX1d4g4",
    authDomain: "maitainer-user.firebaseapp.com",
    databaseURL: "https://maitainer-user-default-rtdb.firebaseio.com",
    projectId: "maitainer-user",
    storageBucket: "maitainer-user.appspot.com",
    messagingSenderId: "839374310189",
    appId: "1:839374310189:web:c6e8106ab0416ad78161a4",
    measurementId: "G-LSQV1EH1PL"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
