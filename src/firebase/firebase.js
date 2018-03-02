import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export {
	firebase,
	database as default
}

/*
database.ref().set({
	name: 'John Moyer',
	age: 34,
	isSingle: false,
	location: {
		city: 'Washington',
		state: 'DC'
	}
}).then(() => {
	console.log('Date is saved');
}).catch((e) => {
	console.log('This failed.', e);
});

//database.ref('age').set('Some data');
database.ref('attributes').set({
	height: 70,
	weight: 185
});

database.ref('isSingle').remove().then(() => {
	console.log('Deleted');
}).catch((e) => {
	console.log('Unable to delete', e);
});
*/