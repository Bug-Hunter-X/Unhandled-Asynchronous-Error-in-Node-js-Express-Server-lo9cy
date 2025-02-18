## Unhandled Asynchronous Error in Node.js Express Server

This repository demonstrates a common issue in Node.js where an error thrown within an asynchronous callback is not properly handled, resulting in an uncaught exception and server crash.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides a corrected version with proper error handling.

**Problem:**
The provided Express.js server simulates an asynchronous operation that might throw an error.  If the error occurs, it's not caught, causing the server to terminate unexpectedly.

**Solution:**
The solution involves using a `try...catch` block within the asynchronous callback or, better yet, leveraging the error-first callback pattern or async/await with proper error handling.