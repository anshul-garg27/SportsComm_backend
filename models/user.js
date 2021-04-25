import mongoose from "mongoose"
const { Schema } = mongoose


const UserSchema = new Schema({
    
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
{ timestamps: true });


//UserSchema.path('username').index({unique: true})
const user = mongoose.model('User', UserSchema);

export default user;