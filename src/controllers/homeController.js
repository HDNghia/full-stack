
import db from '../models/index'

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log('---------------');
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e); //TCPview
    }
}

module.exports = {
    getHomePage: getHomePage,
}