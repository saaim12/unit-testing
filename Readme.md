<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unit Testing with Vitest</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #f4f4f4;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        p {
            color: #555;
        }
        code {
            background-color: #f8f8f8;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #f8f8f8;
            padding: 10px;
            border-radius: 8px;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Unit Testing with Vitest</h1>
        <p>First, install the library for unit testing:</p>
        <pre><code>npm i -D vitest</code></pre>
        <p>Also, change your <code>package.json</code> file to include a test script:</p>
        <pre><code>"scripts": {
    "test": "vitest"
}</code></pre>
        <p>Make a new folder for your tests. Vitest will auto-detect files with the name <code>test</code> in that directory. Run your tests with <code>npm t</code> or <code>npm test</code>.</p>
        <p>Write your test cases in <code>intro.test.js</code> file:</p>
        <pre><code>import { describe, expect, it } from 'vitest';
import { max, permission, factorial } from '../src/index';

describe('max', () => {
    it('should return the max number when the first number is smaller', () => {
        expect(max(1, 2)).toBe(2);
    });
    it('should return the max number when the first number is larger', () => {
        expect(max(2, 1)).toBe(2);
    });
    it('should return the max number when both numbers are equal', () => {
        expect(max(1, 1)).toBe(1);
    });
});

describe('permission', () => {
    it('should return "allowed" for age 18 or above', () => {
        expect(permission(18)).toBe('allowed');
    });
    it('should return "not allowed" for age below 18', () => {
        expect(permission(17)).toBe('not allowed');
    });
});

describe('factorial', () => {
    it('should return 1 for factorial of 0', () => {
        expect(factorial(0)).toBe(1);
    });
    it('should return 1 for factorial of 1', () => {
        expect(factorial(1)).toBe(1);
    });
    it('should return 6 for factorial of 3', () => {
        expect(factorial(3)).toBe(6);
    });
});
</code></pre>
    </div>
</body>
</html>
#   u n i t - t e s t i n g  
 