# 🚀 Accredian-Clone Backend

### Live Demo: [accredianclonefrontendvercel.vercel.app](https://accredianclonefrontendvercel.vercel.app/) 

### Frontend repository: https://github.com/darshankardil-create/Accredian_Clone_FrontEnd

This project provides a robust, scalable backend service designed to handle inquiry form submissions, persist lead data securely in MongoDB, and trigger automated email notifications to both the user and the administrative team.

## 🛠️ Tech Stack
* **Runtime:** [Node.js](https://nodejs.org/)
* **Framework:** [Express.js](https://expressjs.com/)
* **Database:** [MongoDB](https://www.mongodb.com/) (via [Mongoose](https://mongoosejs.com/))
* **Email Service:** [Nodemailer](https://nodemailer.com/)
* **Middleware:** [CORS](https://expressjs.com/en/resources/middleware/cors.html), [dotenv](https://www.npmjs.com/package/dotenv)

## ✨ Key Features
* **Lead Capturing:** Automatically saves detailed lead inquiries (name, email, company, domain, etc.) to a MongoDB collection.
* **Automated Communication:** Sends professional HTML-formatted confirmation emails to users immediately upon inquiry.
* **Cross-Origin Support:** Configured for seamless integration with frontend applications deployed on platforms like Vercel or local development environments.
* **Schema Validation:** Enforces data structure via Mongoose models for reliable data storage.

## 📂 Directory Structure

```text
.
├── src/
│   ├── controller.js       # Business logic & request handling
│   ├── mongodb_config.js   # Database connection configuration
│   ├── routes.js           # API route definitions
│   └── schema.js           # Mongoose model definition
├── app.js                  # Main server entry point
├── .env                    # Environment variables (not tracked)
└── package.json
```

## ⚙️ Environment Variables
Create a `.env` file in the root directory and configure the following variables:

| Variable | Description |
| :--- | :--- |
| `PORT` | The port for the server to listen on (e.g., `5000`) |
| `MONGODB_URL` | Connection string for your MongoDB database |
| `SMTP_USER` | Email address used for sending automated notifications |
| `SMTP_PASS` | App password/SMTP password for the email account |

## 🚀 API Endpoints

### `POST /senddata/:email`
Submits user inquiry data. This endpoint saves the payload to the database and triggers the confirmation email.

* **Path Parameters:**
  * `:email`: The user's email address.
* **Request Body:**
  ```json
  {
    "name": "John Doe",
    "emailid": "john@example.com",
    "phoneno": "1234567890",
    "companyname": "Tech Corp",
    "domain": "Software",
    "numberofcan": "5",
    "mode": "Online",
    "location": "Remote"
  }
  ```

## 💻 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment:**
   Create a `.env` file and add the required variables listed above.

4. **Run the server:**
   ```bash
   npm start
   ```
   *The server will be live and listening on the defined `PORT`.*
