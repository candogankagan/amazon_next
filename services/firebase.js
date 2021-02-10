import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyBYBIDyHJeayXvqDcyXoYFy7txcZq59h38',
    authDomain: 'next-f0454.firebaseapp.com',
    projectId: 'next-f0454',
    storageBucket: 'next-f0454.appspot.com',
    messagingSenderId: '580246126071',
    appId: '1:580246126071:web:c9d450b3201932c6a902f2',
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
