const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Массив автомобилей
const cars = [
  { id: 1, name: "Toyota", price: "24100", image: "/1.jpg" },
  { id: 2, name: "Honda", price: "22000", image: "/2.jpg" },
  { id: 3, name: "Ford", price: "30000", image: "/3.jpg" },
  { id: 4, name: "Chevrolet", price: "28000", image: "/4.jpg" },
  { id: 5, name: "BMW", price: "45000", image: "/5.jpg" },
  { id: 6, name: "Mercedes-Benz", price: "50000", image: "/6.jpg" },
  { id: 7, name: "Audi", price: "42000", image: "/7.jpg" },
  { id: 8, name: "Lexus", price: "38000", image: "/8.jpg" },
  { id: 9, name: "Hyundai", price: "20000", image: "/9.jpg" },
  { id: 10, name: "Kia", price: "18000", image: "/10.jpg" },
  // Добавьте остальные автомобили здесь...
];

// Добавляем массив автомобилей в JSON-сервер
router.db.assign({ cars }).write();

server.use(middlewares);
server.use(router);

server.listen(4200, () => {
  console.log("JSON-сервер запущен на порту http://localhost:4200");
});
