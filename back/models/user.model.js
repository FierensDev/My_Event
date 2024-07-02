const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        pseudo : {
            type: String
        },
        email: {
            type: String
        },
        password:{
            type: String
        }
    }
)