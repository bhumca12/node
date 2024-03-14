const express=require('express');
const router=express.Router();
const {handleGetAllMovie,handleGetParticularMove,handleAddNewMovie,handleUpdateMovieData,handleSearchMovie,handleGetDeleteMove}=require('../controllers/moviticketController');

router.get('/',handleGetAllMovie);
router.get('/:id',handleGetParticularMove);
router.delete('/:id',handleGetDeleteMove);
router.get('/search',handleSearchMovie);
router.post('/',handleAddNewMovie);
router.put('/:id',handleUpdateMovieData);

module.exports={router}