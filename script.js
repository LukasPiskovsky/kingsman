const nav = document.getElementById("nav-bar")
const logo = document.getElementById("logo")
const subHeading = document.querySelectorAll(".sub-heading")
const header = document.querySelector("header")
const section = document.querySelectorAll("section")


window.addEventListener("scroll", () => {
    // console.log(window.scrollY)
    /*navbar*/
    if (window.scrollY >= 270){
        nav.style.position = "fixed"
        nav.style.top = "0px"
        nav.style.width = "100%"
        logo.style.visibility = "visible"
    } else {
        nav.style.position = "relative"
        nav.style.top ="100px"
        logo.style.visibility = "hidden"
    }
    if(window.scrollY > (window.innerHeight - 58)){
        nav.style.backgroundColor = "#111111dd"
    } else {
        nav.style.backgroundColor = "#ffffff07"
    }
    /*heading*/
    if(window.scrollY <= 2){
        subHeading.forEach((elem) =>{
            elem.style.opacity = "0"
            elem.style.transform = "scale(0.5)"
        })
    }

})

for (let i = 0; i < subHeading.length; i++) {
    // Spočítáme součet výšek předchozích sekcí
    let offset = header.scrollHeight + 70;

    for (let j = 0; j < i; j++) {
        offset += section[j].scrollHeight;
    }

    window.addEventListener("scroll", () => {
        if (window.scrollY + header.scrollHeight + 70 > offset) {
            subHeading[i].style.opacity = "1";
            subHeading[i].style.transform = "scale(1)";
        }
    });
}

/*services*/
let serviceDivs = document.querySelectorAll(".service-div")
let serviceImg = document.querySelectorAll(".service-img")
let servicePhoto = document.getElementById("service-photo")
let serviceHeading = document.getElementById("service-heading")
let serviceText = document.getElementById("service-text")
let serviceContent = [
    {
        heading: "Konzultace",
        text: "Nejste si jistí, jaký střih nebo styl vousů vám bude nejvíc slušet? Přijďte na osobní konzultaci s našimi zkušenými barbery! Společně probereme vaše představy, doporučíme vám střih i úpravu vousů přesně na míru vašemu stylu, typu vlasů i tvaru obličeje.",
        img: "consulting.jpg",
        icon: "conversation.gif",
        originalIcon: "conversation.png"
},
    {
        heading: "Střih",
        text: "Precizní střih je základ. Ať už chceš klasiku, moderní trend nebo něco úplně odvážného, naši barbeři ti vytvoří účes, který ti perfektně sedne. Detail, čistota a styl to je náš standard.",
        img: "hair-cut.jpeg",
        icon: "scissors.gif",
        originalIcon: "scissors.png"
},
    {
        heading: "Holení",
        text: "Tradiční holení horkou párou, ostrou břitvou a kvalitními přípravky. Zážitek, který tě vrátí zpět k opravdovému rituálu péče o sebe. Hladké oholení a dokonale uvolněný pocit zaručen!",
        img: "beard-cut.jpeg",
        icon: "razor.gif",
        originalIcon: "razor.png"
},
    {
        heading: "Mytí",
        text: "Pořádný střih nebo holení si zaslouží také pořádné umytí. Dopřejeme tvým vlasům a pokožce čistotu, hydrataci a svěžest přesně tak, jak si zasloužíš.",
        img: "hair-bath.jpeg",
        icon: "bubble.gif",
        originalIcon: "bubble.png"
},
    {
        heading: "Něco k pití",
        text: "Pohoda je součástí celého zážitku. U nás si můžeš během návštěvy vychutnat kávu, studené nápoje a hlavně něco ostřejšího především kvalitní whiskey. Protože správný střih chutná líp se sklenkou v ruce.",
        img: "whiskey.jpeg",
        icon: "whiskey.gif",
        originalIcon: "whiskey.png"
}
]

