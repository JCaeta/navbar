import axios from "axios";
import * as https from 'https';

const url = "https://localhost:7093"

export async function sendGetRequest(){
    const response = await axios.get<any>(url + '/Text/random', { httpsAgent: new https.Agent({ rejectUnauthorized: false }) });
    // The option { httpsAgent: new https.Agent({ rejectUnauthorized: false }) } used only for testing purposes. It disables the SSL certificate security
    return response;
}
