const errorHandling = (err, req, res, next) => {
    console.log(err.stack)
    res.status(500).json({
        status: 500,
        message: "Une erreur inattendu s'est produite.",
        error: err.message
    })
}

module.exports = errorHandling