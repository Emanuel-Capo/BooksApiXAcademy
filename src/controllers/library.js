const { libraryService } = require("../services");


const getLibrary = async (req, res) => {
    try {
        const library = await libraryService.getLibrary(req.params.libraryId);
        if (!library) {
            res.status(404).json({
                action: "GetLibrary",
                error : "Library not found"
            });            
        }else{
            res.json(library);
        }
    } catch (error) {
        res.status(500).json({
            action: "GetLibrary",
            error : error.message
        });
    }
}

const getAllLibraries = async (req, res) => {
    try {
        const libraries = await libraryService.getAllLibraries();
        res.json(libraries);        
    } catch (error) {
        res.status(500).json({
            action: "GetAllLibraries",
            error : error.message
        });
    }
}

const createLibrary = async (req,res)=>{
    try {
        const newLibrary = await libraryService.createLibrary(req.body);
        res.json(newLibrary)
    } catch (error) {
        res.status(500).json({
            action: "CreateLibrary",
            error : error.message
        })
    }
} 

const editLibrary = async (req, res)=>{
    try {
        const editedLibrary = await libraryService.editLibrary(req.params.libraryId, req.body)
        if (!editedLibrary) {
            res.status(404).json({
                action: "EditLibrary",
                error : "Library not found"
            });            
        }else{
            res.json(editedLibrary);
        }
    } catch (error) {
        res.status(500).json({
            action: "EditLibrary",
            error : error.message
        })
    }
}

const deleteLibrary = async (req,res)=>{
    try {
        const deletedLibrary = await libraryService.deleteLibrary(req.params.libraryId)
        res.json(deletedLibrary)
    } catch (error) {
        res.status(500).json({
            action: "DeleteLibrary",
            error : error.message
        })
    }
} 


module.exports = {getLibrary, getAllLibraries, createLibrary, editLibrary, deleteLibrary}