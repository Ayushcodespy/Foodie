# 🛒 Grocery Delivery Backend Server 🚀

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![Fastify](https://img.shields.io/badge/Fastify-4.x-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![AdminJS](https://img.shields.io/badge/AdminJS-Admin%20Panel-purple)
![License](https://img.shields.io/badge/License-MIT-blue)

A **scalable backend server** for a Grocery Delivery application built using  
**Node.js**, **Fastify**, **MongoDB**, and **AdminJS**.

💡 This project is **well-structured**, **easy to understand**, and **ready to use** for anyone who clones the repository.

---

## ✨ Features

✅ Fast & lightweight Fastify server  
✅ MongoDB with Mongoose ODM  
✅ Admin Panel using AdminJS  
✅ Role-based models (Admin, Customer, Delivery Partner)  
✅ Clean & modular architecture  
✅ Production-ready backend foundation  

---

## 🧰 Tech Stack

- 🟢 **Node.js**
- ⚡ **Fastify**
- 🍃 **MongoDB**
- 🧩 **Mongoose**
- 🎛️ **AdminJS**
- 🔁 **Nodemon**

---

## 📁 Project Structure



## Project Structure

```
server/
│
├── app.js                # Main entry point
├── package.json
├── .env                  # Environment variables
│
├── config/
│   ├── connect.js        # MongoDB connection
│   ├── config.js         # App configuration
│   └── setup.js          # AdminJS setup
│
├── models/
│   ├── Admin.js
│   ├── Branch.js
│   ├── Category.js
│   ├── Counter.js
│   ├── Customer.js
│   ├── DeliveryPartner.js
│   ├── Order.js
│   └── Product.js
│
└── routes/
    └── index.js          # All API routes
```

---


---

## 🔐 Environment Variables Setup

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=<use your MongoDB URI>
COOKIE_PASSWORD=your_secret_key
```
⭐ First create your account in MongoDB Atlas and create a cluster then use the credientials. <br>
For Creating Database visit: <a href= "https://www.mongodb.com/products/platform/atlas-database" > **MongoDB Atlas**</a>

## Installation & Setup

### 1. 🧩Clone the repository
```bash
git clone https://github.com/Ayushcodespy/Foodie.git
cd server
```

### 2. 📦Install dependencies
```bash
npm install --legacy-peer-deps
```

### 3. ▶️ Start the server
```bash
npm start
```
🎉 Server will start successfully if everything is configured correctly.

---

## 🌍Server URLs

| Service           | URL                                                        |
| ----------------- | ---------------------------------------------------------- |
| 🚀 Backend Server | [http://localhost:3000](http://localhost:3000)             |
| 🎛️ Admin Panel   | [http://localhost:3000/admin](http://localhost:3000/admin) |


---


## 🔑Admin Login (Demo)

Email: ayush.jnv54@gmail.com  
Password: 1234

> Change credentials before production use.

---

## 🔄 Application Workflow (Visual Flow)
```
🖥️ Client / Frontend 
         │ 
         ▼
⚡ Fastify Server (app.js) 
         │ 
         ▼ 
🧠 Routes & Controllers 
         │ 
         ▼ 
🍃 MongoDB (via Mongoose) 
         │ 
         ▼ 
🎛️ AdminJS Dashboard
```

✨ This flow helps in understanding how requests travel inside the application.

---

## 📌 Usage Notes

🧱 Backend-only project

🔗 Can be connected to React / Android / iOS frontend

🎯 Ideal for college projects, startups, & learning Fastify

🚀 Easily extendable (Payments, Realtime Orders, Notifications)

---

## 👨‍💻 Author

**Ayush Patel** <br>
💼 Backend Developer | Node.js | MongoDB | Fastify

---


## 📜 License

This project is licensed under the MIT License
Feel free to use, modify, and distribute.

<br>
<br>
<br>

### ⭐ If you like this project, don’t forget to star the repository! ⭐
