/* ═══════════════════════════════════════════════
   PYXLVOID PORTFOLIO v2 — script.js
   ═══════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────
   POSTER DATA
   Categorised by content of your actual posters:
   • music     — music/album art posters
   • film      — film/TV/character posters
   • collage   — collage / mixed media
   • editorial — editorial / typographic
   
   landscape: true  →  poster is wider than tall
   ───────────────────────────────────────────────── */
const posters = [
  // ── BATCH 1 (poster 1–19) ──────────────────────────────────────────────
  { id:  1, image:"images/poster1.jpg",  title:"19th Century — The 1975",        category:"music",     landscape:false },
  { id:  2, image:"images/poster2.jpg",  title:"5:05 A.M. — Arctic Monkeys",     category:"music",     landscape:false },
  { id:  3, image:"images/poster3.jpg",  title:"Your Lips, My Lips — Apocalypse",category:"music",     landscape:false },
  { id:  4, image:"images/poster4.jpg",  title:"Batman — Moodboard",             category:"collage",   landscape:true  },
  { id:  5, image:"images/poster5.jpg",  title:"Porsche GT3RS",                  category:"editorial", landscape:false },
  { id:  6, image:"images/poster6.jpg",  title:"Hannibal",                       category:"film",      landscape:false },
  { id:  7, image:"images/poster7.jpg",  title:"The Process of Healing",         category:"collage",   landscape:true  },
  { id:  8, image:"images/poster8.jpg",  title:"Connection",                     category:"collage",   landscape:false },
  { id:  9, image:"images/poster9.jpg",  title:"Romantic Homicide — D4VD",       category:"music",     landscape:false },
  { id: 10, image:"images/poster10.jpg", title:"DAMN. — Kendrick Lamar",          category:"music",     landscape:false },
  { id: 11, image:"images/poster11.jpg", title:"London Collage",                 category:"collage",   landscape:false },
  { id: 12, image:"images/poster12.jpg", title:"The Duo Badass",                 category:"film",      landscape:true  },
  { id: 13, image:"images/poster13.jpg", title:"GNX — Kendrick Lamar",           category:"music",     landscape:false },
  { id: 14, image:"images/poster14.jpg", title:"Where Were The Gods",            category:"editorial", landscape:false },
  { id: 15, image:"images/poster15.jpg", title:"HULK",                           category:"collage",   landscape:true  },
  { id: 16, image:"images/poster16.jpg", title:"Idealism — 07",                  category:"editorial", landscape:false },
  { id: 17, image:"images/poster17.jpg", title:"Gilmore Girls — I Love You",     category:"film",      landscape:false },
  { id: 18, image:"images/poster18.jpg", title:"Kanye — YEZ",                    category:"music",     landscape:false },
  { id: 19, image:"images/poster19.jpg", title:"Kendrick Lamar — Money Trees",   category:"music",     landscape:false },

  // ── BATCH 2 (poster 22–41) ─────────────────────────────────────────────
  { id: 20, image:"images/poster22.jpg", title:"Marlboro — The Batman",           category:"editorial", landscape:false },
  { id: 21, image:"images/poster23.jpg", title:"MONEY — Chase Collage",          category:"collage",   landscape:true  },
  { id: 22, image:"images/poster24.jpg", title:"I Live In Music — ELSE",         category:"music",     landscape:false },
  { id: 23, image:"images/poster25.jpg", title:"Nirvana — Heart Shaped Box",     category:"music",     landscape:false },
  { id: 24, image:"images/poster26.jpg", title:"About You — The 1975",           category:"music",     landscape:false },
  { id: 25, image:"images/poster27.jpg", title:"The Colosseum",                  category:"editorial", landscape:true  },
  { id: 26, image:"images/poster28.jpg", title:"Gilmore Girls — Stars Hollow",   category:"film",      landscape:false },
  { id: 27, image:"images/poster29.jpg", title:"Top Fraggers",                   category:"music",     landscape:true  },
  { id: 28, image:"images/poster30.jpg", title:"Travis Scott — Utopia",          category:"music",     landscape:false },
  { id: 29, image:"images/poster31.jpg", title:"Spider-Man — Undismissable",     category:"film",      landscape:true  },
  { id: 30, image:"images/poster32.jpg", title:"Universe Within",                category:"editorial", landscape:true  },
  { id: 31, image:"images/poster33.jpg", title:"The Batman — Vengeance",         category:"film",      landscape:true  },
  { id: 32, image:"images/poster34.jpg", title:"Air Jordan Legacy",              category:"editorial", landscape:true  },
  { id: 33, image:"images/poster35.jpg", title:"Breaking Code",                  category:"editorial", landscape:false },
  { id: 34, image:"images/poster36.jpg", title:"Cataclysm",                      category:"film",      landscape:false },
  { id: 35, image:"images/poster37.jpg", title:"Love — Collage",                 category:"collage",   landscape:false },
  { id: 36, image:"images/poster38.jpg", title:"Rekindling Bonds",               category:"editorial", landscape:true  },
  { id: 37, image:"images/poster39.jpg", title:"Dreaming — Demon",               category:"collage",   landscape:false },
  { id: 38, image:"images/poster40.jpg", title:"The Smiths — 1984",              category:"music",     landscape:false },
  { id: 39, image:"images/poster41.jpg", title:"Into The Void",                  category:"collage",   landscape:false },
  { id: 40, image:"images/poster20.jpg", title:"Knight Dolus — The Deceiver",    category:"editorial", landscape:false },
  { id: 41, image:"images/poster21.jpg", title:"Man City — Premier League",      category:"film",      landscape:false },
];

