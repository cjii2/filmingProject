export class Galleries {
    constructor(Father, jsonPath) {
        this.Father = document.getElementById(Father);
        this.jsonPath = jsonPath;
    }

    async loadElements() {
        const res = await fetch(this.jsonPath + "?nocache=" + Date.now());
        const data = await res.json();

        Object.entries(data.groups).forEach(([groupName, items]) => {
            // console.log(groupName)
            document.querySelector('.mobile-console').innerHTML += `<p>Loading ${groupName} photos...</p>`;
            // إنشاء السيكشن
            const section = document.createElement("section");
            section.className = `gallry-section ${items[0].direction}`;

            const group1 = document.createElement("div");
            group1.className = "group left";

            const group2 = document.createElement("div");
            group2.className = "group left";
            group2.setAttribute("aria-hidden", "true");

            section.append(group1, group2);
            this.Father.appendChild(section);

            // إضافة الصور
            items.forEach(item => {
                const figure = document.createElement("figure");
                figure.className = "img-container";

                const img = document.createElement("img");
                img.src = item.img;
                img.alt = item.title;

                figure.appendChild(img);

                group1.appendChild(figure.cloneNode(true));
                group2.appendChild(figure);
            });

        });
    }

    activeApp() {
        document.addEventListener("DOMContentLoaded", () => {
            this.loadElements();
        });
    }
}