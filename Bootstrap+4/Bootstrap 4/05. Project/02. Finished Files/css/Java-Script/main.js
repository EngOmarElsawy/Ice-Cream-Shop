const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('.engg');


// Choclate
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');
const cartEl = document.querySelector('.araba');
const literEl = document.querySelector('.liter');
const nosEl = document.querySelector('.nos');
const nossEl = document.querySelector('.noss');
const bolaaEl = document.querySelector('.bolaa');
//Fustq
const ftitleEl = document.querySelector('.ftitle');
const fdescrEl = document.querySelector('.fdescription');
const fcartEl = document.querySelector('.faraba');
const fliterEl = document.querySelector('.fliter');
const fnosEl = document.querySelector('.fnos');
const fnossEl = document.querySelector('.fnoss');
const fbolaaEl = document.querySelector('.fbola');
// Vanella 
const vtitleEl = document.querySelector('.vtitle');
const vdescrEl = document.querySelector('.vdescription');
const vcartEl = document.querySelector('.varaba');
const vliterEl = document.querySelector('.vliter');
const vnosEl = document.querySelector('.vnos');
const vnossEl = document.querySelector('.vnoss');
const vbolaaEl = document.querySelector('.vbola');
//Cuppocino
const ctitleEl = document.querySelector('.ctitle');
const cdescrEl = document.querySelector('.cdescription');
const ccartEl = document.querySelector('.caraba');
const cliterEl = document.querySelector('.cliter');
const cnosEl = document.querySelector('.cnos');
const cnossEl = document.querySelector('.cnoss');
const cbolaaEl = document.querySelector('.cbola');
//Nuttella 
const ntitleEl = document.querySelector('.ntitle');
const ndescrEl = document.querySelector('.ndescription');
const ncartEl = document.querySelector('.naraba');
const nliterEl = document.querySelector('.nliter');
const nnosEl = document.querySelector('.nnos');
const nnossEl = document.querySelector('.nnoss');
const nbolaaEl = document.querySelector('.nbola');
//Roman 
const rtitleEl = document.querySelector('.rtitle');
const rdescrEl = document.querySelector('.rdescription');
const rcartEl = document.querySelector('.raraba');
const rliterEl = document.querySelector('.rliter');
const rnosEl = document.querySelector('.rnos');
const rnossEl = document.querySelector('.rnoss');
const rbolaaEl = document.querySelector('.rbola');
//Strawberry
const stitleEl = document.querySelector('.stitle');
const sdescrEl = document.querySelector('.sdescription');
const scartEl = document.querySelector('.saraba');
const sliterEl = document.querySelector('.sliter');
const snosEl = document.querySelector('.snos');
const snossEl = document.querySelector('.snoss');
const sbolaaEl = document.querySelector('.sbola');
//Yousfy
const ytitleEl = document.querySelector('.ytitle');
const ydescrEl = document.querySelector('.ydescription');
const ycartEl = document.querySelector('.yaraba');
const yliterEl = document.querySelector('.yliter');
const ynosEl = document.querySelector('.ynos');
const ynossEl = document.querySelector('.ynoss');
const ybolaEl = document.querySelector('.ybola');
//Banana
const btitleEl = document.querySelector('.btitle');
const bdescrEl = document.querySelector('.bdescription');
const bcartEl = document.querySelector('.baraba');
const bliterEl = document.querySelector('.bliter');
const bnosEl = document.querySelector('.bnos');
const bnossEl = document.querySelector('.bnoss');
const bbolaEl = document.querySelector('.bbola');


