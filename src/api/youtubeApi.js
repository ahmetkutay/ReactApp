import axios from 'axios';

const KEY = 'AIzaSyDZUAGXPGq5rdfMIyM7eo5LtLfUEsHp6fc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:'5',
        key:KEY
    }
});