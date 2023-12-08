import mongoose from "mongoose";
import Restaurant from "./models/restaurant.js";

const restaurantsList = [
  {
    name: "Sushi Delight",
    cuisine: "Japanese",
    address: {
      building: "123",
      street: "Sushi Street",
      zipcode: "10001",
    },
  },
  {
    name: "Spice Haven",
    cuisine: "Mexican",
    address: {
      building: "456",
      street: "Spice Avenue",
      zipcode: "10002",
    },
  },
  {
    name: "Burger Binge",
    cuisine: "American",
    address: {
      building: "789",
      street: "Burger Boulevard",
      zipcode: "10003",
    },
  },
  {
    name: "Tandoor Grill",
    cuisine: "Indian",
    address: {
      building: "101",
      street: "Tandoor Lane",
      zipcode: "10004",
    },
  },
  {
    name: "Pasta Palace",
    cuisine: "Italian",
    address: {
      building: "202",
      street: "Pasta Place",
      zipcode: "10005",
    },
  },
  {
    name: "Cheese and Co.",
    cuisine: "French",
    address: {
      building: "303",
      street: "Cheese Street",
      zipcode: "10005",
    },
  },
  {
    name: "Wok World",
    cuisine: "Chinese",
    address: {
      building: "404",
      street: "Wok Avenue",
      zipcode: "10006",
    },
  },
  {
    name: "Mediterranean Delight",
    cuisine: "Mediterranean",
    address: {
      building: "505",
      street: "Mediterranean Street",
      zipcode: "10007",
    },
  },
  {
    name: "Thai Essence",
    cuisine: "Thai",
    address: {
      building: "606",
      street: "Thai Terrace",
      zipcode: "10008",
    },
  },
  {
    name: "Sizzling Sizzlers",
    cuisine: "Steakhouse",
    address: {
      building: "707",
      street: "Sizzle Street",
      zipcode: "10009",
    },
  },
  {
    name: "Veggie Delight",
    cuisine: "Vegetarian",
    address: {
      building: "808",
      street: "Veggie Avenue",
      zipcode: "10009",
    },
  },
  {
    name: "Seafood Sensation",
    cuisine: "Seafood",
    address: {
      building: "909",
      street: "Seafood Street",
      zipcode: "10010",
    },
  },
  {
    name: "Barbecue Bliss",
    cuisine: "Barbecue",
    address: {
      building: "1010",
      street: "Barbecue Boulevard",
      zipcode: "10011",
    },
  },
  {
    name: "Asian Aroma",
    cuisine: "Asian",
    address: {
      building: "1111",
      street: "Asian Avenue",
      zipcode: "10011",
    },
  },
  {
    name: "Pizza Paradise",
    cuisine: "Pizza",
    address: {
      building: "1212",
      street: "Pizza Place",
      zipcode: "10012",
    },
  },
  {
    name: "Vegetarian Villa",
    cuisine: "Vegetarian",
    address: {
      building: "1313",
      street: "Vegetarian Village",
      zipcode: "10013",
    },
  },
  {
    name: "French Fusion",
    cuisine: "French",
    address: {
      building: "1414",
      street: "French Fusion Street",
      zipcode: "10014",
    },
  },
  {
    name: "Mexican Fiesta",
    cuisine: "Mexican",
    address: {
      building: "1515",
      street: "Mexican Avenue",
      zipcode: "10015",
    },
  },
  {
    name: "Italian Indulgence",
    cuisine: "Italian",
    address: {
      building: "1616",
      street: "Italian Indulgence Place",
      zipcode: "10016",
    },
  },
  {
    name: "Greek Goddess",
    cuisine: "Greek",
    address: {
      building: "1717",
      street: "Greek Goddess Street",
      zipcode: "10017",
    },
  },
  {
    name: "Caribbean Charm",
    cuisine: "Caribbean",
    address: {
      building: "1818",
      street: "Caribbean Charm Avenue",
      zipcode: "10018",
    },
  },
  {
    name: "Bakery Bliss",
    cuisine: "Bakery",
    address: {
      building: "1919",
      street: "Bakery Boulevard",
      zipcode: "10019",
    },
  },
  {
    name: "Burger Barn",
    cuisine: "Burger",
    address: {
      building: "2020",
      street: "Burger Barn Street",
      zipcode: "10020",
    },
  },
  {
    name: "Sizzling Barbecue",
    cuisine: "Barbecue",
    address: {
      building: "2121",
      street: "Barbecue Avenue",
      zipcode: "10021",
    },
  },
  {
    name: "Mango Bakery",
    cuisine: "Bakery",
    address: {
      building: "2222",
      street: "Mango Bakery Place",
      zipcode: "10022",
    },
  },
  {
    name: "Veggie Burger Delight",
    cuisine: "Burger",
    address: {
      building: "2323",
      street: "Veggie Burger Street",
      zipcode: "10023",
    },
  },
  {
    name: "Spice Haven Bakery",
    cuisine: "Bakery",
    address: {
      building: "2424",
      street: "Spice Haven Bakery Street",
      zipcode: "10024",
    },
  },
  {
    name: "Tandoor Barbecue",
    cuisine: "Barbecue",
    address: {
      building: "2525",
      street: "Tandoor Barbecue Boulevard",
      zipcode: "10025",
    },
  },
  {
    name: "Cheese Bakery",
    cuisine: "Bakery",
    address: {
      building: "2626",
      street: "Cheese Bakery Avenue",
      zipcode: "10026",
    },
  },
  {
    name: "Greek Burger Palace",
    cuisine: "Burger",
    address: {
      building: "2727",
      street: "Greek Burger Place",
      zipcode: "10027",
    },
  },
  {
    name: "Caribbean Barbecue",
    cuisine: "Barbecue",
    address: {
      building: "2828",
      street: "Caribbean Barbecue Street",
      zipcode: "10028",
    },
  },
];

mongoose
  .connect("mongodb://127.0.0.1:27017/restaurantsDB")
  .then(() => {
    console.log("Connected");
    Restaurant.insertMany(restaurantsList)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
