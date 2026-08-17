/* ==========================================================
   BENEDICT — demo storefront (static prototype)
   ========================================================== */
(function () {
  "use strict";

  /* ---------- 商品データ（デモ用モックアップ） ---------- */
  var PRODUCTS = {
    ridgeDsp:  { name: "リッジ デイパック DSP", price: 33000, img: "assets/product-01-ridge-daypack-dsp.jpg",     colors: ["#1b1b1b","#3d4f6b","#6b4b3a","#8a8f7a","#c9b79c","#5c3a52","#2f5d4a","#a33b2f","#d8d3c8","#7d8ba1"] },
    fineday:   { name: "フィンデイ V2",        price: 22000, img: "assets/product-02-fineday-v2.jpg",    colors: ["#1b1b1b","#c9c4ba","#5a6f8c","#2f5d4a","#8a5a3c","#6d6a86","#b0453a","#d8cdbb","#3b3f45"] },
    easyday:   { name: "イージーデイ",          price: 22000, img: "assets/product-03-easyday.jpg",  colors: ["#1b1b1b","#7f8b7a","#c2b49b","#4a5a75","#8d4a4a","#d6d1c7"] },
    allday:    { name: "オールデイ",            price: 29700, img: "assets/product-04-allday.jpg",  colors: ["#1b1b1b","#3f4a3c","#6f6154","#9aa0a6"] },
    campus:    { name: "キャンパスデイ M",      price: 17600, img: "assets/product-05-campus-day-m.jpg",    colors: ["#1b1b1b","#37485f","#7a6a55","#8e8e8e"] },
    roam22:    { name: "ローム22",              price: 30800, img: "assets/product-06-roam-22.jpg",  colors: ["#20232a","#5d6b73","#b7ad9c","#39514a"] },
    sacoche:   { name: "クラシック サコッシュ M", price: 6600, img: "assets/product-07-classic-sacoche-m.jpg",  colors: ["#1b1b1b","#c9c4ba","#3f5a7a","#7a4b3a","#5f6b4e","#a63f3f"] },
    quick:     { name: "クイックポケット M",     price: 6600, img: "assets/product-08-quick-pocket-m.jpg",   colors: ["#1b1b1b","#d3cec4","#46586f","#6f7a58","#96442f"] },
    padded:    { name: "パデッド ショルダーポーチ M", price: 8250, img: "assets/product-09-padded-shoulder-pouch-m.jpg", colors: ["#1b1b1b","#cfc9be","#4c5a70","#7b6a52"] },
    harbor:    { name: "ハーバー トート S",      price: 9900, img: "assets/product-10-harbor-tote-s.jpg",   colors: ["#1b1b1b","#d8d2c6","#3f5a4a","#8d6a4a","#5a5f7a"] },
    crest30:   { name: "クレスト30",            price: 26400, img: "assets/product-11-crest-30.jpg",  colors: ["#1b1b1b","#4a5c6b","#7e7263"] },
    trace8:    { name: "トレース8",             price: 11000, img: "assets/product-12-trace-8.jpg",  colors: ["#9aa0a6","#1b1b1b","#4d6b58"] },
    ridge35:   { name: "リッジライン35 SM/MD",  price: 33000, img: "assets/product-13-ridgeline-35.jpg",  colors: ["#4f7fb0","#1b1b1b","#7a6a52"] },
    summit70:  { name: "サミット70 W",  price: 47520, was: 59400, img: "assets/product-14-summit-70w.jpg", colors: ["#9a9a94","#3f5a4a","#1b1b1b"] },
    summit75:  { name: "サミット75",    price: 47520, was: 59400, img: "assets/product-15-summit-75.jpg",   colors: ["#1b1b1b","#3c5a6b","#6b5a3c"] },
    voyage25:  { name: "ボヤージュ25",  price: 20240, was: 25300, img: "assets/product-16-voyage-25.jpg", colors: ["#1b1b1b","#4a4f58","#6f6355"] },
    raincover: { name: "レインカバー 50L–80L",  price: 7150, img: "assets/product-17-raincover-50-80.jpg",  colors: ["#c0392b","#1b1b1b"] }
  };

  var TABS = {
    ranking: [
      { k: "ridgeDsp", badge: "RANKING", cls: "" },
      { k: "roam22" },
      { k: "easyday" },
      { k: "fineday" },
      { k: "harbor" },
      { k: "padded" },
      { k: "allday" },
      { k: "crest30" }
    ],
    "new": [
      { k: "ridge35", badge: "NEW", cls: "pcard__badge--new" },
      { k: "roam22",  badge: "NEW", cls: "pcard__badge--new" },
      { k: "trace8" },
      { k: "sacoche" },
      { k: "quick" },
      { k: "campus" }
    ],
    limited: [
      { k: "summit75", badge: "LIMITED", cls: "pcard__badge--limited" },
      { k: "summit70", badge: "LIMITED", cls: "pcard__badge--limited" },
      { k: "voyage25", badge: "SALE", cls: "pcard__badge--sale" },
      { k: "raincover" }
    ],
    pick: [
      { k: "fineday" },
      { k: "ridgeDsp" },
      { k: "voyage25", badge: "SALE", cls: "pcard__badge--sale" },
      { k: "roam22" },
      { k: "campus" },
      { k: "crest30" },
      { k: "harbor" }
    ]
  };

  var RECO = [
    { k: "fineday" },
    { k: "ridgeDsp" },
    { k: "voyage25", badge: "SALE", cls: "pcard__badge--sale" },
    { k: "roam22" },
    { k: "campus" },
    { k: "trace8" },
    { k: "crest30" },
    { k: "harbor" }
  ];

  function yen(n) { return "¥" + n.toLocaleString("ja-JP"); }

  function cardHTML(entry) {
    var p = PRODUCTS[entry.k];
    if (!p) return "";
    var badge = entry.badge
      ? '<span class="pcard__badge ' + (entry.cls || "") + '">' + entry.badge + "</span>"
      : "";
    var price = p.was
      ? "<s>" + yen(p.was) + "</s><em>" + yen(p.price) + "</em> <small>(税込)</small>"
      : yen(p.price) + " <small>(税込)</small>";
    var dots = p.colors.map(function (c) {
      return '<i style="background:' + c + '"></i>';
    }).join("");
    return (
      '<li class="pcard">' +
        '<a href="#shop">' +
          '<div class="pcard__media">' + badge +
            '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy">' +
          "</div>" +
          '<p class="pcard__name">' + p.name + "</p>" +
          '<p class="pcard__price">' + price + "</p>" +
          '<span class="pcard__colors">' + dots + "</span>" +
        "</a>" +
      "</li>"
    );
  }

  function render(el, list) {
    if (el) el.innerHTML = list.map(cardHTML).join("");
  }

  /* ---------- 初期描画 ---------- */
  var shopTrack = document.getElementById("shopTrack");
  render(shopTrack, TABS.ranking);
  render(document.getElementById("recoTrack"), RECO);

  /* EXPLORER グリッド */
  var explorerImgs = [
    "assets/explorer-01.jpg",
    "assets/explorer-02.jpg",
    "assets/explorer-03.jpg",
    "assets/explorer-04.jpg",
    "assets/explorer-05.jpg",
    "assets/explorer-06.jpg",
    "assets/explorer-07.jpg",
    "assets/explorer-08.jpg"
  ];
  var grid = document.getElementById("explorerGrid");
  if (grid) {
    grid.innerHTML = explorerImgs.map(function (src, i) {
      return '<li><img src="' + src + '" alt="ユーザー投稿写真 ' + (i + 1) +
             '" loading="lazy"><span class="explorer__tag" aria-hidden="true">+</span></li>';
    }).join("");
  }

  /* ---------- Shop タブ ---------- */
  Array.prototype.forEach.call(document.querySelectorAll(".shop__tab"), function (btn) {
    btn.addEventListener("click", function () {
      Array.prototype.forEach.call(document.querySelectorAll(".shop__tab"), function (b) {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      render(shopTrack, TABS[btn.dataset.tab] || TABS.ranking);
      var rail = shopTrack.parentElement;
      if (rail) rail.scrollLeft = 0;
    });
  });

  /* ---------- 横スクロール矢印 ---------- */
  Array.prototype.forEach.call(document.querySelectorAll(".rail__arrow"), function (btn) {
    btn.addEventListener("click", function () {
      var scope = btn.closest(".shop__main") || btn.closest(".reco__wrap") ||
                  btn.closest(".news__wrap") || btn.parentElement;
      var rail = scope ? scope.querySelector(".rail") : null;
      if (!rail) return;
      var step = Math.max(rail.clientWidth * 0.8, 220);
      rail.scrollBy({ left: step * Number(btn.dataset.dir), behavior: "smooth" });
    });
  });

  /* ---------- ヒーロー ---------- */
  var slides = Array.prototype.slice.call(document.querySelectorAll(".hero__slide"));
  var dotsBox = document.getElementById("heroDots");
  var idx = 0;
  var timer = null;

  function show(i) {
    idx = (i + slides.length) % slides.length;
    slides.forEach(function (s, n) { s.classList.toggle("is-active", n === idx); });
    if (dotsBox) {
      Array.prototype.forEach.call(dotsBox.children, function (d, n) {
        d.setAttribute("aria-selected", n === idx ? "true" : "false");
      });
    }
  }

  if (dotsBox && slides.length) {
    slides.forEach(function (_, n) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-label", (n + 1) + "枚目のスライド");
      b.setAttribute("aria-selected", n === 0 ? "true" : "false");
      b.addEventListener("click", function () { show(n); restart(); });
      dotsBox.appendChild(b);
    });
  }

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function restart() {
    if (timer) clearInterval(timer);
    if (!reduce && slides.length > 1) {
      timer = setInterval(function () { show(idx + 1); }, 6000);
    }
  }
  var prev = document.getElementById("heroPrev");
  var next = document.getElementById("heroNext");
  if (prev) prev.addEventListener("click", function () { show(idx - 1); restart(); });
  if (next) next.addEventListener("click", function () { show(idx + 1); restart(); });
  restart();

  /* ---------- モバイルドロワー ---------- */
  var burger = document.getElementById("burger");
  var drawer = document.getElementById("drawer");
  var scrim = document.getElementById("scrim");

  function setDrawer(open) {
    if (!burger || !drawer || !scrim) return;
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    drawer.hidden = !open;
    scrim.hidden = !open;
    document.body.style.overflow = open ? "hidden" : "";
  }
  if (burger) {
    burger.addEventListener("click", function () {
      setDrawer(burger.getAttribute("aria-expanded") !== "true");
    });
  }
  if (scrim) scrim.addEventListener("click", function () { setDrawer(false); });
  if (drawer) {
    drawer.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setDrawer(false);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setDrawer(false);
  });

  /* ---------- 画像が未配置／読み込み失敗のときのプレースホルダー ---------- */
  function placeholder(img) {
    if (!img || img.dataset.failed) return;
    img.dataset.failed = "1";
    var wrap = img.parentElement;
    if (wrap && !wrap.classList.contains("ph")) wrap.classList.add("ph");
    var label = (img.getAttribute("alt") || "").trim();
    if (label && wrap && !wrap.querySelector(".ph__label")) {
      var s = document.createElement("span");
      s.className = "ph__label";
      s.textContent = label;
      wrap.appendChild(s);
    }
    img.style.visibility = "hidden";
  }
  document.addEventListener("error", function (e) {
    if (e.target && e.target.tagName === "IMG") placeholder(e.target);
  }, true);
  window.addEventListener("load", function () {
    Array.prototype.forEach.call(document.images, function (i) {
      if (!i.complete || i.naturalWidth === 0) placeholder(i);
    });
  });
})();
