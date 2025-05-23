// importing express and app behaving like main server
const express = require('express')
const app = express()
const bodyParser= require('body-parser');
const config = require("./config");


const books= [
    {
        title: "Miras",
        author: "Vigdis Hjorth",
        description: "Miras, bir aile portresinin arka planını resmediyor ve gerçeklere dayalı bir travma hikâyesi anlatıyor. \
        Yakınlığın ve yakınların açtığı yaraların, bağların ve bağları koparmanın hikâyesi bu, tiyatro eleştirmeni Bergljot’un ailesine rağmen sağ kalma, \
        yaşamına sahip çıkma mücadelesinin hikâyesi. Soğuk ve karanlık bir hikâye, portredeki gülümsemelerin gerisinde gizleniyor \
        ama tüm saklı şeyler gibi eninde sonunda açığa çıkıyor.Norveç’te büyük ses getiren ve çok satan, çok tartışılan bu roman, babanın ölümüyle başlıyor \
        ve yaranın kökenine iniyor.İnsan ailesini seçemez ama hikâyesini anlatmayı seçebilir.\
        Yılın En İyi Kitapları The Financial Times, The Guardian, New Statesman\
        Norveç Kitap Eleştimenleri Ödülü, National Book Award En İyi Çeviri Kitap Ödülü Adayı",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1616094766i/57453075.jpg"
    },
    {
        title: "Utanç",
        author: "J.M. Coetzee",
        description: "J.M. Coetzee, okuruna yumuşak bir roman sunmuyor, sert bir öy­kü anlatıyor.\
        İnanılmaz güzellikte ama kasvetli bir öy­kü. Utanç, bir kız öğrencisiyle ilişkiye giren Profesör David Lurie’nin düşüşünü anlatıyor.\
        Okul yönetimince savunması istenen David, kendisini savunmadan, suçlamaları okumayı bile reddederek hakkındaki iddia­ların yer aldığı belgeleri imzalar.\
        Sadece okulu değil, o kenti de terk ederek kızı Lucy’nin çiftliğine sığınır. Çiftlikteki yaşama koşullarına ve ırk ayrımının yeni boyutlar aldığı bir topluma\
        uyum sağlama yolunda inançsızca sürdürdüğü çabaları, bir gün kızıyla birlikte uğradığı vahşi bir saldırıyla kesintiye uğrar.\
        Romanda Lurie’nin kişisel öyküsü ile Güney Afrika’nın öyküsü iç içe geçiyor; beyazıyla siyahıyla bütün Afrikalıların bildikleri kuralların tümü tersine dönüyor, çarpıtılıyor.\
        Utanç, aslında insan olmanın ne anlama geldiğini arayan bir roman. J.M. Coetzee, insanın içine işleyen gerçekleri yalın ama vurucu bir üslupla dile getirirken yaşayan en iyi romancılardan biri olarak anılmayı hak ediyor.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1647637425i/11459366.jpg"
    },
    {
        title: "Hayatta Kalanlar",
        author: "Alex Schulman",
        description: "Hayatta Kalanlar, büyürken birbirine yabancılaşan üç kardeşin –Nils, Benjamin ve Pierre’in annelerinin ölümü üzerine bir araya gelmelerini anlatıyor.\
        Kardeşler, annelerinin vasiyeti üzerine çocukluk yıllarının odağındaki eski yazlık evlerine dönüyorlar.\
        Hikâye katman katman açıldıkça ve kardeşlerin çocukluklarına daldıkça gerçekler anlaşılıyor: Bu evde yaşananlar hepsinin karakterini, hayatını ve birbirleriyle ilişkilerini \
        geri dönülemez şekilde etkilemiş, aileyi dağıtmış, herkeste ayrı bir yara açmış...\
        Alex Schulman, travma ve trajedinin ardından çözülen bir zihnin anılar sarayında gezerken en derin bağlarımızın, \
        bizi en büyük darbelere karşı nasıl savunmasız bıraktığını ustalıkla ortaya koyuyor.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1640262698i/59915572.jpg"
    }
]

app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));

 app.get("/", (req, res) => {
    res.render("landing");
 })

 app.get("/books", (req, res) => {
    res.render("books", {books})
 })

 app.get("/books/new", (req, res) => {
    res.render("books_new");
 })

 app.post("/books", (req, res) => {
    console.log(req.body);
    books.push(req.body);
    res.redirect("books");
 })
 
 app.listen(3000, () => {
    console.log("yelp_indep is running.");
 });

