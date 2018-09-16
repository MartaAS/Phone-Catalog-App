var express = require('express')
var http = require('http')
var app = express()

var phones = [{
  "id": 1,
  "name": "Samsung Galaxy J7 (2017)",
  "color": "Plata",
  "price": "189 €",
  "image": "https://d243u7pon29hni.cloudfront.net/imagesOnDemand/get?imagePath=/images/products/movil-samsung-galaxy-j7-2017-16gb-1367560-1_l.png&width=480&height=480&quality=65&imgType=product",
  "description": "Diseño y funcionalidad van de la mano en el móvil Samsung Galaxy J7 (2017) en color plata y con Dual SIM, que te permitirá tener dos números de teléfono en el mismo smartphone. Un móvil con pantalla Full HD Amoled de 5.5 pulgadas y un procesador de 8 núcleos para que puedas disfrutar de una experiencia visual única y sorprendente. ",
  "showDetails": false
},
{
  "id": 2,
  "name": "iPhone X",
  "color": "Plata",
  "price": "1029 €",
  "image": "https://d243u7pon29hni.cloudfront.net/imagesOnDemand/get?imagePath=/images/products/apple-ipho-x-5-8p4g6n64gbs-1382454-1_l.png&width=480&height=480&quality=65&imgType=product",
  "description": "Una de las mayores revoluciones del iPhone X es su pantalla. Todo el Smartphone es una pantalla Super Retina de 5.8 pulgadas. ¡Adiós al botón Home para navegar! Pero es que esto no acaba aquí... ¿Recuerdas cuando desbloqueábamos el móvil con un PIN, un patrón o incluso con la huella dactilar? Deja de vivir en el pasado. Este teléfono incorpora Face ID para que lo desbloquees… ¡Con tu cara! La cámara hace un mapeo facial en profundidad para que tú seas la misma contraseña.",
  "showDetails": false
},
{
  "id": 3,
  "name": "Huawei P Smart +",
  "color": "Negro",
  "price": "289€",
  "image": "https://d243u7pon29hni.cloudfront.net/imagesOnDemand/get?imagePath=/images/products/movil-huawei-p-smart-plus-63-full-hd-kirin-negro-1427900_l.png&width=480&height=480&quality=65&imgType=product",
  "description": "El móvil Huawei P Smart + presenta un gran salto diferencial respecto a su predecesor. Cuenta con una pantalla de 6.3 pulgadas y un procesador Kirin 710 para que no necesites nada más. Sus prestaciones te dejarán alucinado.",
  "showDetails": false
},
{
  "id": 4,
  "name": "Samsun Galaxy Note 9",
  "color": "Negro",
  "price": "1259 €",
  "image": "https://d243u7pon29hni.cloudfront.net/imagesOnDemand/get?imagePath=/images/products/movil-samsung-galaxy-note-9-6.4-pulgadas-quad-hd-plus-1427344-1_l.png&width=480&height=480&quality=65&imgType=product",
  "description": "La revolución ya está aquí y tiene forma de smartphone. Ya te puedes agarrar bien fuerte porque el móvil Samsung Galaxy Note 9 en color negro te sorprenderá con unas prestaciones que no te dejarán indiferente. Desde su procesador Octa-core hasta su memoria interna y otros tantos componentes que te garantizan un funcionamiento del más alto nivel.",
  "showDetails": false
},
{
  "id": 5,
  "name": "Xiaomi MI A1",
  "color": "Dorado",
  "price": "179 €",
  "image": "https://d243u7pon29hni.cloudfront.net/imagesOnDemand/get?imagePath=/images/products/movil-xiaomi-mi-a1-5.5-full-hd-4k-4g-32-1394745_l.png&width=480&height=480&quality=65&imgType=product",
  "description": "El móvil Xiaomi MI A1 dorado viene pisando fuerte con un cambio importante en su interior, ya que usa Android Nougat 7.1.2. Podrás disfrutar de tu contenido favorito gracias a una pantalla en Full HD de 5,5 pulgadas y hacer fotografías de calidad con su cámara de 12 megapíxeles.",
  "showDetails": false
},
{
  "id": 6,
  "name": "Motorola Moto E4",
  "color": "Negro",
  "price": "79 €",
  "image": "https://d243u7pon29hni.cloudfront.net/imagesOnDemand/get?imagePath=/images/products/movil-motorola-moto-e4-5-hd-2-gb-ram-1367741_l.png&width=480&height=480&quality=65&imgType=product",
  "description": "Más velocidad, más duración en la batería, más conectividad… Prueba el Smartphone de Motorola Moto E4 en gris y disfruta de sus mejoradas prestaciones que sumarán en tu día a día.",
  "showDetails": false
},
{
  "id": 7,
  "name": "Huawei P20 Lite",
  "color": "Azul",
  "price": "318 €",
  "image": "https://d243u7pon29hni.cloudfront.net/imagesOnDemand/get?imagePath=/images/products/movil-huawei-p20-lite-fullview-5.84-full-1401774-2_ad_l_l.png&width=480&height=480&quality=65&imgType=product",
  "description": "Potente, resistente, funcional, casi del futuro. El móvil Huawei P20 Lite de color azul pone a tu disposición una tecnología premium para que tengas una experiencia única. Un procesador potente, red 4G, buena seguridad, fotos casi profesionales, etc. Todo esto y más es lo que te ofrece este smartphone de Huawei.",
  "showDetails": false
}
];


app.get('/phone', (req, res) => {
  res.send(phones)
});

app.get('/phone/:id', function (req, res, next) {
  var itemId = req.params.id;
  var phoneselect = phones.filter(phones => phones["id"] == itemId);
  res.send(phoneselect);
});

app.get('/', (req, res) => {
  res.status(200).send("Welcome to my API")
});

http.createServer(app).listen(8001, () => {
  console.log('Server started at http://localhost:8001');
});