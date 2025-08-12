<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
            line-height: 1.6;
            color: #24292e;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1, h2, h3 {
            border-bottom: 1px solid #eaecef;
            padding-bottom: 0.3em;
            margin-top: 24px;
            margin-bottom: 16px;
        }
        code {
            font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
            background-color: rgba(27,31,35,0.05);
            padding: 0.2em 0.4em;
            margin: 0;
            font-size: 85%;
            border-radius: 3px;
        }
        pre {
            background-color: #f6f8fa;
            border-radius: 3px;
            padding: 16px;
            overflow: auto;
        }
        pre code {
            padding: 0;
            margin: 0;
            font-size: 100%;
            background-color: transparent;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin-top: 16px;
            margin-bottom: 16px;
        }
        th, td {
            border: 1px solid #dfe2e5;
            padding: 8px 12px;
            text-align: left;
        }
        th {
            background-color: #f6f8fa;
            font-weight: 600;
        }
        .badge {
            display: inline-block;
            padding: 4px 8px;
            font-size: 12px;
            font-weight: 600;
            line-height: 1;
            color: #fff;
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            border-radius: 20px;
        }
        .badge-dev {
            background-color: #f6ad55;
        }
        .badge-post { background-color: #48bb78; }
        .badge-get { background-color: #4299e1; }
        .badge-delete { background-color: #f56565; }
        .note {
            background-color: #fffbdd;
            border-left: 4px solid #ffc107;
            padding: 10px 15px;
            margin: 20px 0;
        }
    </style>
</head>
<body>

    <h1>
        E-Commerce Backend API 
        <span class="badge badge-dev">In Development</span>
    </h1>

    <p>
        This repository contains the backend API for a modern e-commerce platform, built with the powerful <strong>NestJS</strong> framework. It provides a robust foundation for handling users, products, categories, authentication, and more.
    </p>

    <div class="note">
      <p>⚠️ <strong>Disclaimer:</strong> This project is currently under active development. Features and endpoints are subject to change. Not all functionalities are fully implemented yet.</p>
    </div>

    <hr>

    <h2>🚀 Key Features</h2>
    <ul>
        <li><strong>User Authentication:</strong> Secure sign-up, login, and email verification using JWT.</li>
        <li><strong>Admin Panel:</strong> Endpoints for managing users, brands, and categories.</li>
        <li><strong>Image Handling:</strong> Dynamic single and multiple file uploads with image processing (resizing and format conversion) via Sharp.</li>
        <li><strong>Database Integration:</strong> Uses TypeORM with PostgreSQL for robust data management.</li>
        <li><strong>Configuration Management:</strong> Easy setup using environment variables.</li>
        <li><strong>API Documentation:</strong> Self-documented API using Swagger (OpenAPI).</li>
    </ul>

    <hr>

    <h2>🛠️ Tech Stack</h2>
    <p>
        <img src="https://img.shields.io/badge/NestJS-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS">
        <img src="https://img.shields.io/badge/TypeScript-%233178C6.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
        <img src="https://img.shields.io/badge/PostgreSQL-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
        <img src="https://img.shields.io/badge/TypeORM-FF471A.svg?style=for-the-badge" alt="TypeORM">
        <img src="https://img.shields.io/badge/JWT-black.svg?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT">
    </p>
    
    <hr>

    <h2>⚙️ Getting Started</h2>
    <p>To get a local copy up and running, follow these simple steps.</p>

    <h3>Prerequisites</h3>
    <ul>
        <li>Node.js (v18 or higher)</li>
        <li>npm or yarn</li>
        <li>A running PostgreSQL instance</li>
    </ul>

    <h3>Installation</h3>
    <ol>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone https://your-repository-url.git</code></pre>
        </li>
        <li><strong>Navigate to the project directory:</strong>
            <pre><code>cd ecommerse-backend</code></pre>
        </li>
        <li><strong>Install dependencies:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li>
            <strong>Set up environment variables:</strong><br>
            Create a <code>.env</code> file in the root of the project by copying the example file:
            <pre><code>cp .env.example .env</code></pre>
            Then, fill in the required values in the <code>.env</code> file.
        </li>
        <li><strong>Run the application in development mode:</strong>
            <pre><code>npm run start:dev</code></pre>
            The server will start on <code>http://localhost:3000</code> (or your configured port).
        </li>
    </ol>

    <hr>

    <h2>🔑 Environment Variables</h2>
    <p>The following variables must be set in your <code>.env</code> file for the application to work correctly.</p>
    <table>
        <thead>
            <tr>
                <th>Variable</th>
                <th>Description</th>
                <th>Example</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>DB_HOST</code></td>
                <td>Database host</td>
                <td><code>localhost</code></td>
            </tr>
            <tr>
                <td><code>DB_PORT</code></td>
                <td>Database port</td>
                <td><code>5432</code></td>
            </tr>
            <tr>
                <td><code>DB_USERNAME</code></td>
                <td>Database username</td>
                <td><code>postgres</code></td>
            </tr>
            <tr>
                <td><code>DB_PASSWORD</code></td>
                <td>Database password</td>
                <td><code>your_db_password</code></td>
            </tr>
            <tr>
                <td><code>DB_NAME</code></td>
                <td>Database name</td>
                <td><code>ecommerce_db</code></td>
            </tr>
            <tr>
                <td><code>Email_HOST</code></td>
                <td>SMTP host for sending emails</td>
                <td><code>smtp.example.com</code></td>
            </tr>
            <tr>
                <td><code>EMAIL_PORT</code></td>
                <td>SMTP port</td>
                <td><code>587</code></td>
            </tr>
            <tr>
                <td><code>EMAIL_USERNAME</code></td>
                <td>SMTP username</td>
                <td><code>your_email@example.com</code></td>
            </tr>
            <tr>
                <td><code>EMAIL_PASSWORD</code></td>
                <td>SMTP password</td>
                <td><code>your_email_password</code></td>
            </tr>
            <tr>
                <td><code>JSON_SECRET</code></td>
                <td>Secret key for signing JWTs</td>
                <td><code>your_strong_jwt_secret</code></td>
            </tr>
            <tr>
                <td><code>API_PATH</code></td>
                <td>Global prefix for all API routes</td>
                <td><code>api/v1</code></td>
            </tr>
            <tr>
                <td><code>SESSION_SECRET</code></td>
                <td>Secret key for session management</td>
                <td><code>your_strong_session_secret</code></td>
            </tr>
        </tbody>
    </table>

    <hr>

    <h2>📜 Available Scripts</h2>
    <ul>
        <li><code>npm run start</code>: Starts the application.</li>
        <li><code>npm run start:dev</code>: Starts the application in watch mode for development.</li>
        <li><code>npm run build</code>: Compiles the TypeScript code to JavaScript.</li>
        <li><code>npm run format</code>: Formats the code using Prettier.</li>
        <li><code>npm run lint</code>: Lints the code using ESLint.</li>
        <li><code>npm test</code>: Runs unit tests with Jest.</li>
    </ul>

    <hr>

    <h2>📚 API Endpoints Overview</h2>
    <p>Below is a summary of the available API endpoints. For a complete interactive list, run the application and navigate to <code>/api</code> (or your configured Swagger path).</p>

    <h3>Authentication</h3>
    <table>
        <thead>
            <tr>
                <th>Method</th>
                <th>Endpoint</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span class="badge badge-post">POST</span></td>
                <td><code>/auth/sign-up</code></td>
                <td>Registers a new user.</td>
            </tr>
            <tr>
                <td><span class="badge badge-get">GET</span></td>
                <td><code>/auth/verifyEmail?token={token}</code></td>
                <td>Verifies a user's email address using the token sent to them.</td>
            </tr>
            <tr>
                <td><span class="badge badge-post">POST</span></td>
                <td><code>/auth/login</code></td>
                <td>Logs in a user and returns a JWT.</td>
            </tr>
        </tbody>
    </table>

    <h3>Admin: Image Management (Requires Auth)</h3>
    <table>
        <thead>
            <tr>
                <th>Method</th>
                <th>Endpoint</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span class="badge badge-post">POST</span></td>
                <td><code>/admin/upload/single-image</code></td>
                <td>Uploads a single image. Accepts query params for <code>width</code>, <code>height</code>, <code>imageType</code>, <code>group</code>.</td>
            </tr>
            <tr>
                <td><span class="badge badge-post">POST</span></td>
                <td><code>/admin/upload/upload-multiple-files</code></td>
                <td>Uploads multiple images. Accepts the same query params.</td>
            </tr>
        </tbody>
    </table>
    
    <h3>Admin: User Management (Requires Auth)</h3>
    <table>
        <thead>
            <tr>
                <th>Method</th>
                <th>Endpoint</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span class="badge badge-get">GET</span></td>
                <td><code>/admin/users</code></td>
                <td>Retrieves a list of all users.</td>
            </tr>
            <tr>
                <td><span class="badge badge-delete">DELETE</span></td>
                <td><code>/admin/users?userId={id}</code></td>
                <td>Deletes a user by their ID.</td>
            </tr>
        </tbody>
    </table>

    <h3>Admin: Content Management (Requires Auth)</h3>
    <table>
        <thead>
            <tr>
                <th>Method</th>
                <th>Endpoint</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span class="badge badge-post">POST</span></td>
                <td><code>/brands/create</code></td>
                <td>Creates a new brand.</td>
            </tr>
            <tr>
                <td><span class="badge badge-post">POST</span></td>
                <td><code>/category/create</code></td>
                <td>Creates a new category.</td>
            </tr>
        </tbody>
    </table>

    <hr>
    
    <h2>📦 Key Dependencies Explained</h2>
    <ul>
        <li>
            <strong><code>@nestjs-modules/mailer</code> & <code>nodemailer</code>:</strong>
            These packages work together to handle email sending. <code>nodemailer</code> is a powerful Node.js module for sending emails, while <code>@nestjs-modules/mailer</code> provides a seamless integration into the NestJS framework, making it easy to send transactional emails like verification links.
        </li>
        <li><strong><code>@nestjs/typeorm</code> & <code>pg</code>:</strong> The official TypeORM module for NestJS. It simplifies database integration with PostgreSQL (via the <code>pg</code> driver).</li>
        <li><strong><code>@nestjs/jwt</code>:</strong> Provides JWT (JSON Web Token) integration for handling stateless authentication.</li>
        <li><strong><code>@nestjs/swagger</code>:</strong> Automatically generates OpenAPI (Swagger) documentation from your controllers and DTOs.</li>
        <li><strong><code>class-validator</code> & <code>class-transformer</code>:</strong> Used for powerful, decorator-based validation and transformation of incoming request bodies (DTOs).</li>
        <li><strong><code>sharp</code>:</strong> A high-performance Node.js image processing library. Used here to resize and convert uploaded images on the fly.</li>
    </ul>

    <hr>
    
    <h2>📜 License</h2>
    <p>This project is licensed under the UNLICENSED License.</p>

</body>
</html>
