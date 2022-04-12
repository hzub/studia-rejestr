/*
  Jak to działa, co trzeba było zrobić:

  1. Połapać (querySelector) potrzebne elementy
  2. addEventListener na przycisk ("#btnLoad")
  2.5. Czyścimy wyniki
  3. Dodajemy klasę "visible" do elementu "#loader"
  4. Iterujemy (przechodzimy) po tablicy i w każdym elemencie tablicy:
    - dodajemy dane z tego elementu do struktury HTML naszej strony
  5. Dodajemy dymek z informacją
  6. Schować kręciołek
  7. setTimeout z remove dymku
*/

let btnLoad = document.querySelector("#btnLoad");
let tblData = document.querySelector("#tblData");
let loader = document.querySelector("#loader");
let containerMessages = document.querySelector("#containerMessages");

btnLoad.addEventListener("click", function () {
  loader.classList.add("visible");
  clearElement(tblData);

  setTimeout(function () {
    let dodanyDymek = addElement("Pobrano dane", "message", containerMessages);

    clearElement(tblData);
    for (let i = 0; i < dane.length; i++) {
      let content =
        '<img height="40" src="' +
        dane[i].avatar +
        '" /> ' +
        dane[i].name +
        ", " +
        dane[i].email;
      addElement(content, "person", tblData);
    }
    loader.classList.remove("visible");

    setTimeout(function () {
      dodanyDymek.remove();
    }, 3000);
  }, 1200);
});
