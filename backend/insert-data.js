import mongoose from "mongoose";
import Restaurant from "./models/restaurant.js";

const restaurantsList = [
  {
    name: "Pasta Paradise",
    cuisine: "Italian",
    address: {
      building: "1010",
      street: "Pasta Place Lane",
      zipcode: "10004",
    },
    contact: {
      phone: "555-444-4444",
      email: "pasta@example.com",
    },
  },
  {
    name: "Wok Wonderland",
    cuisine: "Chinese",
    address: {
      building: "2020",
      street: "Wok Avenue",
      zipcode: "10006",
    },
    contact: {
      phone: "555-555-5555",
      email: "wok@example.com",
    },
  },
  {
    name: "Tandoor Treat",
    cuisine: "Indian",
    address: {
      building: "3030",
      street: "Tandoor Lane",
      zipcode: "10004",
    },
    contact: {
      phone: "555-666-6666",
      email: "tandoor@example.com",
    },
  },
  {
    name: "French Fusion",
    cuisine: "French",
    address: {
      building: "4040",
      street: "Fusion Street",
      zipcode: "10014",
    },
    contact: {
      phone: "555-777-7777",
      email: "french@example.com",
    },
  },
  {
    name: "Mexican Fiesta",
    cuisine: "Mexican",
    address: {
      building: "5050",
      street: "Fiesta Avenue",
      zipcode: "10015",
    },
    contact: {
      phone: "555-888-8888",
      email: "mexican@example.com",
    },
  },
  {
    name: "Sushi Sensation",
    cuisine: "Japanese",
    address: {
      building: "6060",
      street: "Sensation Street",
      zipcode: "10001",
    },
    contact: {
      phone: "555-999-9999",
      email: "sushi_sensation@example.com",
    },
  },
  {
    name: "Tapas Time",
    cuisine: "Spanish",
    address: {
      building: "7070",
      street: "Tapas Terrace",
      zipcode: "10016",
    },
    contact: {
      phone: "555-101-1010",
      email: "tapas@example.com",
    },
  },
  {
    name: "Thai Temptation",
    cuisine: "Thai",
    address: {
      building: "8080",
      street: "Temptation Terrace",
      zipcode: "10008",
    },
    contact: {
      phone: "555-202-2020",
      email: "thai@example.com",
    },
  },
  {
    name: "Gyro Galore",
    cuisine: "Greek",
    address: {
      building: "9090",
      street: "Gyro Street",
      zipcode: "10017",
    },
    contact: {
      phone: "555-303-3030",
      email: "gyro@example.com",
    },
  },
  {
    name: "Kebab Kingdom",
    cuisine: "Turkish",
    address: {
      building: "10101",
      street: "Kebab Avenue",
      zipcode: "10018",
    },
    contact: {
      phone: "555-404-4040",
      email: "kebab@example.com",
    },
  },
  {
    name: "Pizza Palace",
    cuisine: "Italian",
    address: {
      building: "1111",
      street: "Pizza Boulevard",
      zipcode: "10025",
    },
    contact: {
      phone: "555-505-5050",
      email: "pizza@example.com",
    },
  },
  {
    name: "Dragon Delight",
    cuisine: "Chinese",
    address: {
      building: "1212",
      street: "Dragon Avenue",
      zipcode: "10026",
    },
    contact: {
      phone: "555-606-6060",
      email: "dragon@example.com",
    },
  },
  {
    name: "Curry Cove",
    cuisine: "Indian",
    address: {
      building: "1313",
      street: "Curry Cove Lane",
      zipcode: "10025",
    },
    contact: {
      phone: "555-707-7070",
      email: "curry@example.com",
    },
  },
  {
    name: "Croissant Corner",
    cuisine: "French",
    address: {
      building: "1414",
      street: "Croissant Corner Street",
      zipcode: "10027",
    },
    contact: {
      phone: "555-808-8080",
      email: "croissant@example.com",
    },
  },
  {
    name: "Taco Terrace",
    cuisine: "Mexican",
    address: {
      building: "1515",
      street: "Taco Terrace",
      zipcode: "10028",
    },
    contact: {
      phone: "555-909-9090",
      email: "taco@example.com",
    },
  },
  {
    name: "Sakura Savor",
    cuisine: "Japanese",
    address: {
      building: "1616",
      street: "Sakura Street",
      zipcode: "10029",
    },
    contact: {
      phone: "555-1010-1010",
      email: "sakura@example.com",
    },
  },
  {
    name: "Tapenade Tastes",
    cuisine: "Mediterranean",
    address: {
      building: "1717",
      street: "Tapenade Terrace",
      zipcode: "10030",
    },
    contact: {
      phone: "555-1111-1111",
      email: "tapenade@example.com",
    },
  },
  {
    name: "Pad Thai Paradise",
    cuisine: "Thai",
    address: {
      building: "1818",
      street: "Pad Thai Place",
      zipcode: "10031",
    },
    contact: {
      phone: "555-1212-1212",
      email: "padthai@example.com",
    },
  },
  {
    name: "Olive Oasis",
    cuisine: "Greek",
    address: {
      building: "1919",
      street: "Olive Street",
      zipcode: "10032",
    },
    contact: {
      phone: "555-1313-1313",
      email: "olive@example.com",
    },
  },
  {
    name: "Baklava Bliss",
    cuisine: "Greek",
    address: {
      building: "2020",
      street: "Baklava Boulevard",
      zipcode: "10033",
    },
    contact: {
      phone: "555-1414-1414",
      email: "baklava@example.com",
    },
  },
  {
    name: "Pizzeria Paradise",
    cuisine: "Italian",
    address: {
      building: "3131",
      street: "Pizza Place",
      zipcode: "10044",
    },
    contact: {
      phone: "555-2525-2525",
      email: "pizzeria@example.com",
    },
  },
  {
    name: "Golden Dumplings",
    cuisine: "Chinese",
    address: {
      building: "3232",
      street: "Golden Avenue",
      zipcode: "10045",
    },
    contact: {
      phone: "555-2626-2626",
      email: "golden@example.com",
    },
  },
  {
    name: "Curry Cottage",
    cuisine: "Indian",
    address: {
      building: "3333",
      street: "Curry Lane",
      zipcode: "10044",
    },
    contact: {
      phone: "555-2727-2727",
      email: "curry@example.com",
    },
  },
  {
    name: "Baguette Bistro",
    cuisine: "French",
    address: {
      building: "3434",
      street: "Baguette Boulevard",
      zipcode: "10046",
    },
    contact: {
      phone: "555-2828-2828",
      email: "baguette@example.com",
    },
  },
  {
    name: "Taco Time",
    cuisine: "Mexican",
    address: {
      building: "3535",
      street: "Taco Terrace",
      zipcode: "10045",
    },
    contact: {
      phone: "555-2929-2929",
      email: "taco@example.com",
    },
  },
  {
    name: "Sakura Sip",
    cuisine: "Japanese",
    address: {
      building: "3636",
      street: "Sakura Street",
      zipcode: "10044",
    },
    contact: {
      phone: "555-3030-3030",
      email: "sakura@example.com",
    },
  },
  {
    name: "Mediterranean Oasis",
    cuisine: "Mediterranean",
    address: {
      building: "3737",
      street: "Mediterranean Avenue",
      zipcode: "10046",
    },
    contact: {
      phone: "555-3131-3131",
      email: "mediterranean@example.com",
    },
  },
  {
    name: "Spicy Thai Delight",
    cuisine: "Thai",
    address: {
      building: "3838",
      street: "Spicy Thai Street",
      zipcode: "10047",
    },
    contact: {
      phone: "555-3232-3232",
      email: "thai@example.com",
    },
  },
  {
    name: "Olive Outpost",
    cuisine: "Greek",
    address: {
      building: "3939",
      street: "Olive Outpost Lane",
      zipcode: "10044",
    },
    contact: {
      phone: "555-3333-3333",
      email: "olive@example.com",
    },
  },
  {
    name: "Turkish Temptations",
    cuisine: "Turkish",
    address: {
      building: "4040",
      street: "Turkish Terrace",
      zipcode: "10047",
    },
    contact: {
      phone: "555-3434-3434",
      email: "turkish@example.com",
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
