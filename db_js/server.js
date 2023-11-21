// Server Connection
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.static(__dirname));

// MySQL connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'mydb',
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1);
    }
    console.log('Connected to MySQL');
});

// Server side form handling
app.post('/register', upload.none(), (req, res) => {
    const { username, email, password, fullName, phoneNumber } = req.body;

    // Insert user data into the database
    const query = `INSERT INTO users (username, email, password, fullName, phoneNumber) VALUES (?, ?, ?, ?, ?)`;
    connection.query(query, [username, email, password, fullName, phoneNumber], (err, result) => {
        if (err) {
            console.error('Error inserting into database:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        console.log('User registered successfully');
        res.status(200).json({ message: 'User registered successfully' });
    });
});

// GET process of the users
app.get('/users', (req, res) => {
    const query = `SELECT * FROM users`;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users from database:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        console.log('Fetched users:', results); // Log the fetched users

        res.json(results);
    });
});

// Req Res of the GET process to the index
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Optional Line for testing connectivity

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
