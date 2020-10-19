import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA7MTnirQB7yv_Mg8NltMvRs7ad7hAAr30',
  authDomain: 'redesign-b5f89.firebaseapp.com',
  projectId: 'redesign-b5f89',
  appId: '1:602498934249:web:f98a4dad8c11aac6725778'
}
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('upvotes')

export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
