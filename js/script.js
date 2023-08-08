// табы
const tabsBtn = document.querySelectorAll(".tabs__nav button");
const tabsItems = document.querySelectorAll(".tabs__item");

function hideTabs(){
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtn.forEach(item => item.classList.remove("active"));
}

function showTabs(index){
    tabsItems[index].classList.remove("hide");
    tabsBtn[index].classList.add("active");
}

hideTabs();
showTabs(0);

tabsBtn.forEach((btn, index) => btn.addEventListener("click", () =>{
    hideTabs();   
    showTabs(index); 
}));

// якоря
const anchors = document.querySelectorAll(".header__nav a")

anchors.forEach(anc => {
    anc.addEventListener("click", function(e){
      e.preventDefault();
      const id = anc.getAttribute("href");
      const elem = document.querySelector(id);

      window.scroll({
        top: elem.offsetTop - 90,
        behavior: 'smooth'
      });
    });
});
