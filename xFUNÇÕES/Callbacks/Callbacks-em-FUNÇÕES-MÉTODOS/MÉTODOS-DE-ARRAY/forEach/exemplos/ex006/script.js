const containerPai = document.getElementById("pai");
const divAnimation = document.getElementById("divAnimation");
const imgDragons = [
    { dragao: "dr1.png", nome: "Ygg Drasil Nobre", num: "1"},
    { dragao: "dr2.png", nome: "Cristalino", num: "2"},
    { dragao: "dr3.png", nome: "Fogo-frio", num: "3"},
    { dragao: "dr4.png", nome: "Pirata", num: "4"},
    { dragao: "dr5.png", nome: "Draluxo", num: "5"},
    { dragao: "dr6.png", nome: "Duende Verde", num: "6"},
    { dragao: "dr7.png", nome: "Elementos", num: "7"}
];
const nav = document.getElementById("links");
const img = document.createElement("img");
const h1 = document.createElement("h1");
containerPai.appendChild(h1);
divAnimation.appendChild(img);

imgDragons.forEach(dragon => {
    const a = document.createElement("a");
    a.classList.add("link")
    a.textContent = dragon.num;
    a.href = "#";

    nav.appendChild(a);
    a.addEventListener("click", (e) => {
        e.preventDefault();

        document.querySelectorAll(".link").forEach(link => {
            link.classList.remove("ativo");
        });

        a.classList.add("ativo");

        h1.textContent = dragon.nome;
        h1.classList.add("name");
        img.src = "img/dragoes/" + dragon.dragao;
        img.classList.add("imgDragon");
    });
});


