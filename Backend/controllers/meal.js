import db from "../db.js";

export const getMeal = (req, res) =>{
    const query = req.query.cat ? "SELECT * FROM meal WHERE cat =? " : "SELECT * FROM meal";
    db.query(query, [req.query.cat], (err,data)=>{
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}