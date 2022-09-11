'use strict';
import header from "./modules/header.js";
import sectionNosotros from "./modules/Section-nosotros.js";

const documentReady = () => {
  header();
  sectionNosotros();
};

document.addEventListener('DOMContentLoaded', documentReady);