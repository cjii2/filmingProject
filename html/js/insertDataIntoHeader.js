let getLocalLang = localStorage.getItem('language') || "ar";
let language = getLocalLang;
const CreateHeader = document.querySelector("#navbar-section ul")
const languageBtn = document.getElementById("languageSelect");

// بيانات عنوان الصفحة قابله للتغير 
const headerData = {
    ar: ["الصفحة الرئيسية",
        "طبيعه",
        "افراح",
        "فعاليات",
        "منتجات",
        "تصوير شخصي",
        "تصوير احترافي"],

    en: ['Home page',
        'Nature',
        'Weddings',
        'Events',
        'Products',
        'Portraits',
        'Pro Photography'],
        
    links:[
        'professional-photograpy.html',
        'personal-photograpy.html',
        'product.html',
        'events.html',
        'weddings.html',
        'nature.html',
        '../index.html'
        ]

};

// اللغة التي يتم اختيارها من القائمة
// لا يوجد ضرورة للتعديل على هذا السكربت لما لم يكن لديك خبرة كافية
if(languageBtn){
    languageBtn.addEventListener('change',(el)=>{
        let langSelected = el.target.value;
        localStorage.setItem('language',langSelected);
        if(langSelected === 'en'){
            document.body.style.direction='ltr';
            document.body.style.textAlign='left';
        };

        insertDataIntoHeader(langSelected);
    });
};

// اللغة المخزنة في الارشيف
//  لا يوجد ضرورة للتعديل على هذا السكربت لما لم يكن لديك خبرة كافية
if(getLocalLang === null || getLocalLang === undefined ){
    localStorage.setItem('language','ar');
};
languageBtn.value = getLocalLang;

// لصنع العناصر من خلال ال js 
//  لا يوجد ضرورة للتعديل على هذا السكربت لما لم يكن لديك خبرة كافية
function insertDataIntoHeader(lang){
    CreateHeader.innerHTML="";
    headerData[lang].forEach((el,index)=>{
        CreateHeader.insertAdjacentHTML('afterbegin',`
            <li ><a class="nav-item" href="${headerData.links[index]}">${el}</a></li>
            `);
        // console.log(headerData.links[index])
    });
    
    function changeLanguage(){
        document.querySelectorAll('.nav-item').forEach((el ,i)=>{
            el.textContent=headerData[lang][i];
        });
    };
    changeLanguage(lang);
};

insertDataIntoHeader(language);