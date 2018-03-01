import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAuhIuWXE0O4VgpOEoSnYpdPYT4c1X8dSA",
    authDomain: "expensify-fe155.firebaseapp.com",
    databaseURL: "https://expensify-fe155.firebaseio.com",
    projectId: "expensify-fe155",
    storageBucket: "expensify-fe155.appspot.com",
    messagingSenderId: "125995477122"
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