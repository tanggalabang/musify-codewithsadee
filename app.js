'use strict';

/**
 * node modules
 */

// f : mengatasi masalah keamanan dan mengkonfigurasi izin permintaan lintas domain
const cors = require('cors');
// f : mem-parsing (mengurai) cookie dalam permintaan HTTP pada aplikasi Node.js
const cookieParser = require('cookie-parser');

/**
 * custom modules
 */
const login = require('./src/routes/login.route')

// initial express app
// f : membuat aplikasi server
const express = require('express');
const app = express();

/**
 * EJS setting
 */
// ejs f : memungkinkan pengembang untuk menghasilkan HTML dinamis dengan cara menyisipkan kode JavaScript ke dalam file template HTML.
app.set('view engine', 'ejs');

/**
 * Setting static directory
 */
app.use(express.static(`${__dirname}/public`));

/**
 * Enable cors & cookie parser
 */
app.use(cors()).use(cookieParser());

/**
 * Login page
 */
app.use('/login', login)

// f : berjalan di port 5000
app.listen(5000, () => {
    console.log('Server listening at http://localhost:5000');
})