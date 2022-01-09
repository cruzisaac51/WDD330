const d = new Date();
const year = d.getFullYear();
const fulldate = `${year}`;
document.querySelector("#dateyear").textContent = fulldate;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const fdate = d.toLocaleDateString("en-UK", options);
document.querySelector("#lastUpdated").textContent = fdate;


function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


// links for weekly homework
const homeworkjson = "json/weeks.json";

const hmapi = async(key, value) => {
    try {
        const response = await fetch(`${homeworkjson}`);
        const response2 = await response.json();
        let listofweeks = response2[key];
        listofweeks.forEach((element) => {
            if (element.name === value) {
                //create elements
                const createCards = document.createElement("div");
                let cardinfo = document.createElement("div");
                let titleh2 = document.createElement("h2");
                let information = document.createElement("a");

                //set attributes
                createCards.setAttribute("class", "card");
                information.setAttribute("class", "motto-card");
                information.setAttribute("href", element.link);

                //insert elements
                titleh2.innerHTML = element.name;
                information.innerHTML = element.link;
                cardinfo.appendChild(titleh2);
                cardinfo.appendChild(information);
                createCards.appendChild(cardinfo);
                document.querySelector("section.the-section").appendChild(createCards);
            }
        });
        return listofweeks;
    } catch (error) {
      console.log(error);
    }
};
hmapi("homework", "week1");