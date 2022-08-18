const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/fruitdb', {useUnifiedTopology: true ,useNewUrlParser: true});
//creating new schema (scheme is kind of layout)
const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String
});
//we can also set vialidation in fruit scheme check on mongoose documentation to learn more 
//example of vlidation
//https://mongoosejs.com/docs/validation.html#validation

// const fruitSchema = new mongoose.Schema ({
//     name: {
//         type: String,
//         required: true
//       },
//     rating: Number,
//     review: String
// });

//creating a model and setting up  collection name called fruit which will stucture like fruitscheme(telling fruit will structure like fruit scheme)
const Fruit = mongoose.model('fruit', fruitSchema);
const fruitt = new Fruit({
    name: "mango",
    rating: 7,
    review: "gandu fruit"
});
// it will save document fruitt into a fruit collection and fruit colloection will save into fruit db
// fruitt.save();



//mongoose will do collections singular name to a pulral form(fruit will change into fruits)


// new people dbs

const personschema = new mongoose.Schema({
    name: String,
    age: Number,
    // creating favourite food to append fruit scheme in it
    favouriteFood: fruitSchema
})
const Person = mongoose.model("Person", personschema)
const person = new Person({
    name: "Amy",
    age: 34
})

//person.save()


//adding more fruits item

// const kiwi =new Fruit({
//     name:"kiwi",
//     rating:7,
//     review:"use to vomit whenever see it"
// });
//
// const orange=new Fruit({
//     name: "orange",
//     rating: 9,
//     review: "yay good "
// })
//
// const banana=new Fruit({
//     name: "banana",
//     rating: 10,
//     review: "the best"
// })
//
// Fruit.insertMany([kiwi,orange,banana], function(err){
//     if (err){
//         console.log("error");
//     }else{
//         console.log("success");
//     }
// });


// below we are using db.fruits.find() here only that will appear in consolelog we don't need to go mong shell 


// Fruit.find(function(err, fruits){
//     if (err){
//         console.log(err);

//     }else{
//         console.log(fruits)
//     };
// });


//now only chosing name of fruit 
// as it is an array so we can use for each loop and choose
//frt we can write anything

 Fruit.find(function(err, fruits){
     if (err){
         console.log(err);

     }else{
         fruits.forEach(frt => {
             console.log(frt.name);
         });
     };
 });

 // for upadte check Api then update to know more
//  Fruit.updateOne({_id: "5fe8c31f7ab6ac2c789629ea"},{name: "mogo"},function(err){
//      if(err){
//          console.log(err);
//      }else{
//          console.log("successfully updated");
//      }
//  })

// to delete many
// Fruit.deleteOne({_id : "5fe8c31f7ab6ac2c789629ea"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("suceessfully dleted one");
//     }
// })

// dleteing many
// Person.deleteMany({name: "john"},function (err) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("sucessfully deleted");
//     };
    
// });


// creating new people file to apend fruit scheme in it

// creating new fruit to append
// const Apple = new Fruit({
//     name: "apple",
//     rating: 8,
//     review: "decent food"


// })
// const johnPerson = new Person({
//     name: "john",
//     age: 34,
//     favouriteFood: Apple
// })

// johnPerson.save()

//now appending in Amy through update one
const pineapple = new Fruit({
    name: "pineapple",
    rating: 4,
    review: "bad"
})
//pineapple.save()

person.updateOne({name: "Amy"},{favouriteFood: pineapple},function(err){
    if (err) {
        console.log(err);
    }else{
        console.log("succcessfully update");
    };
});
