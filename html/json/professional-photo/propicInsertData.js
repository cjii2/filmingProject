// عدم مساس هاذا سكربت نهائي اذا لم تتوفر خبره كافيه

class Galleries {
    constructor(Father, jsonPath) {
        this.Father = document.getElementById(Father);
        this.jsonPath = jsonPath;
    };


    async loadElements() {
        const res = await fetch(this.jsonPath);
        const data = await res.json();
        Object.entries(data.groups).forEach(([groupName, items]) => {
            this.groupName = groupName;
            this.items = items;
            this.Father.insertAdjacentHTML('beforeend', `
                    <section class="gallry-section ${items[0].direction}">
                        <div class="group left">
                        
                        </div>
                        
                        <div aria-hidden class="group left">

                        </div>
                    </section>
                    `);
                this.imgContainer = document.querySelectorAll('.group');
            });

            console.log(this.imgContainer)
            for(let index=0; index<this.items.length;index++)
            this.imgContainer.forEach((e)=>{
                e.insertAdjacentHTML('beforeend',`
                    <figure class="img-container">
                        <img src="${this.items[index]["img"]}" alt="">
                    </figure>
                    `);
            });
    };
    activeApp(){
       this.loadElements();
    };
}; 
   
const activeGalleries = new Galleries(
    'gallryContainer',
    '../html/json/professional-photo/propicData.json'
);

activeGalleries.activeApp();