serviceHeading.textContent = "O nás"
serviceText.textContent = "Jsme moderní barber shop, kde se potkává poctivé řemeslo, styl a pohodová atmosféra. Nabízíme precizní střihy, úpravu vousů i tradiční holení břitvou. U nás si odpočineš a odejdeš upravený přesně podle svých představ."
servicePhoto.src = `img/services/interier.jpg`

serviceDivs.forEach((elem, index) => {
    elem.addEventListener("mouseover", () => {
        serviceHeading.textContent = serviceContent[index].heading
        serviceText.textContent = serviceContent[index].text
        servicePhoto.src = `img/services/${serviceContent[index].img}`
        serviceImg[index].src = `img/services/${serviceContent[index].icon}`
    })
    elem.addEventListener("mouseout", () => {
        serviceHeading.textContent = "O nás"
        serviceText.textContent = "Jsme moderní barber shop, kde se potkává poctivé řemeslo, styl a pohodová atmosféra. Nabízíme precizní střihy, úpravu vousů i tradiční holení břitvou. U nás si odpočineš a odejdeš upravený přesně podle svých představ."
        servicePhoto.src = `img/services/interier.jpg`
        serviceImg[index].src = `img/services/${serviceContent[index].originalIcon}`
    })
})


/*price-list*/
let priceList = [
    {
        service:"Pánský střih",
        price:"450 Kč",
        description:"Klasický střih nůžkami a strojkem, styling v ceně."
    },
    {
        service:"Fade střih",
        price:"500 Kč",
        description:"Moderní přechodový střih (low/mid/high fade)."
    },
    {
        service:"Úprava vousů",
        price:"300 Kč",
        description:"Zastřižení, kontury a styling vousů."
    },
    {
        service:"Holení břitvou",
        price:"350 Kč",
        description:"Tradiční holení s horkým ručníkem a pěnou."
    },
    {
        service:"Kompletní balíček",
        price:"800 Kč",
        description:"Střih + vousy + horký ručník + masáž hlavy."
    },
    {
        service:"Dětský střih (do 12 let)",
        price:"350 Kč",
        description:"Trpělivý přístup, bezpečné nůžky, lehké stylingové úpravy."
    },
    {
        service:"Barvení vlasů",
        price:"od 600 Kč",
        description:"Profesionální barvení vlasů dle výběru odstínu."
    },
    {
        service:"Maska + péče o pleť",
        price:"300 Kč",
        description:"Očista pleti, černá maska a závěrečná hydratace."
    },
]

const priceTable = document.getElementById("price-table")

priceList.forEach((elem)=>{
    let tr = document.createElement("tr")
    let tdName = document.createElement("td")
    let tdPrice = document.createElement("td")
    let tdDescription = document.createElement("td")

    tdName.textContent = elem.service
    tdPrice.textContent = elem.price
    tdDescription.textContent = elem.description

    tr.appendChild(tdName)
    tr.appendChild(tdPrice)
    tr.appendChild(tdDescription)

    priceTable.appendChild(tr)
})
const evenRowsPriceList = document.querySelectorAll("tr:nth-child(even)")

window.addEventListener("scroll", () => {
    let offset = section[0].scrollHeight + section[1].scrollHeight
    if(window.scrollY >=  offset + 200){
        evenRowsPriceList.forEach((tr) =>{
            tr.classList.add("widen")
        })
    } else {
        evenRowsPriceList.forEach((tr) =>{
            tr.classList.remove("widen")
        })
    }
})

/*Contacts*/
const oddRowsContactList = document.querySelectorAll("tr:nth-child(odd)")
const iFrameMap = document.getElementById("iframe-map")

window.addEventListener("scroll", () => {
    let offset = section[0].scrollHeight + section[1].scrollHeight + section[2].scrollHeight
    if(window.scrollY >=  offset + 200){
        // iFrameMap.classList.add("border-growth")
        oddRowsContactList.forEach((tr) =>{
            tr.classList.add("widen")
        })
    } else {
        // iFrameMap.classList.remove("border-growth")
        oddRowsContactList.forEach((tr) =>{
            tr.classList.remove("widen")
        })
    }
})