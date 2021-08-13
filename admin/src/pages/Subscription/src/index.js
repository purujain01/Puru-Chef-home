import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Admin from '/admin/models/Admin.js'

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Salman:salman@cluster0.kjvnu.mongodb.net/chef_at_home_testing?retryWrites=true&w=majority',{
  useNewUrlParser: true
})

const admin = Admin.find({})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

