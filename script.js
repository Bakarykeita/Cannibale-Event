const galeries = {
    opinel: {
        titre: "OPINEL 12 SAGATALA — En concert",
        photos: ["image/All-White/1.jpeg", "image/All-White/2.jpeg", "image/All-White/3.jpeg", "image/All-White/4.jpeg", "image/All-White/5.jpeg", "image/All-White/6.jpeg", "image/All-White/7.jpeg", "image/All-White/8.jpeg", "image/All-White/9.jpeg", "image/All-White/10.jpeg"]
    },
    blackwhite: {
        titre: "SOIRÉE BLACK AND WHITE",
        photos: ["image/Black-and-White/1.jpeg", "image/Black-and-White/2.jpeg", "image/Black-and-White/3.jpeg", "image/Black-and-White/4.jpeg", "image/Black-and-White/5.jpeg", "image/Black-and-White/6.jpeg", "image/Black-and-White/7.jpeg", "image/Black-and-White/8.jpeg", "image/Black-and-White/9.jpeg", "image/Black-and-White/10.jpeg", "image/Black-and-White/11.jpeg", "image/Black-and-White/12.jpeg", "image/Black-and-White/13.jpeg", "image/Black-and-White/14.jpeg", "image/Black-and-White/15.jpeg", "image/Black-and-White/16.jpeg", "image/Black-and-White/17.jpeg", "image/Black-and-White/18.jpeg", "image/Black-and-White/19.jpeg", "image/Black-and-White/20.jpeg", "image/Black-and-White/21.jpeg", "image/Black-and-White/22.jpeg", "image/Black-and-White/23.jpeg", "image/Black-and-White/24.jpeg", "image/Black-and-White/25.jpeg", "image/Black-and-White/26.jpeg", "image/Black-and-White/27.jpeg", "image/Black-and-White/28.jpeg", "image/Black-and-White/29.jpeg", "image/Black-and-White/30.jpeg", "image/Black-and-White/31.jpeg", "image/Black-and-White/32.jpeg", "image/Black-and-White/33.jpeg", "image/Black-and-White/34.jpeg", "image/Black-and-White/35.jpeg", "image/Black-and-White/36.jpeg", "image/Black-and-White/37.jpeg", "image/Black-and-White/38.jpeg", "image/Black-and-White/39.jpeg", "image/Black-and-White/40.jpeg", "image/Black-and-White/41.jpeg", "image/Black-and-White/42.jpeg"]
    },
    allwhite: {
        titre: "SOIRÉE ALL WHITE",
        photos: ["image/All-White/1.jpeg", "image/All-White/2.jpeg", "image/All-White/3.jpeg", "image/All-White/4.jpeg", "image/All-White/5.jpeg", "image/All-White/6.jpeg", "image/All-White/7.jpeg", "image/All-White/8.jpeg", "image/All-White/9.jpeg", "image/All-White/10.jpeg"]
    }
};

function ouvrirLightbox(nom) {
    const galerie = galeries[nom];
    document.getElementById('lightbox-titre').innerText = galerie.titre;
    const container = document.getElementById('lightbox-photos');
    container.innerHTML = '';
    galerie.photos.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.style = "width:100%; height:200px; aspect-ratio:1/1; object-fit:cover; object-position:top; border-radius:8px; cursor:pointer; transition:transform 0.3s;";
        img.onclick = () => agrandir(src);
        container.appendChild(img);
    });
    document.getElementById('lightbox').style.display = 'block';
}

function agrandir(src) {
    const overlay = document.createElement('div');
    overlay.id = 'img-overlay';
    overlay.style = "position:fixed; inset:0; background:rgba(0,0,0,0.97); z-index:999999; display:flex; align-items:center; justify-content:center;";
    overlay.innerHTML = `
        <span onclick="document.getElementById('img-overlay').remove()" style="position:fixed; top:20px; right:30px; font-size:3rem; color:#fff; cursor:pointer;">✕</span>
        <img src="${src}" style="max-width:90%; max-height:90vh; object-fit:contain; border-radius:8px;">
    `;
    overlay.onclick = (e) => { if(e.target === overlay) overlay.remove(); };
    document.body.appendChild(overlay);
}

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') fermerLightbox();
});

function fermerLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

document.getElementById('lightbox').addEventListener('click', function(e) {
    if(e.target === this) fermerLightbox();
});