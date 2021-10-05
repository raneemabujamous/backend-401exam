"use strict";
const SchemaObject = require("../modules/Schemamod");
const postMethos = async (req, res) => {
  const { title, description, toUSD, image_url } = req.body;
  const slug = title.toLowerCase().split(" ").join("-");
  SchemaObject.find({ slug: slug }, (error, data) => {
    if (data.length) {
      res.send("data exisit");
    } else {
      const newSchemaobj = new SchemaObject({
        title: title,
        slug: slug,
        description: description,
        toUSD: toUSD,
        image_url: image_url,
      });
      newSchemaobj.save();
      res.send(newSchemaobj);
    }
  });
};
const getPostexam = async (req, res) => {
  SchemaObject.find({}, (error, data) => {
    res.send(data);
  });
};
const deleteMethos = async (req, res) => {
  const slug = req.params.slug;
  SchemaObject.remove({ slug: slug }, (error, data) => {
    if (error) {
      res.s(error);
    } else {
      SchemaObject.find({}, (error, data) => {
        res.send(data);
      });
    }
  });
};
const updateMehtod = async (req, res) => {
  const { description, toUSD, image_url } = req.body;
  const slug = req.params.slug;
  console.log(slug);
  SchemaObject.find({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      data[0].description = description;
      data[0].toUSD = toUSD;
      data[0].image_url = image_url;
      data[0].save();
      res.send(data);
    }
  });
};
module.exports = { postMethos, getPostexam, deleteMethos, updateMehtod };
