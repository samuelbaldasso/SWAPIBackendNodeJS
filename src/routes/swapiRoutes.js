const express = require("express");
const SwapiController = require("../controllers/swapiController");

const router = express.Router();
const swapiService = require("../services/swapiService");
const swapiController = new SwapiController(swapiService);

/**
 * @swagger
 * /swapi/people:
 *   get:
 *     summary: Retorna uma lista de pessoas do universo Star Wars
 *     tags: [SWAPI]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pessoas
 *       401:
 *         description: Não autorizado
 */
router.get("/people", swapiController.getPeople.bind(swapiController));

/**
 * @swagger
 * /swapi/planets:
 *   get:
 *     summary: Retorna uma lista de planetas do universo Star Wars
 *     tags: [SWAPI]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de planetas
 *       401:
 *         description: Não autorizado
 */
router.get("/planets", swapiController.getPlanets.bind(swapiController));

module.exports = () => router;
