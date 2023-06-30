const { libraryProvider } = require("../providers");


const getLibrary = async (libraryId)=>{
    const libraryFound = await libraryProvider.getLibrary(libraryId);
    return libraryFound;
}

const getAllLibraries = async ()=>{
    const allLibraries = await libraryProvider.getAllLibraries();
    return allLibraries;
}

const createLibrary = async (library)=>{
    const newLibrary = await libraryProvider.createLibrary(library);
    return newLibrary
}

const editLibrary = async (libraryId, library)=>{
    const editedLibrary = await libraryProvider.editLibrary(libraryId, library);
    return editedLibrary
}

const deleteLibrary = async (libraryId)=>{
    const deletedLibrary = await libraryProvider.deleteLibrary(libraryId);
    return deletedLibrary;
}


module.exports = {getLibrary, getAllLibraries, createLibrary, editLibrary, deleteLibrary}