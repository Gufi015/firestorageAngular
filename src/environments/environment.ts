// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyD2Ks6vR1YEzRVBKnYZYjpT3DpMp6jFvYU",
    authDomain: "cloudstorage-fc8ce.firebaseapp.com",
    databaseURL: "https://cloudstorage-fc8ce.firebaseio.com",
    projectId: "cloudstorage-fc8ce",
    storageBucket: "cloudstorage-fc8ce.appspot.com",
    messagingSenderId: "309936913210",
    appId: "1:309936913210:web:36558ffe9d44ecf3"
  },
  //npm install firebase @angular/fire --save 1): npm install -g firebase-tools 2): firebase login 3):firebase init 4: firebase deploy
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
