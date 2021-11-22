import firebase from "@firebase/app-compat";

import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('YKB65y0mLhSsZTxLVlpm').collection('cartItems').doc('K2YiSLuJ2wQg8wamtXz1')
firestore.doc('/users/YKB65y0mLhSsZTxLVlpm/cartItem/K2YiSLuJ2wQg8wamtXz1');
firestore.collection('/users/YKB65y0mLhSsZTxLVlpm/cartItem');