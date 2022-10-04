import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCAdY7i2AHj77jnICMH7gSSAgOIBy2R-Kg",
    authDomain: "drawing-canvas-naya.firebaseapp.com",
    projectId: "drawing-canvas-naya",
    storageBucket: "drawing-canvas-naya.appspot.com",
    messagingSenderId: "989727401593",
    appId: "1:989727401593:web:e6c65e223e2718792cd6a8",
    measurementId: "G-551TWT8KWZ"
})

export const auth = app.auth()
export default app
