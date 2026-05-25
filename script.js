const galeries = {
    opinel: {
        titre: "OPINEL 12 SAGATALA — En concert",
        photos: ["image/a.jpg", "image/b.jpg", "image/c.jpg", "image/d.jpg"]
    },
    blackwhite: {
        titre: "SOIRÉE BLACK AND WHITE",
        photos: ["image/a.jpg", "image/b.jpg", "image/c.jpg", "image/d.jpg"]
    },
    allwhite: {
        titre: "SOIRÉE ALL WHITE",
        photos: ["image/a.jpg", "image/b.jpg", "image/c.jpg", "image/d.jpg"]
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