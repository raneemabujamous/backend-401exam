"use strict";
class Apimod {
  constructor(data) {
    this.title = data.title;
    this.description = data.description;
    this.toUSD = data.toUSD;
    this.image_url = data.image_url;
  }
}
module.exports = Apimod;
