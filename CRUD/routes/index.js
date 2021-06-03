const express = require('express');
const router = express.Router();
const dbConnect = require("../lib/db");

/* GET home page. */
router.get('/', function (req, res, next) {
  dbConnect.query(`
    SELECT  hr.id as id,
            hr.name as name,
            th.id as typeId,
            th.name as typeName,
            hr.photo as photo 
    FROM heroes hr JOIN typeheroes th
    ON hr.type_id = th.id
    ORDER BY hr.id 
    `, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
        res.render('heroes/index', {
          title: 'Home',
          data: data,
        });
      }
    }
  )
});

router.get("/add", (req, res) => {
  dbConnect.query("SELECT * FROM typeheroes", (error, data) => {
    const dataType = data;
    if (error) {
      console.log(error);
    } else {
      res.render("heroes/add", {
        dataType,
        id: "",
        name: "",
        typeName: "",
        photo: "",
        idType: "",
      });
    }
  })
 
})

router.post("/store", (req, res) => {

  const storeData = {
    namaHero: req.body.name,
    idType: req.body.idType,
    photo: req.body.photo,
  };

  let error = false;

  if (!storeData.namaHero.length || !storeData.idType.length || !storeData.photo.length) {
    error = true;
    req.flash("error", "Semua data harus di isi!!");
    res.render("heroes/add", {
      namaHero: storeData.namaHero,
      idType: storeData.idType,
      photo: storeData.photo,
    });
  }
  else {
    const formData = {
      name: storeData.namaHero,
      type_id: storeData.idType,
      photo: storeData.photo,
    }
  
    dbConnect.query("INSERT INTO heroes SET ?", formData, (error) => {
      if (error) {
        console.log(error);
        req.flash("error data", error);
      } else {
        req.flash("success", "Berhasil Add Heroes")
        console.log(data);
        res.redirect("../heroes")
      }
    }) 
  }
})

router.get("/delete/(:id)", (req, res) => {
  const id = req.params.id;

  dbConnection.query("DELETE FROM heroes WHERE id = " + id, (error) => {
    if (error) {
      req.flash("error datanya", error);
      console.log(error);
    } else {
      console.log(data);
      req.flash("success", "Berhasil Delete Hero");
      res.redirect("/heroes");
    }
  })
});

module.exports = router;
