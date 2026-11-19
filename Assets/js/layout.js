const main = document.querySelector(".main");
const tailwind = document.createElement("script");
tailwind.src= "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";
document.head.appendChild(tailwind);
async function loadLayout() {
    const res1 = await fetch('../../components/header.html');

    const header = await res1.text();
//  console.log(header);
      const res2 = await fetch('../../components/footer.html');
    
     const footer = await res2.text();
     main.insertAdjacentHTML("beforebegin", header);
      main.insertAdjacentHTML("beforebegin", footer);
      const navbar2 = document.querySelector('.navbar2');
      const nav_btn = document.querySelector('.nav-btn');
      
      nav_btn.addEventListener("click", ()=>{
        navbar2.classList.toogle('hidden')
      })
}
loadLayout();