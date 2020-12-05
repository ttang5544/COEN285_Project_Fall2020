

// custom FIrestore objects
// https://firebase.google.com/docs/firestore/manage-data/add-data#web_3
// define a FirestoreDataConverter function for the class ===================================

/*
  class City {
    constructor (name, state, country ) {
        this.name = name;
        this.state = state;
        this.country = country;
    }
    toString() {
        return this.name + ', ' + this.state + ', ' + this.country;
    }
  }

  =================================== // Firestore data converter
  var cityConverter = {
    toFirestore: function(city) {
        return {
            name: city.name,
            state: city.state,
            country: city.country
            }
    },
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new City(data.name, data.state, data.country)
    }
  }
*/


// call data converter with write operation ===================================

/*
  // Set with cityConverter
  db.collection("cities").doc("LA")
    .withConverter(cityConverter)
    .set(new City("Los Angeles", "CA", "USA"));
*/
