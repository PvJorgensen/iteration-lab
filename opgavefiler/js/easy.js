/* opgave 1 */
console.group("opgave 1");
// din kode her
function udskrivTal() {
    let resultatElement = document.getElementById("opgave1");

    for (let i = 1; i <= 10; i++) {
        console.log(i);

        let talElement = document.createElement("p");
        talElement.textContent = i;

        resultatElement.appendChild(talElement);
    }
}
  
  udskrivTal();
  

console.groupEnd();


/* opgave 2 */
console.group("opgave 2");
// din kode her
function udskrivTal2() {
    let resultatElement = document.getElementById("opgave2");

    for (let i = 10; i <= 11; i++) {
        console.log(i);

        let talElement2 = document.createElement("p");
        talElement2.textContent = i;

        resultatElement.appendChild(talElement2);
    }
}


udskrivTal2();
  

  


/* opgave 3 */
console.group("opgave 3");
// din kode her
function udskrivLigeTal() {
    var resultatElement = document.getElementById("opgave3");
  
    for (var i = 2; i <= 40; i += 2) {
      console.log(i);
  
      var talElement = document.createElement("p");
      talElement.textContent = i;
  
      resultatElement.appendChild(talElement);
    }
  }
  
  udskrivLigeTal();
  

console.groupEnd();









