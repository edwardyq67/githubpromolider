const express = require('express');
const routerMarketing = require('./marketing.route');
const routerModelo = require('./modelo.router');
const routerPagVenta = require('./pagVenta.router');
const routerPlantilla1_gratis_seccion1 = require('./plantilla1_gratis_seccion1.route');
const routerPlantilla2_gratis_seccion2 = require('./plantilla2_gratis_seccion2.route');
const routerPlantilla3_gratis_seccion3 = require('./plantilla3_gratis_seccion3.route');
const routerPlantilla4_gratis_seccions4 = require('./plantilla4_gratis_seccion4.router');
const routerPlantilla5_gratis_seccion5 = require('./plantilla5_gratis_seccion5.router');
const routerPlantilla6_gratis_seccion6 = require('./plantilla6_gratis_seccion6.route');
const router = express.Router();

// colocar las rutas aquí

router.use("/marketing",routerMarketing)
router.use("/modelo",routerModelo)
router.use("/pagVenta",routerPagVenta)

router.use('/modelo/routerPlantilla1_gratis_seccion1',routerPlantilla1_gratis_seccion1)
router.use('/modelo/routerPlantilla2_gratis_seccion2',routerPlantilla2_gratis_seccion2)
router.use('/modelo/routerPlantilla3_gratis_seccion3',routerPlantilla3_gratis_seccion3)
router.use('/modelo/routerPlantilla4_gratis_seccion4',routerPlantilla4_gratis_seccions4)
router.use('/modelo/routerPlantilla5_gratis_seccion5',routerPlantilla5_gratis_seccion5)
router.use('/modelo/routerPlantilla6_gratis_seccion6',routerPlantilla6_gratis_seccion6)

module.exports = router;