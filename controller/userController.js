const User = require("../model/userModel")
const jwt = require("jsonwebtoken")

const loginController = async (req, res) => {
    console.log("!1111111111111111111")
    const data = req.body;
    

    try {
        const { name, email, profilePic } = data;
        const userExists = await User.findOne({
            emailId: email
        })
        if (userExists) {
            const data = {
                user: {
                    id: userExists.id
                }
            }
            const token = jwt.sign(data, "APP_TOKEN_VERIFY_*#^$&*#&(@&*@")
            res.status(200).json({ success: true, user: userExists, token: token, message: "Login Successfull" })
        } else {
            const user = await User.create({
                name: name,
                emailId: email,
                profilePic: profilePic,
            })
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, "APP_TOKEN_VERIFY_*#^$&*#&(@&*@")

            res.status(200).json({ success: true, user: user, token: token, message: "Login Successfull" })
        }


    } catch (error) {
        res.status(400).json({ success: false, message: error })
    }

}

const getUserData = async(req,res)=>{
    const Id = req.user.id;
    console.log(Id)
    try {
        const user = await User.findOne({_id:Id});
        if(!user){
            res.status(404).json({ success: false, message: "User Not Found, Please Try again" })
        }
        res.status(200).json({ success: true, user: user, message: "Data fetched successfully" })

    } catch (error) {
        res.status(400).json({ success: false, message: error })
    }
}


module.exports = { loginController , getUserData }