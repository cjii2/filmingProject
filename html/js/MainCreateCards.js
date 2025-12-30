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

                    const figure = document.createElement("figure");
                    figure.className = "img-container";
    
                    const img = document.createElement("img");
                    img.src = item.img;
                    img.alt = item.title || 'Image';
    
                    figure.appendChild(img);
    
                    group1.appendChild(figure.cloneNode(true));
                    group2.appendChild(figure.cloneNode(true));
                };
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