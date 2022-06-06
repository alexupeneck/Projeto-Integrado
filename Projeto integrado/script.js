// Objetos que uma API ou banco de dados irá prover
const cidadesRO = ["Alta Floresta do Oeste", "Alto Paraíso", "Ariquemes", "Buritis", "Cacoal", "Candeias do Jamari", "Cerejeiras", "Colorado do Oeste", "Espigão do Oeste", "Extrema", "Guajara-Mirim", "Itapua do Oeste", "Jaci Parana", "Jaru", "Ji-Parana", "Machadinho do Oeste", "Ouro Preto do Oeste", "Piementa Bueno", "Porto Velho", "Rolim de Moura", "Sao Francisco do Guapore", "Vale do Paraiso", "Vilhena", "Vista Alegre do Abuna"];
const cidadesSP = ["Sao Paulo", "Campinas", "Santos"];
const cidadesMT = ["Cuiaba", "Sinope"];

// dados da faculdade mock
const faculdades = [
  { nome: "Unopar", cidade: "Alta Floresta do Oeste", endereco: "AVENIDA MINAS GERAIS, 4687, CIDADE ALTA"},
  { nome: "Unopar", cidade: "Alto Paraíso", endereco: "RUA PATRICIA MARINHO, 3547, CENTRO"},
  { nome: "Unopar", cidade: "Ariquemes", endereco: "AVENIDA TANCREDO NEVES, 3635, SETOR 05"},
  { nome: "Unopar", cidade: "Buritis", endereco: "AVENIDA PORTO VELHO, 1198, SETOR 02"},
  { nome: "Unopar", cidade: "Cacoal", endereco: "AVENIDA GUAPORE, 2236, CENTRO"},
  { nome: "Unopar", cidade: "Candeias do Jamari", endereco: "AVENIDA TRANSCONTINENTAL, 361, UNIAO"},
  { nome: "Unopar", cidade: "Cerejeiras", endereco: "RUA NOVA ZELANDIA, 1790, CENTRO"},
  { nome: "Unopar", cidade: "Colorado do Oeste", endereco: "AVENIDA MARECHAL RONDON, 3510, CENTRO"},
  { nome: "Unopar", cidade: "Espigão do Oeste", endereco: "RUA ACRE, 2212, SAO JOSE"},
  { nome: "Unopar", cidade: "Extrema", endereco: "AVENIDA PRINCIPAL, 1120"},
  { nome: "Unopar", cidade: "Guajara-Mirim", endereco: "AVENIDA XV DE NOVEMBRO, 1922, SERRARIA"},
  { nome: "Unopar", cidade: "Itapua do Oeste", endereco: "RUA TANCREDO NEVES, 2181, CENTRO"},
  { nome: "Unopar", cidade: "Jaci Parana", endereco: "RUA HILARIO MAIA, 530"},
  { nome: "Unopar", cidade: "Jaru", endereco: "BELO HORIZONTE, 1243, SETOR 03"},
  { nome: "Unopar", cidade: "Ji-Parana", endereco: "RUA ALMIRANTE BARROSO, 1335, CENTRO"},
  { nome: "Unopar", cidade: "Machadinho do Oeste", endereco: "AVENIDA JOAO BATISTA FIGUEIREDO, 3006, UNIAO II"},
  { nome: "Unopar", cidade: "Ouro Preto do Oeste", endereco: "RUA MARECHAL RONDON, 593, ALVORADA"},
  { nome: "Unopar", cidade: "Piementa Bueno", endereco: "AVENIDA CASTELO BRANCO, 99, ALVORADA"},
  { nome: "Unopar", cidade: "Porto Velho", endereco: "RUA MATRINCHA, 996, LAGOA"},
  { nome: "Unopar", cidade: "Porto Velho", endereco: "RUA CAETANO, 2987, CALADINHO"},
  { nome: "Unopar", cidade: "Rolim de Moura", endereco: "AVENIDA 25 DE AGOSTO, 5445, CENTRO"},
  { nome: "Unopar", cidade: "Sao Francisco do Guapore", endereco: "PRESIDENTE CASTELO BRANCO, 3821, CENTRO"},
  { nome: "Unopar", cidade: "Vale do Paraiso", endereco: "AVENIDA PARANA, 4338, CENTRO"},
  { nome: "Unopar", cidade: "Vilhena", endereco: "RUA CARLOS STHAL, 5445, JARDIM ELDORADO"},
  { nome: "Unopar", cidade: "Vista Alegre do Abuna", endereco: "AVENIDA ANTONIO MIOTTO, S/N, CENTRO"},


];

// populando os campos com uma logica bem simples
function changeEstado() {
  var estado = $('[name="estados"]').val();
  var options = "";
  
  switch (estado) {
    case "ro":
        cidadesRO.forEach((cidade) => {
          options = options + "<option>"+cidade+"</option>";          
        });
      $('[name="cidades"]').html(options);
      $('[name="board"]').html(cards);
      break;
    case "sp":
        cidadesSP.forEach((cidade) => {
          options = options + "<option>"+cidade+"</option>"          
        })
      $('[name="cidades"]').html(options);
      $('[name="board"]').html(cards);
      break;
      case "mt":
        cidadesMT.forEach((cidade) => {
          options = options + "<option>"+cidade+"</option>"          
        })
      $('[name="cidades"]').html(options);
      $('[name="board"]').html(cards);
      break;
  }
}

function changeCidade() {
  var cidade = $('[name="cidades"]').val();
  var cards = "";
  
  faculdades.forEach((item) => {
    if (item["cidade"] == cidade) {    
    cards = cards + "<div class='card'><span>"+item["nome"]+"</span><span>"+item["cidade"]+"</span><span>"+item["endereco"]+"</span></div>"
        
      $('[name="board"]').html(cards);
    }
  })
}

$(document).ready(function () {
  changeEstado();
  $('select[name="estados"]').on("change", function () {
    changeEstado();
  });
  
  changeCidade()
  $('select[name="cidades"]').on("change", function () {
    changeCidade();
  });
 
});
