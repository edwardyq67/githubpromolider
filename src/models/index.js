const Modelo = require("./modelo");
const PagVenta = require("./pagVenta");
const Plantilla1_gratis_seccion1 = require("./plantilla1_gratis_seccion1");
const Plantilla2_gratis_seccion2 = require("./plantilla2_gratis_seccion2");
const Plantilla3_gratis_seccion3 = require("./plantilla3_gratis_seccion3");
const Plantilla4_gratis_seccion4 = require("./plantilla4_gratis_seccion4");
const Plantilla5_gratis_seccion5 = require("./plantilla5_gratis_seccion5");
const Plantilla6_gratis_seccion6 = require("./plantilla6_gratis_seccion6");


PagVenta.hasMany(Modelo)
Modelo.belongsTo(PagVenta)

PagVenta.hasMany(Plantilla1_gratis_seccion1)
Plantilla1_gratis_seccion1.belongsTo(PagVenta)

PagVenta.hasMany(Plantilla2_gratis_seccion2)
Plantilla2_gratis_seccion2.belongsTo(PagVenta)

PagVenta.hasMany(Plantilla3_gratis_seccion3)
Plantilla3_gratis_seccion3.belongsTo(PagVenta)

PagVenta.hasMany(Plantilla4_gratis_seccion4)
Plantilla4_gratis_seccion4.belongsTo(PagVenta)

PagVenta.hasMany(Plantilla5_gratis_seccion5)
Plantilla5_gratis_seccion5.belongsTo(PagVenta)

PagVenta.hasMany(Plantilla6_gratis_seccion6)
Plantilla6_gratis_seccion6.belongsTo(PagVenta)

