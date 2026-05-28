// This file demonstrates how to make API calls with React + Vite
// For server-side logic, use backend services like Node.js, Python, etc.

export async function getGreeting(name: string) {
  // Example of a client-side API call
  // Replace with your actual backend API
  return {
    greeting: `Hello, ${name}!`,
    mode: process.env.NODE_ENV ?? "unknown",
  };
}
