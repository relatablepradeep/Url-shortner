🔗 URL Shortener
A simple yet powerful URL shortening service that generates short, shareable links from long URLs. Built with Node.js, Express, and MongoDB, this backend-focused project also includes stateful authentication to manage users and their URLs securely.

🚀 Features
✅ Shorten URLs – Convert long, messy links into short, easy-to-share URLs.
✅ Persistent Storage – Store URLs, short URLs, and user details in MongoDB.
✅ Stateful Authentication – Secure login/logout system to manage user sessions.
✅ User Dashboard – View, edit, and manage your shortened links.
✅ Redirect System – Automatically redirects short URLs to their original destination.
✅ RESTful API – API support to integrate with other applications.

🛠️ Tech Stack
🔹 Backend: Node.js, Express.js
🔹 Database: MongoDB (Mongoose)
🔹 Authentication: Statefull-cookie based

⚡ Getting Started
1️⃣ Clone the Repository

git clone https://github.com/relatablepradeep/Url-shortner.git
cd url-shortener
2️⃣ Install Dependencies


npm install
3️⃣ Set Up Environment Variables
Create a .env file and add:

mongoport=your_mongodb_connection_string
Port=enter own port at env

4️⃣ Run the Application
npm start

🔥 API Endpoints
📌 for login 
http://lochalhost:5000/login

📌 for singup
http://lochalhost:5000/signup

💡 Usage
🔗 Shorten a Link: Enter a URL, click Shorten, and get a short link.
👤 User Dashboard: Sign in to view and manage your shortened URLs.
🔄 Redirect: Click on a short URL, and it takes you to the original destination.

🤝 Contributing
We welcome contributions! Feel free to fork the repo, create a branch, and submit a pull request.

📜 License
📝 This project is licensed under the MIT License
