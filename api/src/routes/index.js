
const express = require("express");
const router = express.Router();
const dbController = require("../controllers/Queries");

const getHelpPage = (req, res) => res.render("help.html");
router.get("/", getHelpPage);
router.get("/api", getHelpPage);
router.get("/api/help", getHelpPage);

router.post("/api/send", function(request, response) {

    if (request.body.data && request.body.message) {
        response.json({
            notificationMessage: "Formulario recibido correctamente!!",
            data: `Tu dato es: ${request.body.data} y tu mensaje fué: ${request.body.message}`
        });
    } else {
        // si no se encuentra body.data o body.message:
        response.json({ "Error:": "NO se pudo procesar la petición porque faltaron datos." });
    }

});

router.post("/api/lastcases", dbController.getLastRecordByCountry);

router.post("/api/allcases", dbController.getAllRecordByCountry);

router.post("/api/insertrecord", dbController.insertRecordByCountry);


// invalid routes:
router.get("*", function(req, res) {
    res.status(404).send("<h1>404 - Not Found</h1><hr><p>Ruta inválida</p>");
});


// exports my routes:
module.exports = router;
