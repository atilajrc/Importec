var codigoProduto = ["001", "146541", "122054", "146240", "146541", "122054", "146240", "146541", "122054", "146240", "146541", "122054", "146240", "146541", "122054", "146240", "146541", "122054", "146240", "020", "021", "146240", "146541", "122054", "146240", "146541", "122054", "146240", "146541", "122054", "146240", "146541", "122054", "146240", "146541", "122054", "146240", "146541", "122054", "040", "041", "122054", "146240", "146541", "122054", "146240", "146541", "122054", "146240", "146541", "122054", "146240", "146541", "122054", "146240", "146541", "122054", "146240", "146541", "060"]

var descricaoProduto = ["VARAL CHAO C/ABAS CINZA 180X105CM", "CANECA PORC 295ML DOTS COR SORTIDA", "PEN DRIVE TWIST 32GB", "VARAL CHAO C/ABAS CINZA 180X105CM", "CANECA PORC 295ML DOTS COR SORTIDA", "PEN DRIVE TWIST 32GB", "VARAL CHAO C/ABAS CINZA 180X105CM", "CANECA PORC 295ML DOTS COR SORTIDA", "PEN DRIVE TWIST 32GB", "VARAL CHAO C/ABAS CINZA 180X105CM", "CANECA PORC 295ML DOTS COR SORTIDA", "PEN DRIVE TWIST 32GB", "VARAL CHAO C/ABAS CINZA 180X105CM", "CANECA PORC 295ML DOTS COR SORTIDA", "PEN DRIVE TWIST 32GB", "VARAL CHAO C/ABAS CINZA 180X105CM", "CANECA PORC 295ML DOTS COR SORTIDA", "PEN DRIVE TWIST 32GB", "VARAL CHAO C/ABAS CINZA 180X105CM", "CANECA PORC 295ML DOTS COR SORTIDA", "PEN DRIVE TWIST 32GB", "VARAL CHAO C/ABAS CINZA 180X105CM", "CANECA PORC 295ML DOTS COR SORTIDA", "PEN DRIVE TWIST 32GB", "VARAL CHAO C/ABAS CINZA 180X105CM", "CANECA PORC 295ML DOTS COR SORTIDA", "PEN DRIVE TWIST 32GB", "VARAL CHAO C/ABAS CINZA 180X105CM", "CANECA PORC 295ML DOTS COR SORTIDA", "PEN DRIVE TWIST 32GB", "VARAL CHAO C/ABAS CINZA 180X105CM", "CANECA PORC 295ML DOTS COR SORTIDA", "PEN DRIVE TWIST 32GB", "VARAL CHAO C/ABAS CINZA 180X105CM", "CANECA PORC 295ML DOTS COR SORTIDA", "PEN DRIVE TWIST 32GB", "VARAL CHAO C/ABAS CINZA 180X105CM", "CANECA PORC 295ML DOTS COR SORTIDA", "PEN DRIVE TWIST 32GB", "VARAL CHAO C/ABAS CINZA 180X105CM", "CANECA PORC 295ML DOTS COR SORTIDA", "PEN DRIVE TWIST 32GB", "VARAL CHAO C/ABAS CINZA 180X105CM", "CANECA PORC 295ML DOTS COR SORTIDA", "PEN DRIVE TWIST 32GB", "VARAL CHAO C/ABAS CINZA 180X105CM", "CANECA PORC 295ML DOTS COR SORTIDA", "PEN DRIVE TWIST 32GB", "VARAL CHAO C/ABAS CINZA 180X105CM", "CANECA PORC 295ML DOTS COR SORTIDA", "PEN DRIVE TWIST 32GB", "VARAL CHAO C/ABAS CINZA 180X105CM", "CANECA PORC 295ML DOTS COR SORTIDA", "PEN DRIVE TWIST 32GB", "VARAL CHAO C/ABAS CINZA 180X105CM", "CANECA PORC 295ML DOTS COR SORTIDA", "PEN DRIVE TWIST 32GB", "VARAL CHAO C/ABAS CINZA 180X105CM", "CANECA PORC 295ML DOTS COR SORTIDA", "PEN DRIVE TWIST 32GB"]

var imgProduto = ["146240", "8602_a", "122054", "146240", "8602_a", "122054", "146240", "8602_a", "122054", "146240", "8602_a", "122054", "146240", "8602_a", "122054", "146240", "8602_a", "122054", "146240", "8602_a", "122054", "146240", "8602_a", "122054", "146240", "8602_a", "122054", "146240", "8602_a", "122054", "146240", "8602_a", "122054", "146240", "8602_a", "122054", "146240", "8602_a", "122054", "146240", "8602_a", "122054", "146240", "8602_a", "122054", "146240", "8602_a", "122054", "146240", "8602_a", "122054", "146240", "8602_a", "122054", "146240", "8602_a", "122054", "146240", "8602_a", "122054"]


var codigoProduto01 = codigoProduto.splice(0, 20);
var descricaoProduto01 = descricaoProduto.splice(0, 20);
var imgProduto01 = imgProduto.splice(0, 20);
var codigoProduto02 = codigoProduto.splice(0, 20);
var descricaoProduto02 = descricaoProduto.splice(0, 20);
var imgProduto02 = imgProduto.splice(0, 20);

var html = ""

for (var i = 0; i < codigoProduto01.length; i++) {
  html += "<div class='box'>"
  html += "<figure id='fig'>"
  html += "<img alt='' src='https://importecatacado.com.br/img/site/uploads/produtoimagens/IMG_" + imgProduto01[i] + ".jpg' width='150' />"
  html += "<figcaption>" + descricaoProduto01[i] + "<br>Código:" + codigoProduto01[i] + "</figcaption>"
  html += "</figure></a></div>"
  var bloco01 = document.getElementById("bloco01")
  bloco01.innerHTML = html;
}

var html = ""

for (var i = 0; i < codigoProduto02.length; i++) {
  html += "<div class='box'>"
  html += "<figure id='fig'>"
  html += "<img alt='' src='https://importecatacado.com.br/img/site/uploads/produtoimagens/IMG_" + imgProduto02[i] + ".jpg' width='150' />"
  html += "<figcaption>" + descricaoProduto02[i] + "<br>Código:" + codigoProduto02[i] + "</figcaption>"
  html += "</figure></a></div>"
  var bloco01 = document.getElementById("bloco02")
  bloco02.innerHTML = html;
}

var html = ""

for (var i = 0; i < codigoProduto.length; i++) {
  html += "<div class='box'>"
  html += "<figure id='fig'>"
  html += "<img alt='' src='https://importecatacado.com.br/img/site/uploads/produtoimagens/IMG_" + imgProduto[i] + ".jpg' width='150' />"
  html += "<figcaption>" + descricaoProduto[i] + "<br>Código:" + codigoProduto[i] + "</figcaption>"
  html += "</figure></a></div>"
  var bloco01 = document.getElementById("bloco03")
  bloco03.innerHTML = html;
}