
const mongoose = require('mongoose');

const mongourl = "mongodb+srv://abhisheksh1412:%40Hardikhimanshi1412@cluster0.enpx7eb.mongodb.net/BistroBite?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongourl);
        console.log("Connection established");

        // Get the database
        const db = mongoose.connection.db;

        // Get the collections
        const foodDataCollection = db.collection("food_Data");
        const foodCategoriesCollection = db.collection("food_items");

        // Fetch data
        const foodData = await foodDataCollection.find({}).toArray();
        const foodCategories = await foodCategoriesCollection.find({}).toArray();

        // Assign data to global variables
        global.food_Data = foodData;
        global.food_Categories = foodCategories;

        if (foodData.length === 0) {
            console.log("No data found in the food_Data collection.");
        }
        if (foodCategories.length === 0) {
            console.log("No data found in the food_items collection.");
        }

    } catch (err) {
        console.error("Error connecting to MongoDB or fetching data:", err);
    }
};

module.exports = mongoDB;
















// const mongoose = require('mongoose');

// const mongourl = "mongodb+srv://abhisheksh1412:%40Hardikhimanshi1412@cluster0.enpx7eb.mongodb.net/BistroBite?retryWrites=true&w=majority&appName=Cluster0";

// const mongoDB = async () => {
//     try {
//         // Connect to MongoDB
//         await mongoose.connect(mongourl);
//         console.log("Connection established");

//         // Get the database
//         const db = mongoose.connection.db;

//         // Get the collection
//         const fetched_data = db.collection("food_Data");

//         // Fetch and print data
//         const data = await fetched_data.find({}).toArray(async function(err, data){
//             const foodCategory=await mongoose.connection.db("food_items");
//             foodCategory.find({}).toArray(function(err,catData){
//                 if(err) console.log(err);
//                 global.food_Data=data;
//                 global.food_Categories=catData;
//             })
//         });
//         if (data.length === 0) {
//             console.log("No data found in the collection.");
//         } else {
//             // console.log("Fetched data:", data);
//             global.food_Data=data;
//         }
//     } catch (err) {
//         console.error("Error connecting to MongoDB or fetching data:", err);
//     } 
// };

// module.exports=mongoDB;






 





// // const mongoose = require('mongoose');

// // const mongourl = "mongodb+srv://abhisheksh1412:%40Hardikhimanshi1412@cluster0.enpx7eb.mongodb.net/BistroBite?retryWrites=true&w=majority&appName=Cluster0";

// // mongoose.connect(mongourl)
// //     .then(() => {console.log("Connection established")
// //         const fetched_data=  mongoose.connection.db.collection("food_Data");
// //         fetched_data.find({}).toArray(function(err,data){
// //             if(err) console.log(err);
// //             else console.log(data);
// //         })
// //     }
// //           )
// //     .catch(err => console.error("Error connecting to MongoDB:", err.message));
