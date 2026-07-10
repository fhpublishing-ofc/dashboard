// =======================================
// FH Publishing
// script.js
// =======================================

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1000);
});

// Navbar Shadow
window.addEventListener("scroll", () => {

    const header = document.getElementById("header");

    if (window.scrollY > 20) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});

// =======================================
// Countdown
// =======================================

const targetDate = new Date("December 25, 2026 00:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));

    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("months").textContent = months;

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;

},1000);

// =======================================
// Data Buku
// =======================================

const books = {

    kisah:{

        title:"Kisah Abadi yang Tak Pernah Usai",

        image:"images/images1.png",

        description:"Buku refleksi yang membahas kehilangan, harapan, dan keberanian untuk kembali melangkah dalam kehidupan."

    },

    catatan:{

        title:"Catatan untuk Hari Ini",

        image:"images/images2.png",

        description:"Kumpulan catatan sederhana yang menemani hari-hari berat bersama Ft. Kiroh Tadzkiroh."

    }

};

// =======================================
// Overlay Detail
// =======================================

const detailButtons = document.querySelectorAll(".detail-button");

const detailOverlay = document.getElementById("bookDetail");

const detailTitle = document.getElementById("detailTitle");

const detailImage = document.getElementById("detailImage");

const detailDescription = document.getElementById("detailDescription");

detailButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        const data = books[btn.dataset.book];

        detailTitle.textContent = data.title;

        detailImage.src = data.image;

        detailDescription.textContent = data.description;

        detailOverlay.classList.add("show");

        document.body.style.overflow="hidden";

    });

});

document.getElementById("closeDetail").onclick=()=>{

    detailOverlay.classList.remove("show");

    document.body.style.overflow="auto";

};

// =======================================
// Checkout
// =======================================

const checkout = document.getElementById("checkoutOverlay");

document.getElementById("buyNow").onclick=()=>{

    checkout.classList.add("show");

};

document.getElementById("closeCheckout").onclick=()=>{

    checkout.classList.remove("show");

};

// =======================================
// Copy Username
// =======================================

document.getElementById("copyUsername").onclick=()=>{

    navigator.clipboard.writeText("@fh.publishing_");

    alert("Username Tako berhasil disalin.");

};

// =======================================
// Copy Nominal
// =======================================

document.getElementById("copyPrice").onclick=()=>{

    navigator.clipboard.writeText("25000");

    alert("Nominal berhasil disalin.");

};

// =======================================
// Order ID
// =======================================

function generateOrderID(){

    return "FH-"+Date.now().toString().slice(-8);

}

// =======================================
// WhatsApp
// =======================================

document.getElementById("checkoutForm").addEventListener("submit",function(e){

    e.preventDefault();

    const nama=document.getElementById("nama").value;

    const email=document.getElementById("email").value;

    const nomor=document.getElementById("nomor").value;

    const order=generateOrderID();

    const pesan=`Halo FH Publishing 👋

Saya sudah melakukan pembayaran.

━━━━━━━━━━━━━━

📚 Buku
${detailTitle.textContent}

👤 Nama
${nama}

📧 Gmail
${email}

📱 WhatsApp
${nomor}

🆔 Order ID
${order}

💰 Nominal
Rp.25.000

━━━━━━━━━━━━━━

Mohon dilakukan verifikasi.

Terima kasih.`;

    const url="https://wa.me/6283815423928?text="+encodeURIComponent(pesan);

    window.open(url,"_blank");

});

// =======================================
// Smooth Scroll
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// =======================================
// Reveal Animation
// =======================================

const reveal=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    reveal.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<window.innerHeight-100){

            item.classList.add("show");

        }

    });

});

// =======================================
// Mobile Menu
// =======================================

const menu=document.getElementById("menuButton");

const nav=document.getElementById("navbar");

menu.onclick=()=>{

    nav.classList.toggle("open");

};
