const display = document.getElementById("display");

function generarHistoria() {
  const name = getName();
  const aLocation = getLocation();
  const aventure = getAventure();
  const end = getEnd();
  let text = getText(name);
  let textLocation = getTextLocation(aLocation, name);
  let textAventure = getTextAventure(aventure, name, aLocation);
  let textEnd = getTextEnd(end, aLocation, name);
  let history = text + textLocation + textAventure + textEnd;
  display.innerText = history;
}

//Obtener name, tipo de aventura, lugar y final.
function getName() {
  return document.getElementById("name").value;
}
function getAventure() {
  return document.getElementById("aventure").value;
}
function getLocation() {
  const listLocation = ["Monte", "Volcán", "Bosque"];
  return listLocation[Math.floor(Math.random() * listLocation.length)];
}
function getEnd() {
  return document.querySelector("input[type='radio']:checked").value;
}

//Creación de texto:
function getText(name) {
  const texto1 =
    "En un mundo lleno de misterios y posibilidades," +
    name +
    " se embarcó en una emocionante aventura. Su destino estaba entrelazado con decisiones cruciales que darían forma al curso de su viaje. La elección del tipo de aventura, el lugar donde se desarrollaría y el deseo de un final bueno o malo influirían en los eventos que aguardaban en cada paso.";
  return texto1;
}
function getTextLocation(location, name) {
  if (location === "Monte") {
    return ` Las cumbres nevadas de la montaña helada se alzaban ante los ojos de ${name}, ofreciendo un desafío impresionante. Entre la nieve y el hielo, se enfrentó con criaturas misteriosas y descubrió antiguos secretos.`;
  } else if (location === "Volcán") {
    return ` El rugido del volcán en erupción resonaba en los oídos de ${name}, creando una atmósfera intensa y peligrosa.En la tierra devastada por la lava, se enfrentó a la furia de la naturaleza y emergió con una trás otra victoria.`;
  } else {
    return `El bosque verde susurraba secretos únicamente para los oídos más audaces, con sus árboles antiguos y caminos ocultos la probabilidad de encontrar un tesoro aumentaba.Entre las sombras del denso bosque, un terror indescriptible acechaba. Los susurros del viento pronunciaban su name, y se dio cuenta de que algo le acompañaba en aquel solitario lugar. La oscuridad del bosque se cerró a su alrededor, llevándole a un final desafiante y aterrador.`;
  }
}
function getTextAventure(aventure, name, aLocation) {
  if (aventure === "terror") {
    return `La noche envolvía al ${aLocation} en un manto de oscuridad, mientras ${name} avanzaba con cautela.
    Los árboles susurraban secretos siniestros, y el viento llevaba ecos de lamentos antiguos.
    Cada paso de ${name} resonaba en la quietud, como un latido acelerado en medio de la penumbra.
    De repente, una sombra se alzó ante ${name}, deforme y amenazante, provocando un grito ahogado de horror.
    El ${aLocation} parecía tener vida propia, susurros y suspiros llenaban el aire, desafiando la razón de ${name}.
    El terror se apoderó de ${name}, mientras criaturas indescriptibles acechaban en la oscuridad, esperando el momento adecuado para revelarse.
    Entre la oscuridad, ${name} descubrió un antiguo artefacto, un objeto misterioso que brillaba con una luz tenebrosa.
    `;
  } else if (aventure === "happy") {
    return `Con una sonrisa en el rostro, ${name} exploró el ${aLocation} lleno/a de colores y risas.
    En su camino, ${name} se encontró con un grupo de ardillas bromistas que le jugaron divertidas travesuras.
    Una rana parlante le contó chistes durante todo el viaje, haciendo que ${name} no pudiera contener la risa.
    La aventura de ${name} estuvo llena de situaciones cómicas y ocurrencias inesperadas.
    Incluso los árboles parecían tener personalidades graciosas, haciendo que ${name} se sintiera parte de un cómic gigante.
    Durante la travesía, ${name} encontró un objeto inusual, algo que parecía salido directamente de una comedia surrealista.
    `;
  } else if (aventure === "caos") {
    return `El ${aLocation} temblaba con la energía caótica mientras ${name} avanzaba con valentía pero con una creciente sensación de desorden.
    Los elementos se volvían impredecibles: vientos furiosos, llamas caóticas y criaturas con formas distorsionadas.
    Cada elección de ${name} parecía desencadenar reacciones inesperadas, llevando la aventura por caminos tumultuosos.
    En medio del caos, ${name} se encontró con un artefacto extraño, una manifestación física del desorden que reinaba en el ${aLocation}.
    El tiempo parecía distorsionarse, y ${name} se vio envuelto/a en una danza caótica de eventos que desafiaban toda lógica.
    La resolución de la aventura fue tan impredecible como el camino que la llevó, dejando a ${name} con una sensación de asombro y confusión.
    `;
  } else {
    return `Bajo el cielo radiante del ${aLocation}, ${name} emprendió una épica búsqueda llena de nobleza y determinación.
    Cada desafío era una oportunidad para demostrar valentía y bondad, y ${name} enfrentó cada obstáculo con un espíritu heroico.
    Criaturas malévolas se cruzaron en el camino de ${name}, pero la luz de la justicia guiaba cada movimiento.
    El ${aLocation} se convirtió en el escenario de hazañas heroicas, con ${name} como el protector/a de la tierra y su gente.
    Al final del viaje, ${name} descubrió un objeto sagrado, un símbolo de su heroísmo destinado a cambiar el curso de la historia.
    `;
  }
}
function getTextEnd(end, aLocation, name) {
  if (end === "tragico") {
    return `Desafortunadamente, la aventura de ${name} tomó un giro oscuro y desafiante.
    A pesar de los desafíos, ${name} perseveró, enfrentando las consecuencias de sus decisiones.
    El ${aLocation} guardaba secretos insondables, y ${name} se sumió en la oscuridad sin retorno.
    El final fue desgarrador, marcando el fin de una historia que el mundo olvidaría.
    El objeto descubierto por ${name}, lejos de ser una bendición, desencadenó eventos catastróficos que cambiaron el destino de ${name} para siempre.
    `;
  } else {
    return `Al final, ${name} logró completar la aventura con éxito y regresó a casa como un/a héroe/heroína aclamado/a.
    Los logros de ${name} fueron recordados en canciones y leyendas, dejando un legado duradero.
    El objeto encontrado por ${name} resultó ser la clave de la victoria, otorgándole poderes extraordinarios y el reconocimiento de todos.
    `;
  }
}

function reiniciarHistoria() {
  display.innerText = "";
}
