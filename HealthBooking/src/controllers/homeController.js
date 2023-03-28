
import { render } from 'ejs';
import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = async (req, res) => {

    try {
        let data = await db.User.findAll();
        console.log(data);
        return res.render('homePage.ejs');
    } catch (e) {
        console.log(e)
    }
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    return res.send('Hello postCRUD nef');
}

let displayCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render('display-crud.ejs', { data: data });
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInforById(userId);
        return res.render('edit-crud.ejs', { data: userData });
    }
    else {
        return res.send('Not found')
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUser(data);
    return res.render('display-crud.ejs', { data: allUsers });
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {

        await CRUDService.deleteUser(id);
        return res.send('delete CRUD');
    }
    else {
        return res.send('user not found');
    }
}

module.exports = {
    getHomePage, getCRUD, postCRUD, displayCRUD, getEditCRUD, putCRUD, deleteCRUD
}