"use strict";

const axios = require("axios");
const Apimod = require("../modules/apiMod");
const apiData = async (req, res) => {
  const url = `https://watches-world.herokuapp.com/watches-list/`;
  await axios.get(url).then((response) => {
    const dataApi = response.data.map((e) => {
      return new Apimod(e);
    });
    res.send(dataApi);
  });
};

module.exports = { apiData };
