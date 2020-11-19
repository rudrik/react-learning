import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBJ6vRnlDgB6Qr48ZnBUqSPos9j23G5vi0",
    authDomain: "expensify-61369.firebaseapp.com",
    databaseURL: "https://expensify-61369.firebaseio.com",
    projectId: "expensify-61369",
    storageBucket: "expensify-61369.appspot.com",
    messagingSenderId: "1033749541531",
    appId: "1:1033749541531:web:9645510543179245c1cc3e"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// On always takes a second argument for listening to the changes of the database.
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});


// Listen to the changes
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

//List out the expenses and create the expenses that we can use
// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// }).catch((e) => {

// });



database.ref('expenses').push({
    description: 'Rent Value',
    note: 'house Rent',
    amount: 2300,
    createdAt: 1000
});


// database.ref('notes/-MMQ55tomQOTCpOH428g').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React, React native, Angular'
// });

// const firebaseNotes = {
//     notes: {
//         12: {
//             title: 'First Note!',
//             body: 'This is my note'
//         },
//         13: {
//             title: 'Second Note!',
//             body: 'This is my second note'
//         }
//     }
// }

// const notes = [{
//     id: '12',
//     title: 'First Note!',
//     body: 'This is my note'
// }, {
//     id: '7e123',
//     title: 'Second Note!',
//     body: 'This is my second note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();

//     console.log(`${val.name} is ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('Error while fetching data', e);
// });


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(18);
// }, 3500);



// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(28);
// }, 10500);

// database.ref('location/city').
//     once('value').
//     then((snapshot) => {
//         console.log(snapshot.val());
//     }).
//     catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Rudrik Patel',
//     age: 29,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Ahmedabad',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((error) => {
//     console.log('error: ', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {

// }).catch(() => {

// });

// database.ref('isSingle').set(null);
//---------------------------- OR -------------------------//
// database.ref('age1').remove().then(() => {
//     console.log('Data was removed');
// }).catch((e) => {
//     console.log('Data was not removed', e);
// });