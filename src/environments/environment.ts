// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // configuración de firebases(conexión de nuestra aplicacion con firebases)
  firebase: {
    apiKey: "AIzaSyCgAneBeyvb2V6db9F1bjswXdXXsdIRFvM",
    authDomain: "social-network-angular-2fcbb.firebaseapp.com",
    databaseURL: "https://social-network-angular-2fcbb.firebaseio.com",
    projectId: "social-network-angular-2fcbb",
    storageBucket: "social-network-angular-2fcbb.appspot.com",
    messagingSenderId: "27563747470"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
