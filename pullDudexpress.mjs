import xml2js from 'xml2js'
import axios from 'axios';
const pullDude =  async () =>{
    const { data: xmlData } =  await axios.get(
    "https://dudexpress.it/rss"
    );
    const res = await xml2js.parseStringPromise(xmlData)
    const targetReview = res.rss.channel[0].item[0];
    //console.log("⭐️",targetReview);
    return targetReview ; 
}

export default pullDude