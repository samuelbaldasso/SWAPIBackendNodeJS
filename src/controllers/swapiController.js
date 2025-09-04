const SwapiService = require("../services/swapiService");

class SwapiController {
  constructor(swapiService) {
    this.swapiService = swapiService || new SwapiService();
  }

  async getPeople(req, res) {
    try {
      const people = await this.swapiService.fetchPeople();
      res.status(200).json(people);
    } catch (error) {
      res.status(500).json({ message: "Error fetching people", error });
    }
  }

  async getPlanets(req, res) {
    try {
      const planets = await this.swapiService.fetchPlanets();
      res.status(200).json(planets);
    } catch (error) {
      res.status(500).json({ message: "Error fetching planets", error });
    }
  }
}

module.exports = SwapiController;
