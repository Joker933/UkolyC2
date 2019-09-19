function chessBoard(size) {
    var x = prompt("Zadej pocet radku", "0");
    var y = prompt("Zadej pocet sloupců", "0");
    var num1 = parseInt(x);
    var num2 = parseInt(y);
    let html = `<div class="chessboard">\n`;
    for (let row = 0; row < x; row++) {
        html += `  <div>\n`;
        let color = (row % 2 == 0) ? "black" : "white";
        for (let col = 0; col < y; col++) {
            html += `    <span class="${color}"></span>\n`;
            color = (color == "white") ? "black" : "white";
        }
        html += `  </div>\n`;
    }
    return html + `</div>`;
}
 