import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FİREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FİREBASE_PROJECT_ID,
}

if (!firebase.apps.length) {
    try {
        firebase.initializeApp(firebaseConfig)
    } catch (err) {
        console.error('Firebase initialization error raised', err.stack)
    }
}

const auth = firebase.auth()

export { auth }