link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        // Choclate
        titleEl.textContent = data[attr].title;
        descrEl.textContent = data[attr].description;
        cartEl.textContent = data[attr].araba;
        literEl.textContent = data[attr].liter;
        nosEl.textContent = data[attr].nos;
        nossEl.textContent = data[attr].noss;
        bolaaEl.textContent = data[attr].bolaa;
        //Fustq
        ftitleEl.textContent = data[attr].ftitle;
        fdescrEl.textContent = data[attr].fdescription;
        fcartEl.textContent = data[attr].faraba;
        fliterEl.textContent = data[attr].fliter;
        fnosEl.textContent = data[attr].fnos;
        fnossEl.textContent = data[attr].fnoss;
        fbolaaEl.textContent = data[attr].fbola;
        // Vanella
        vtitleEl.textContent = data[attr].vtitle;
        vdescrEl.textContent = data[attr].vdescription;
        vcartEl.textContent = data[attr].varaba;
        vliterEl.textContent = data[attr].vliter;
        vnosEl.textContent = data[attr].vnos;
        vnossEl.textContent = data[attr].vnoss;
        vbolaaEl.textContent = data[attr].vbola;
        // Cuppocino
        ctitleEl.textContent = data[attr].ctitle;
        cdescrEl.textContent = data[attr].cdescription;
        ccartEl.textContent = data[attr].caraba;
        cliterEl.textContent = data[attr].cliter;
        cnosEl.textContent = data[attr].cnos;
        cnossEl.textContent = data[attr].cnoss;
        cbolaaEl.textContent = data[attr].cbola;
        // Nuttella
        ntitleEl.textContent = data[attr].ntitle;
        ndescrEl.textContent = data[attr].ndescription;
        ncartEl.textContent = data[attr].naraba;
        nliterEl.textContent = data[attr].nliter;
        nnosEl.textContent = data[attr].nnos;
        nnossEl.textContent = data[attr].nnoss;
        nbolaaEl.textContent = data[attr].nbola;
        // Roman
        rtitleEl.textContent = data[attr].rtitle;
        rdescrEl.textContent = data[attr].rdescription;
        rcartEl.textContent = data[attr].raraba;
        rliterEl.textContent = data[attr].rliter;
        rnosEl.textContent = data[attr].rnos;
        rnossEl.textContent = data[attr].rnoss;
        rbolaaEl.textContent = data[attr].rbola;
        // Strawberry
        stitleEl.textContent = data[attr].stitle;
        sdescrEl.textContent = data[attr].sdescription;
        scartEl.textContent = data[attr].saraba;
        sliterEl.textContent = data[attr].sliter;
        snosEl.textContent = data[attr].snos;
        snossEl.textContent = data[attr].snoss;
        sbolaaEl.textContent = data[attr].sbola;
        // Yousfy
        ytitleEl.textContent = data[attr].ytitle;
        ydescrEl.textContent = data[attr].ydescription;
        ycartEl.textContent = data[attr].yaraba;
        yliterEl.textContent = data[attr].yliter;
        ynosEl.textContent = data[attr].ynos;
        ynossEl.textContent = data[attr].ynoss;
        ybolaEl.textContent = data[attr].ybola;
        // Banana
        btitleEl.textContent = data[attr].btitle;
        bdescrEl.textContent = data[attr].bdescription;
        bcartEl.textContent = data[attr].baraba;
        bliterEl.textContent = data[attr].bliter;
        bnosEl.textContent = data[attr].bnos;
        bnossEl.textContent = data[attr].bnoss;
        bbolaEl.textContent = data[attr].bbola;
    });
});

