import User from "../models/UserModel.js";


export const searchContacts = async (req, res, next) => {
    try {
        const {searchT} = req.body;

        if(searchT == undefined || searchT == null){
            return res.status(400).send("searchTerm is required")
        }

        const sanitizedSearchTerm = searchT.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");


        const regex = new RegExp(sanitizedSearchTerm, "i") 
        const contacts = await User.find({
            $and: [{_id: { $ne: req.userId} }, {
                $or: [{firstName: regex}, {lastName:regex}, {email:regex}],
            }]
        })

        return res.status(200).json({contacts});
        
    } catch (err) {
        console.log({ err });
        return res.status(500).send("Server Error");
    }
};
