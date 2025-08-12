export const VerifyEmailHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Verified</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>
<body class="bg-slate-900 flex items-center justify-center min-h-screen p-4">
    <div class="bg-white p-8 md:p-12 rounded-2xl shadow-2xl max-w-lg w-full text-center transform transition-transform duration-500 hover:scale-105">
        
        <!-- Success Icon -->
        <div class="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-green-100 rounded-full text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
        </div>

        <!-- Heading and Subtitle -->
        <h1 class="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Account Verified!
        </h1>
        <p class="text-lg text-slate-600 mb-8">
            Your account was successfully verified. You can now log in and start exploring.
        </p>

        <!-- Call to Action Button -->
        <a href="http://localhost:3000/api" class="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Continue to Login
        </a>

    </div>
</body>
</html>
`;