/* STATE */
let filteredPosters = [...posters];
let currentIndex    = 0;

/* ─── CURSOR ──────────────────────────────────── */
const cursor = document.getElementById("cursor");
const ring   = document.getElementById("cursorRing");
let mx=0,my=0,rx=0,ry=0;

document.addEventListener("mousemove", e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx-6+"px";
  cursor.style.top  = my-6+"px";
});

(function animRing(){
  rx += (mx-rx)*0.15;
  ry += (my-ry)*0.15;
  ring.style.left = rx-18+"px";
  ring.style.top  = ry-18+"px";
  requestAnimationFrame(animRing);
})();

function addHover(sel){
  document.querySelectorAll(sel).forEach(el=>{
    el.addEventListener("mouseenter",()=>{ cursor.style.transform="scale(2)"; ring.style.width=ring.style.height="60px"; });
    el.addEventListener("mouseleave",()=>{ cursor.style.transform="scale(1)"; ring.style.width=ring.style.height="36px"; });
  });
}
addHover("a,button,.poster-item,.filter-btn,.contact-link");

/* ─── MOBILE MENU ─────────────────────────────── */
function toggleMenu(){
  const nl = document.querySelector(".nav-links");
  if(nl.style.display==="flex"){
    nl.style.display="none";
  } else {
    nl.style.cssText="display:flex;flex-direction:column;position:fixed;top:60px;left:0;right:0;background:rgba(5,5,8,0.97);padding:24px 40px;gap:20px;z-index:800;backdrop-filter:blur(20px);border-bottom:1px solid rgba(0,245,255,0.12);";
  }
}

/* ─── BUILD POSTER GRID ───────────────────────── */
function buildGrid(data){
  const grid = document.getElementById("posterGrid");
  grid.innerHTML = "";
  data.forEach(p=>{
    const card = document.createElement("div");
    card.className = "poster-item" + (p.landscape ? " landscape" : "");
    card.dataset.category = p.category;

    const categoryLabel = {
      music:"Music", film:"Film & TV", collage:"Collage", editorial:"Editorial"
    }[p.category] || p.category;

    card.innerHTML = `
      <div class="poster-thumb">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <div class="poster-chip ${p.category}">${categoryLabel}</div>
        <div class="poster-overlay">
          <div class="poster-overlay-title">${p.title}</div>
          <div class="poster-overlay-cat">${categoryLabel}</div>
          <button class="poster-view-btn">View Poster</button>
        </div>
      </div>
    `;

    card.addEventListener("click", ()=>{
      const idx = filteredPosters.findIndex(fp=>fp.id===p.id);
      if(idx!==-1) openLightbox(idx);
    });

    grid.appendChild(card);
  });

  addHover(".poster-item,.poster-view-btn");
}

/* ─── FILTER ──────────────────────────────────── */
function filterPosters(cat, btn){
  document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  filteredPosters = cat==="all" ? [...posters] : posters.filter(p=>p.category===cat);
  buildGrid(filteredPosters);
}

/* ─── LIGHTBOX ────────────────────────────────── */
function openLightbox(idx){
  currentIndex = idx;
  renderLightbox();
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox(){
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

function navigateLightbox(dir){
  currentIndex = (currentIndex+dir+filteredPosters.length)%filteredPosters.length;
  renderLightbox();
}

function renderLightbox(){
  const p      = filteredPosters[currentIndex];
  const poster = document.getElementById("lightboxPoster");

  /* animate out */
  poster.style.opacity   = "0";
  poster.style.transform = "scale(0.94)";

  setTimeout(()=>{
    poster.className = "lightbox-poster" + (p.landscape ? " landscape" : "");
    poster.innerHTML = `
      <div class="lightbox-glow"></div>
      <img src="${p.image}" alt="${p.title}" />
    `;
    poster.style.transition = "opacity 0.35s ease, transform 0.45s cubic-bezier(0.34,1.56,0.64,1)";
    poster.style.opacity    = "1";
    poster.style.transform  = "scale(1)";
  }, 160);

  poster.style.transition = "opacity 0.16s, transform 0.16s";

  const catLabel = { music:"Music", film:"Film & TV", collage:"Collage", editorial:"Editorial" }[p.category] || p.category;
  document.getElementById("lightboxTitle").textContent = p.title;
  document.getElementById("lightboxCat").textContent   = catLabel;
  document.getElementById("lightboxNum").textContent   = pad(currentIndex+1)+" / "+filteredPosters.length;
}

/* ─── KEYBOARD ────────────────────────────────── */
document.addEventListener("keydown", e=>{
  if(!document.getElementById("lightbox").classList.contains("open")) return;
  if(e.key==="Escape")     closeLightbox();
  if(e.key==="ArrowLeft")  navigateLightbox(-1);
  if(e.key==="ArrowRight") navigateLightbox(1);
});

/* ─── SCROLL REVEAL ───────────────────────────── */
const revObs = new IntersectionObserver(entries=>{
  entries.forEach((en,i)=>{
    if(en.isIntersecting) setTimeout(()=>en.target.classList.add("visible"), i*80);
  });
},{ threshold:0.1 });
document.querySelectorAll(".reveal").forEach(el=>revObs.observe(el));

/* ─── UTIL ────────────────────────────────────── */
function pad(n){ return String(n).padStart(2,"0"); }

/* ─── INIT ────────────────────────────────────── */
buildGrid(posters);
