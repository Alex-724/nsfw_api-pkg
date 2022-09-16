const axios = require("axios");
class NSFW_API {
  constructor() {
    this.url = "https://nsfw-api.herokuapp.com//";
  }
  async getRandomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  async getData() {
    const res = await axios(this.url);
    return res;
  }
  async getAnime(type) {
    if (!type) return await axios(this.url + "anime");
    let res = await axios(this.url + "anime/" + type).catch((err) => {
      return err;
    });
    return res;
  }
  async getRandomAnime(type) {
    if (!type) return await getRandomValue(axios(this.url + "anime"));
    let res = await getRandomValue(await 
      axios(this.url + "anime/" + type)).catch((err) => {
      return err;
    });
    return res;
  }
  async getReal(type) {
    if (!type) return await getRandomValue(axios(this.url + "real"));
    let res = await getRandomValue(await axios(this.url + "real/" + type)).catch((err) => {
      return err;
    });
    return res;
  }
  async getRandomReal(type) {
    if (!type) return await getRandomValue(axios(this.url + "real"));
    let res = await getRandomValue(await axios(this.url + "real/" + type)).catch((err) => {
      return err;
    });
    return res;
  }
}

module.exports = NSFW_API;
