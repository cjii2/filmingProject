export class Galleries {
    constructor(Father, jsonPath) {
        this.Father = document.getElementById(Father);
        this.jsonPath = jsonPath;
    }

    async loadElements() {
        const res = await fetch(this.jsonPath + "?nocache=" + Date.now());
        const data = await res.json();

        for (const [groupName, items] of Object.entries(data.groups)) {
            // إنشاء السيكشن
            try{
                if (!items || items.length === 0) continue;

                const direction = items[0].direction || 'left';
                const section = document.createElement("section");
                section.className = `gallry-section ${direction}`;
    
                const group1 = document.createElement("div");
                group1.className = `group ${direction}`;
    
                const group2 = document.createElement("div");
                group2.className = `group ${direction}`;
                group2.setAttribute("aria-hidden", "true");
    
                section.appendChild(group1);
                section.appendChild(group2);
                this.Father.appendChild(section);
    
                // إضافة الصور
               for (const item of items) {

                    const fig1 = document.createElement("figure");
                    fig1.className = "img-container";

                    const img1 = document.createElement("img");
                    img1.src = item.img;
                    img1.alt = item.title || "Image";

                    fig1.appendChild(img1);
                    group1.appendChild(fig1);

                    const fig2 = document.createElement("figure");
                    fig2.className = "img-container";

                    const img2 = document.createElement("img");
                    img2.src = item.img;
                    img2.alt = item.title || "Image";

                    fig2.appendChild(img2);
                    group2.appendChild(fig2);
                }

            }
            catch(err){
                console.error("Error creating gallery section:",groupName, err);
            }
        };
    }

    activeApp() {
        this.loadElements();
    }
}