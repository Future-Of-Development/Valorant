import axios from '../axios';

export default class valorantService {

    async getAgents() {
        const res = await axios.get('agents?language=pt-BR');
        return res.data
    }

}