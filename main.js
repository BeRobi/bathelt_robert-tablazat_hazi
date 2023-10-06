import { KULCS, LISTA } from "./adatok.js";
import ListaMegjelenit from "./Megjelenit.js";

$(function () {
  const szuloElem = $(".tartalom");
  new ListaMegjelenit(KULCS, LISTA, szuloElem);
});
