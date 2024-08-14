import React from 'react';

function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-lg text-gray-600 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
                <a
                    href="/"
                    className="text-blue-500 hover:text-blue-700 font-semibold text-lg"
                >
                    Go back to the homepage
                </a>
            </div>
        </div>
    );
}

export default NotFound;
