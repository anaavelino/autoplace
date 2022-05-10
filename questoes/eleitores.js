class Votos {
  constructor(totalVotos, votosValidos, votosBrancos, votosNulos) {
    this.totalVotos = totalVotos;
    this.votosValidos = votosValidos;
    this.votosBrancos = votosBrancos;
    this.votosNulos = votosNulos;
  }

  get votos() {
    return this.totalVotos;
  }
  get validos() {
    return this.calcVotosValidos();
  }

  get Brancos() {
    return this.calcVotosBrancos();
  }

  get Nulos() {
    return this.calcVotosNulos();
  }

  calcVotosValidos() {
    const _percentual = (this.votosValidos / this.totalVotos) * 100;
    return _percentual;
  }
  calcVotosBrancos() {
    const _percentual = (this.votosBrancos / this.totalVotos) * 100;
    return _percentual;
  }

  calcVotosNulos() {
    const _percentual = (this.votosNulos / this.totalVotos) * 100;
    return _percentual;
  }
}

const percetualVotos = new Votos(1000, 800, 150, 50);

console.log('Total de Votos: ' + percetualVotos.votos, 'votos');
console.log('Total Votos Válidos: ' + percetualVotos.validos, '%');
console.log('Total Votos em Branco: ' + percetualVotos.Brancos, '%');
console.log('Total Votos Nulos: ' + percetualVotos.Nulos, '%');
