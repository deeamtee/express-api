const data = [
  { id: 1, title: "Илидан Ярость Бури", img: 'https://cs9.pikabu.ru/post_img/2020/08/15/5/1597477967140339983.jpg' },
  { id: 2, title: "Король Лич", img: "https://static.wikia.nocookie.net/villains/images/7/7c/The_Lich_King.jpg"},
  { id: 3, title: "Утер Светоносный", img: "https://pm1.aminoapps.com/7314/3a0986a6f112a394b64d45d590a0d4c8487013b3r1-837-1200v2_00.jpg" },
  { id: 4, title: "Тралл", img: "https://pm1.aminoapps.com/7070/89285468508878d4dd8885160feade0f0fb9337ar1-1200-1262v2_00.jpg" },
  { id: 5, title: "Гном Гномыч", img: "https://pm1.aminoapps.com/6849/482b99d253dde0d69388da7e40c040d50c576704v2_hq.jpg" },
];

const extendedData = [
  { 
    id: 1, 
    title: "Илидан Ярость Бури", 
    img: 'https://cs9.pikabu.ru/post_img/2020/08/15/5/1597477967140339983.jpg',
    description: "Илидан Ярость Бури — один из самых могущественных демонов-охотников в истории Азерота. Его путь был полон сложных решений и жертв, приведших к проклятию и его превращению в принца демонов.",
    story: "Илидан был одним из вождей Ночной эльфийской империи. В его жизни были моменты славы и унижений. Он стал принцем демонов, стремясь к могуществу для спасения своего народа, но его поступки привели к разрушению и проклятию. Его история полна борьбы, жертв и вечной войны против Бездны."
  },
  { 
    id: 2, 
    title: "Король Лич", 
    img: "https://static.wikia.nocookie.net/villains/images/7/7c/The_Lich_King.jpg",
    description: "Король Лич — одно из самых жутких и могущественных существ в Азероте. Он является объединением души принца Артаса Менетила и Нер'зула, превратившегося в Нер'зула Короля-лича.",
    story: "Артас, стремясь спасти свой мир от вторжения Искусителя Архимонда, взял на себя могущественное руническое оружие Фростмурн. Однако, он попал под влияние оружия, превратившись в Короля Лича. Его история тесно связана с предательством, потерей человечности и несметным количеством жертв."
  },
  { 
    id: 3, 
    title: "Утер Светоносный", 
    img: "https://pm1.aminoapps.com/7314/3a0986a6f112a394b64d45d590a0d4c8487013b3r1-837-1200v2_00.jpg",
    description: "Утер Светоносный — один из самых известных паладинов в истории Азерота. Он служил верой и праведностью, защищая своих союзников в битвах.",
    story: "Утер был верным сторонником света и чести. Он был одним из основателей Ордена Серебряной Руки и посвятил свою жизнь защите других. Его история наполнена доблестью, верой и жертвой ради добра."
  },
  { 
    id: 4, 
    title: "Тралл", 
    img: "https://pm1.aminoapps.com/7070/89285468508878d4dd8885160feade0f0fb9337ar1-1200-1262v2_00.jpg",
    description: "Тралл — вождь клана орков и один из ключевых персонажей в истории Азерота. Он стремится к миру между расами и защите своего народа от порабощения и войны.",
    story: "Тралл был рабом, плененным людьми, но впоследствии освободился и возглавил орду орков. Он боролся за свободу своего народа и стремился к миру с другими расами. Его история полна силы, решимости и желания мира."
  },
  { 
    id: 5, 
    title: "Гном Гномыч", 
    img: "https://pm1.aminoapps.com/6849/482b99d253dde0d69388da7e40c040d50c576704v2_hq.jpg",
    description: "Гном Гномыч — известный герой, создавший множество изобретений и технологий, которые помогли Азероту в различных сферах жизни.",
    story: "Гном Гномыч был гением в разработке новых механизмов и технологий. Он создал множество изобретений, которые помогли облегчить жизнь обитателям Азерота. Его история наполнена изобретательностью, умом и вкладом в технический прогресс."
  },
];

function getCards(req, res) {
  res.status(200).send({
    data: extendedData,
  });
}

function getCard (req, res) {
    const { id } = req.params;
    res.status(200).send(extendedData[id - 1])
}

module.exports = {
  getCards,
  getCard
};
