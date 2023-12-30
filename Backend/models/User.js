const mongoose = require("mongoose");


const userSchema = mongoose.Schema(
    {
        email : {
            type: String,
            required: [true, 'Email is required'],
            trim: true,
        },
        password : {
            type: String,
            required: [true, 'Password is required'],
        },

        full_name : {
            type: String,
            maxlength: 50,
            
        }, 

        image : {
            type : String
        }

    },
    {
        timestamps : true,
    }
)

module.exports = mongoose.model("User", userSchema);
