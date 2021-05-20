import axios from "axios";

export default {
    getRandomEmployess: function() {
        return axios.get("https://randomuser.me/api/");
    }
}