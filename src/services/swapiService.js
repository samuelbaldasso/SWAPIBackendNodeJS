class SwapiService {
    constructor() {
        this.baseURL = 'https://swapi.info/api';
        this.axios = require('axios');
    }

    async fetchPeople() {
        try {
            const response = await this.axios.get(`${this.baseURL}/people/`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching people: ' + error.message);
        }
    }

    async fetchPlanets() {
        try {
            const response = await this.axios.get(`${this.baseURL}/planets/`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching planets: ' + error.message);
        }
    }
}

module.exports = SwapiService;