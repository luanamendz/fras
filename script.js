const frases = {
  manha: [
    "Bom dia, pp! Que seu dia comece com sorrisos, cafezinho quentinho e um universo inteiro torcendo pela sua felicidade.\nNunca esquece: você é maravilhosa, engraçada e incrivelmente especial.\nVai lá e arrasa, do jeitinho que só você sabe! ☀️",
    "Acorda, pp! Hoje o mundo tá mais bonito só porque você existe.\nSeu sorriso ilumina mais que qualquer estrela desse céu.\nTe desejo um dia cheio de alegrias, risadas e coisas boas! 🌻",
    "Ei, pp! Se o sol demorou pra sair, é porque ele ficou com inveja do seu brilho.\nQue hoje você conquiste coisas incríveis, dê risada até do vento e saiba que alguém aqui pensa muito em você.\nTe adoro, estrelinha! 💫"
  ],
  tarde: [
    "Boa tarde, pp! Que sua tarde seja doce, leve e cheia de momentos que fazem seu coração sorrir.\nVocê é tipo café da tarde: essencial, quentinha e dá vontade de ficar pertinho pra sempre.\nSe cuida, tá? ✨",
    "Sabe aquele abraço apertado? Tá te esperando nas entrelinhas dessa mensagem, pp.\nQue sua tarde seja cheia de paz, amor e umas risadas bobas.\nE nunca esquece: você é incrível, linda e iluminada! ☀️",
    "Ei, pp! Lembrete carinhoso da tarde: você é uma pessoa absolutamente maravilhosa.\nSe a vida fosse uma série, você seria a personagem favorita de todo mundo.\nSegue brilhando por aí, tá? 🌟"
  ],
  noite: [
    "Boa noite, pp! Que as estrelas cuidem dos seus sonhos assim como você cuida de quem te ama.\nQue seu descanso seja leve, cheio de paz e de sonhos bonitos.\nAmanhã tem mais amor, mais vida e mais você encantando o mundo. 🌙",
    "Quando a noite chega, as estrelas cochicham: 'A pp é uma das pessoas mais especiais do universo'.\nQue você durma com o coração quentinho, sabendo que é muito amada.\nDurma bem, meu pedacinho de céu. ✨",
    "O dia foi longo, mas você venceu mais uma vez, pp.\nAgora é hora de fechar os olhos e deixar que o universo te embale num soninho cheio de amor e paz.\nVocê é luz, você é amor, você é tudo de bom. 🌌"
  ]
};

function escolherFrase() {
  const hora = new Date().getHours();
  let periodo = '';

  if (hora >= 5 && hora < 12) {
    periodo = 'manha';
  } else if (hora >= 12 && hora < 18) {
    periodo = 'tarde';
  } else {
    periodo = 'noite';
  }

  const lista = frases[periodo];
  const index = new Date().getDate() % lista.length;
  document.getElementById('frase').innerText = lista[index];
}

escolherFrase();
