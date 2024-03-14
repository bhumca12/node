const Movie=require('../models/moviticketModel');

async function handleGetAllMovie(req,res){
    const result =await Movie.find({});
    if(!result) return res.status(400).json({error:`data is not found in the database`})
    return res.status(200).json(result);
}

async function handleGetParticularMove(req,res){
   
    const Id=req.params.id;
    if(!Id) return res.status('400').json('short is mandatory');
    const result =await Movie.findOne({_id:Id});
    if(!result) return res.status(400).json({error:`data is not found in the database. please another movie id`})
    return res.status(200).json(result);
}
async function handleAddNewMovie(req,res){
    const body=req.body;
    if(!body && !body.movieName ||!body.movieTitle && !body.movieGenre &&!body.movieRating &&!body.movieStreaming) return res.status(404).json('All field is mandatory .')

    const result=await Movie.create({
        movieName:body.movieName,
        movieTitle:body.movieTitle,
        movieGenre:body.movieGenre,
        movieRating:body.movieRating,
        movieStreaming:body.movieStreaming
    })

    if(!result) return res.status(400).json({error:`data is not found in the database. please another movie id`})
    return res.status(200).json("data inserted successfully!");
}

async function handleGetDeleteMove(req,res){
   
    const Id=req.params.id;
    if(!Id) return res.status('400').json('short is mandatory');
    const result = await Movie.deleteOne({ _id:Id });
    if(!result) return res.status(400).json({error:`data is not found in the database. please another movie id`})
    return res.status(200).json(`movie is deleted succefully ${result}`);
}

async function handleUpdateMovieData(req,res){
    const Id=req.params.id;
    const body=req.body;
    if(!body && !body.movieName ||!body.movieTitle && !body.movieGenre &&!body.movieRating &&!body.movieStreaming) return res.status(404).json('All field is mandatory .')
    let movieName=body.movieName;
    let movieTitle=body.movieTitle;
    let movieGenre=body.movieGenre;
    let movieRating=body.movieRating;
    let movieStreaming=body.movieStreaming;
    const result = await Movie.findOneAndUpdate(
        { _id: Id }, // Filter by movie ID
        { $set: { movieName,movieTitle,movieGenre,movieRating,movieStreaming } }, // Update fields
        { returnOriginal: false } // Return the updated document
      );

    if(!result) return res.status(400).json('data is not updated .please try again')
    return res.status(200).json("movie updated successfully!");
}

async function handleSearchMovie(req,res){
    const query = req.query.q;
    if(!query) return res.status(400).json('Please search enter movie name');

    const result = await Movie.find({ $text: { $search: query } }).toArray();
    if(!result) return res.status(400).json('this movie is not found .please try another movie') ;

    res.status(200).json(result);

}
module.exports={handleGetAllMovie,handleGetParticularMove,handleAddNewMovie,handleUpdateMovieData,handleSearchMovie,handleGetDeleteMove}