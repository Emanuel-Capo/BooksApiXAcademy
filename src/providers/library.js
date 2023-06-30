const { Library, Book } = require("../models");

const getLibrary = async (libraryId) => {
    try {
        // Para ver libro con borrado lógico
        // const library = await Library.findByPk(libraryId, {paranoid: false});
        const library = await Library.findByPk(libraryId, {
            include: { all: true },
        });
        return library;
    } catch (error) {
        console.log("Error when fetching library ", error);
        throw error;
    }
};

const getAllLibraries = async () => {
    try {
        // Para ver libros con borrado lógico
        // const library = await Library.findAll({paranoid:false});
        const libraries = await Library.findAll({ include: { all: true } });
        return libraries;
    } catch (error) {
        console.log("Error when fetching all libraries ", error);
        throw error;
    }
};

const createLibrary = async (library) => {
    try {
        const newLibrary = await Library.create(library);
        return newLibrary;
    } catch (error) {
        console.log("Error when creating library ", error);
        throw error;
    }
};

const editLibrary = async (libraryId, library) => {
    const { name, location, phone } = library;
    try {
        const libraryFound = await getLibrary(libraryId);
        if (libraryFound) {
            if (name) libraryFound.name = name;
            if (location) libraryFound.location = location;
            if (phone) libraryFound.phone = phone;

            try {
                await libraryFound.save();
                return libraryFound;
            } catch (error) {
                console.log("Error when editing library ", error);
                throw error;
            }
        }
    } catch (error) {
        console.log("Error when fetching library ", error);
        throw error;
    }
};

const deleteLibrary = async (libraryId) => {
    try {
        await Library.destroy({ where: { id: libraryId } });
        const library = await Library.findByPk(libraryId, { paranoid: false });
        return library;
    } catch (error) {
        console.log("Error when deleting library ", error);
        throw error;
    }
};

module.exports = {
    getLibrary,
    getAllLibraries,
    createLibrary,
    editLibrary,
    deleteLibrary,
};