var data = {
    "english": {
        // Choclate
        "title": "Choclate",
        "description": "Chocolate Ice-Cream with best taste and also with the best price. The Ice-Cream is all made with Natural Components",
        "araba": "Add To Cart",
        "liter": "1 Liter",
        "nos": "1/2 Liter",
        "noss": "1/4 Liter",
        "bolaa": "Bola",
        // Fustq
        "ftitle": "Fustq",
        "fdescription": "One of the best Flavuors in our Ice-Cream Shop is the Fustq Flavuor",
        "faraba": "Add To Cart",
        "fliter": "1 Liter",
        "fnos": "1/2 Liter",
        "fnoss": "1/4 Liter",
        "fbola": "Bola",
        // Vanella
        "vtitle": "Vanella",
        "vdescription": "Our Vanella is made of Natural milk and natural Components Really it's different",
        "varaba": "Add To Cart",
        "vliter": "1 Liter",
        "vnos": "1/2 Liter",
        "vnoss": "1/4 Liter",
        "vbola": "Bola",
        // Cuppcuino
        "ctitle": "Cuppcino",
        "cdescription": "The Real Taste Of the Cuppcino is in Our Ice-Cream",
        "caraba": "Add To Cart",
        "cliter": "1 Liter",
        "cnos": "1/2 Liter",
        "cnoss": "1/4 Liter",
        "cbola": "Bola",
        // Nuttella 
        "ntitle": "Nuttella",
        "ndescription": "Real Nutella in Our Ice-Cream",
        "naraba": "Add To Cart",
        "nliter": "1 Liter",
        "nnos": "1/2 Liter",
        "nnoss": "1/4 Liter",
        "nbola": "Bola",
        // Roman
        "rtitle": "Roman",
        "rdescription": "For The Roman Lovers, We have unique taste for them",
        "raraba": "Add To Cart",
        "rliter": "1 Liter",
        "rnos": "1/2 Liter",
        "rnoss": "1/4 Liter",
        "rbola": "Bola",
        // Strawberry
        "stitle": "Strawberry",
        "sdescription": "Natural Strawberry Flavour is Relly prestented in our Ice-Cream",
        "saraba": "Add To Cart",
        "sliter": "1 Liter",
        "snos": "1/2 Liter",
        "snoss": "1/4 Liter",
        "sbola": "Bola",
        // Yousfy
        "ytitle": "Yousfy",
        "ydescription": "We have the Yousfy Taste which is not represented at any store except us",
        "yaraba": "Add To Cart",
        "yliter": "1 Liter",
        "ynos": "1/2 Liter",
        "ynoss": "1/4 Liter",
        "ybola": "Bola",
        // Banana
        "btitle": "Banana",
        "ydescription": "Another Excptional Taste only at Our Shop which is the one of the most loved fruits which is The Banana...",
        "baraba": "Add To Cart",
        "bliter": "1 Liter",
        "bnos": "1/2 Liter",
        "bnoss": "1/4 Liter",
        "bbola": "Bola",
    },
    "arabic": {
        // Choclate
        "title": "الشوكولانه",
        "description": "الشوكولاته الآيس كريم مع أفضل طعم وأيضا مع أفضل الأسعار. الآيس كريم مصنوع من المكونات الطبيعية",
        "araba": "أضف إلي السلة",
        "liter": "ليتر",
        "nos": "نصف ليتر",
        "noss": "ربع ليتر",
        "bolaa": "بولة",
        // Fustq
        "ftitle": "الفستق",
        "fdescription": "واحدة من أفضل النكهات في متجر الآيس كريم لدينا هي نكهة الفستق",
        "faraba": "أضف إلي السلة",
        "fliter": "ليتر",
        "fnos": "نصف ليتر",
        "fnoss": "ربع ليتر",
        "fbola": "بولة",
        // Vanella 
        "vtitle": "فانيليا",
        "vdescription": "لدينا فانيلا مصنوع من الحليب الطبيعي والمكونات الطبيعية حقا انها مختلفة",
        "varaba": "أضف إلي السلة",
        "vliter": "ليتر",
        "vnos": "نصف ليتر",
        "vnoss": "ربع ليتر",
        "vbola": "بولة",
        // Cuppcino
        "ctitle": "كابتشينو",
        "cdescription": "الطعم الحقيقي للكوبتشينو هو في الآيس كريم لدينا",
        "caraba": "أضف إلي السلة",
        "cliter": "ليتر",
        "cnos": "نصف ليتر",
        "cnoss": "ربع ليتر",
        "cbola": "بولة",
        // Nuttella 
        "ntitle": "نوتيلا",
        "ndescription": "نوتيلا حقيقية في الآيس كريم لدينا",
        "naraba": "أضف إلي السلة",
        "nliter": "ليتر",
        "nnos": "نصف ليتر",
        "nnoss": "ربع ليتر",
        "nbola": "بولة",
        // Roman
        "rtitle": "رومان",
        "rdescription": "لعشاق الرومان، لدينا طعم فريد بالنسبة لهم",
        "raraba": "أضف إلي السلة",
        "rliter": "ليتر",
        "rnos": "نصف ليتر",
        "rnoss": "ربع ليتر",
        "rbola": "بولة",
        // Strawberry
        "stitle": "الفراولة",
        "sdescription": "يتم تقديم نكهة الفراولة الطبيعية حقا في الآيس كريم لدينا",
        "saraba": "أضف إلي السلة",
        "sliter": "ليتر",
        "snos": "نصف ليتر",
        "snoss": "ربع ليتر",
        "sbola": "بولة",
        // Yousfy
        "ytitle": "اليوسفي",
        "ydescription": "لأول مرة يقدم اليوسفي داخل الأيس كريم لدينا فقط",
        "yaraba": "أضف إلي السلة",
        "yliter": "ليتر",
        "ynos": "نصف ليتر",
        "ynoss": "ربع ليتر",
        "ybola": "بولة",
        // Banana
        "btitle": "الموز",
        "bdescription": "آخر طعم استثنائي فقط في متجرنا الذي هو واحد من أكثر الفواكه المحبوبة وهو الموز",
        "baraba": "أضف إلي السلة",
        "bliter": "ليتر",
        "bnos": "نصف ليتر",
        "bnoss": "ربع ليتر",
        "bbola": "بولة",
    }
}