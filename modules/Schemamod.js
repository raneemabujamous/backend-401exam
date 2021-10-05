"use strict";
const mongoose = require("mongoose");

const schemamod = mongoose.Schema({
  title: { type: String, unique: true },
  slug: { type: String, unique: true },
  description: { type: String },
  toUSD: { type: String },
  image_url: { type: String },
});
const SchemaObject = mongoose.model("collection", schemamod);
module.exports = SchemaObject;
