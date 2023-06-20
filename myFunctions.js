const cars = [
  {
    id: 1,
    make: "Audi",
    model: "Q5",
    model_year: "2022",
    body_type: "SUV",
    transmission: "Automatic",
    fuel_type: "Gasoline",
    engine: "2.0L Inline 4",
    rental_type: "يومي",
    rent_value: "150",
    features: ["GPS Navigation", "Bluetooth Connectivity"],
    image: "cars/audi-q52022.jpg",
  },
  {
    id: 2,
    make: "Audi",
    model: "S3",
    model_year: "2022",
    body_type: "Sedan",
    transmission: "Automatic",
    fuel_type: "Gasoline",
    engine: "2.0L Inline 4",
    rental_type: "يومي",
    rent_value: "150",
    features: ["Heated Seats", "Backup Camera"],
    image: "cars/audi-s32022.jpg",
  },
  {
    id: 3,
    make: "Audi",
    model: "SQ5",
    model_year: "2022",
    body_type: "SUV",
    transmission: "Automatic",
    fuel_type: "Gasoline",
    engine: "3.0L V6",
    rental_type: "يومي",
    rent_value: "150",
    features: ["GPS Navigation", "Sunroof"],
    image: "cars/audi-sq52022.jpg",
  },
  {
    id: 4,
    make: "Mercedes",
    model: "G-Class",
    model_year: "2018",
    body_type: "SUV",
    transmission: "Automatic",
    fuel_type: "Gasoline",
    engine: "4.0L V8",
    rental_type: "شهري",
    rent_value: "1500",
    features: ["Leather Seats", "Premium Sound System"],
    image: "cars/g-class2018.jpg",
  },
  {
    id: 5,
    make: "Jaguar",
    model: "E-PACE",
    model_year: "2018",
    body_type: "SUV",
    transmission: "Automatic",
    fuel_type: "Gasoline",
    engine: "2.0L Inline 4",
    rental_type: "شهري",
    rent_value: "1200",
    features: ["Heated Seats", "Panoramic Sunroof"],
    image: "cars/jaguar-e-pace2018.jpg",
  },
  {
    id: 6,
    make: "Jaguar",
    model: "F-Type",
    model_year: "2020",
    body_type: "Coupe",
    transmission: "Automatic",
    fuel_type: "Gasoline",
    engine: "3.0L V6",
    rental_type: "أسبوعي",
    rent_value: "50000",
    features: ["Sport Suspension", "Dynamic Mode"],
    image: "cars/jaguar-f-type2020.jpg",
  },
  {
    id: 7,
    make: "Jaguar",
    model: "XE",
    model_year: "2016",
    body_type: "Sedan",
    transmission: "Automatic",
    fuel_type: "Diesel",
    engine: "2.0L Inline 4",
    rental_type: "أسبوعي",
    rent_value: "35000",
    features: ["Keyless Entry", "Push Button Start"],
    image: "cars/jaguar-xe2016.jpg",
  },
  {
    id: 8,
    make: "Jaguar",
    model: "XF",
    model_year: "2022",
    body_type: "Sedan",
    transmission: "Automatic",
    fuel_type: "Gasoline",
    engine: "2.0L Inline 4",
    rental_type: "يومي",
    rent_value: "200",
    features: ["Touchscreen Display", "Lane Departure Warning"],
    image: "cars/jaguar-xf2022.jpg",
  },
  {
    id: 9,
    make: "Mercedes",
    model: "S-Class",
    model_year: "2009",
    body_type: "Sedan",
    transmission: "Automatic",
    fuel_type: "Gasoline",
    engine: "5.5L V8",
    rental_type: "شهري",
    rent_value: "2500",
    features: ["Rear Seat Entertainment", "Massage Seats"],
    image: "cars/s-class2009.jpg",
  },
  {
    id: 10,
    make: "Mercedes",
    model: "Vision EQXX",
    model_year: "2022",
    body_type: "Electric Concept Car",
    transmission: "Automatic",
    fuel_type: "Electric",
    engine: "Electric Motor",
    rental_type: "يومي",
    rent_value: "500",
    features: ["Autonomous Driving", "Augmented Reality Display"],
    image: "cars/vision-eqxx2022.jpg",
  },
];

function calcFinalRent(rent) {
  const fee = (rent * 1) / 100;
  const tax = (rent * 5) / 100;
  const final_rent = parseFloat(rent) + parseFloat(tax) + parseFloat(fee);
  return final_rent;
}

window.addEventListener("load", () => {
  const navbar = document.querySelector("nav");
  const links = navbar.querySelectorAll("a");

  links.forEach((link) => {
    if (link)
      link.addEventListener("click", function () {
        links.forEach((link) => link.classList.remove("active"));
        this.classList.add("active");
      });
  });
});
