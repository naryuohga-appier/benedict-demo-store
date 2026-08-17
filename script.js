/* ==========================================================
   BENEDICT — demo storefront (static prototype)
   ========================================================== */
(function () {
  "use strict";

  /* ---------- 商品データ（デモ用モックアップ） ----------
     brand: 商品カードとフィードに表示する取扱ブランド名
     価格は各ブランド公式サイトの掲載値（2026-08-17時点）を転記したデモ用の値 */
  var PRODUCTS = {
    /* ===== GREGORY ===== */
    gr_daypackDsp: { brand: "GREGORY", name: "デイパック ダブルサイドポケット", price: 33000, img: "assets/product-01-gregory-daypack-dsp.jpg", colors: ["#1b1b1b","#3d4f6b","#6b4b3a","#8a8f7a","#c9b79c","#5c3a52","#2f5d4a","#a33b2f","#d8d3c8","#7d8ba1"] },
    gr_fineday:    { brand: "GREGORY", name: "ファインデイ V2", price: 22000, img: "assets/product-02-gregory-fineday-v2.jpg", colors: ["#1b1b1b","#c9c4ba","#5a6f8c","#2f5d4a","#8a5a3c","#6d6a86","#b0453a","#d8cdbb","#3b3f45"] },
    gr_easypeasy:  { brand: "GREGORY", name: "イージーピージーデイ", price: 22000, img: "assets/product-03-gregory-easy-peasy-day.jpg", colors: ["#1b1b1b","#7f8b7a","#c2b49b","#4a5a75","#8d4a4a","#d6d1c7"] },
    gr_allday:     { brand: "GREGORY", name: "オールデイ", price: 29700, img: "assets/product-04-gregory-all-day.jpg", colors: ["#1b1b1b","#3f4a3c","#6f6154","#9aa0a6"] },
    gr_campus:     { brand: "GREGORY", name: "キャンパスデイ M", price: 17600, img: "assets/product-05-gregory-campus-day-m.jpg", colors: ["#1b1b1b","#37485f","#7a6a55","#8e8e8e"] },
    gr_rhune22:    { brand: "GREGORY", name: "ルーヌ22", price: 30800, img: "assets/product-06-gregory-rhune-22.jpg", colors: ["#20232a","#5d6b73","#b7ad9c","#39514a"] },
    gr_sacoche:    { brand: "GREGORY", name: "クラシックサコッシュ M", price: 6600, img: "assets/product-07-gregory-classic-sacoche-m.jpg", colors: ["#1b1b1b","#c9c4ba","#3f5a7a","#7a4b3a","#5f6b4e","#a63f3f"] },
    gr_quick:      { brand: "GREGORY", name: "クイックポケット M", price: 6600, img: "assets/product-08-gregory-quick-pocket-m.jpg", colors: ["#1b1b1b","#d3cec4","#46586f","#6f7a58","#96442f"] },
    gr_padded:     { brand: "GREGORY", name: "パデッドショルダーポーチ M", price: 8250, img: "assets/product-09-gregory-padded-shoulder-pouch-m.jpg", colors: ["#1b1b1b","#cfc9be","#4c5a70","#7b6a52"] },
    gr_boatTote:   { brand: "GREGORY", name: "ボートトート S", price: 9900, img: "assets/product-10-gregory-boat-tote-s.jpg", colors: ["#1b1b1b","#d8d2c6","#3f5a4a","#8d6a4a","#5a5f7a"] },
    gr_compass30:  { brand: "GREGORY", name: "コンパス30", price: 26400, img: "assets/product-11-gregory-compass-30.jpg", colors: ["#1b1b1b","#4a5c6b","#7e7263"] },
    gr_sketch8:    { brand: "GREGORY", name: "スケッチ8", price: 11000, img: "assets/product-12-gregory-sketch-8.jpg", colors: ["#9aa0a6","#1b1b1b","#4d6b58"] },
    gr_zulu35:     { brand: "GREGORY", name: "ズール35 SM/MD", price: 33000, img: "assets/product-13-gregory-zulu-35.jpg", colors: ["#4f7fb0","#1b1b1b","#7a6a52"] },
    gr_deva70:     { brand: "GREGORY", name: "ディバ70 S", price: 47520, was: 59400, img: "assets/product-14-gregory-deva-70.jpg", colors: ["#9a9a94","#3f5a4a","#1b1b1b"] },
    gr_baltoro75:  { brand: "GREGORY", name: "バルトロ75 S", price: 47520, was: 59400, img: "assets/product-15-gregory-baltoro-75.jpg", colors: ["#1b1b1b","#3c5a6b","#6b5a3c"] },
    gr_border25:   { brand: "GREGORY", name: "ボーダー25", price: 20240, was: 25300, img: "assets/product-16-gregory-border-25.jpg", colors: ["#1b1b1b","#4a4f58","#6f6355"] },
    gr_raincover:  { brand: "GREGORY", name: "レインカバー 50L–80L", price: 7150, img: "assets/product-17-gregory-raincover.jpg", colors: ["#c0392b","#1b1b1b"] },

    /* ===== karrimor ===== */
    km_lancs28:    { brand: "karrimor", name: "lancs 28", price: 20000, img: "assets/product-18-karrimor-lancs-28.jpg", colors: ["#1b1b1b","#4a5a6b","#6b6152"] },
    km_highlands40:{ brand: "karrimor", name: "highlands 40", price: 31000, img: "assets/product-19-karrimor-highlands-40.jpg", colors: ["#2b3a2f","#1b1b1b","#7a6a55"] },
    km_highlands24:{ brand: "karrimor", name: "highlands 24", price: 24000, img: "assets/product-20-karrimor-highlands-24.jpg", colors: ["#1b1b1b","#3f5a4a","#8a8f7a"] },
    km_mdaypack25: { brand: "karrimor", name: "M daypack 25", price: 20000, img: "assets/product-21-karrimor-m-daypack-25.jpg", colors: ["#1b1b1b","#46586f","#6f7a58"] },
    km_vision16:   { brand: "karrimor", name: "vision 16", price: 25000, img: "assets/product-22-karrimor-vision-16.jpg", colors: ["#1b1b1b","#5d6b73"] },
    km_marsTop27:  { brand: "karrimor", name: "mars top load 27", price: 12500, img: "assets/product-23-karrimor-mars-top-load-27.jpg", colors: ["#1b1b1b","#8a5a3c","#3f5a7a"] },
    km_grabTote:   { brand: "karrimor", name: "grab tote pack", price: 10000, img: "assets/product-24-karrimor-grab-tote-pack.jpg", colors: ["#1b1b1b","#d3cec4","#5f6b4e"] },
    km_tribute25:  { brand: "karrimor", name: "tribute 25", price: 17820, was: 19800, img: "assets/product-25-karrimor-tribute-25.jpg", colors: ["#1b1b1b","#6b5a3c"] },
    km_cougar60:   { brand: "karrimor", name: "CougarApex 60+", price: 47000, img: "assets/product-26-karrimor-cougarapex-60.jpg", colors: ["#2b3a2f","#1b1b1b"] }
  };

  var TABS = {
    ranking: ["gr_daypackDsp", "gr_rhune22", "km_highlands40", "gr_easypeasy", "gr_fineday",
              "km_mdaypack25", "gr_boatTote", "km_lancs28", "gr_allday", "gr_compass30"],
    "new":   ["gr_zulu35", "gr_rhune22", "km_vision16", "km_highlands24", "gr_sketch8",
              "gr_sacoche", "km_grabTote", "gr_campus"],
    sale:    ["gr_deva70", "gr_baltoro75", "gr_border25", "km_tribute25"],
    outdoor: ["km_cougar60", "gr_baltoro75", "gr_zulu35", "km_highlands40", "gr_compass30",
              "gr_deva70", "gr_raincover"]
  };

  var BADGES = {
    ranking: { gr_daypackDsp: ["RANKING", ""] },
    "new":   { gr_zulu35: ["NEW", "pcard__badge--new"], gr_rhune22: ["NEW", "pcard__badge--new"],
               km_vision16: ["NEW", "pcard__badge--new"] },
    sale:    { gr_deva70: ["SALE", "pcard__badge--sale"], gr_baltoro75: ["SALE", "pcard__badge--sale"],
               gr_border25: ["SALE", "pcard__badge--sale"], km_tribute25: ["SALE", "pcard__badge--sale"] },
    outdoor: {}
  };

  var RECO = ["gr_fineday", "km_mdaypack25", "gr_daypackDsp", "gr_border25", "km_highlands24",
              "gr_rhune22", "km_vision16", "gr_campus", "gr_sketch8", "km_grabTote"];

  function yen(n) { return "\u00a5" + n.toLocaleString("ja-JP"); }

  function cardHTML(key, badge) {
    var p = PRODUCTS[key];
    if (!p) return "";
    var badgeHTML = badge
      ? '<span class="pcard__badge ' + (badge[1] || "") + '">' + badge[0] + "</span>"
      : "";
    var price = p.was
      ? "<s>" + yen(p.was) + "</s><em>" + yen(p.price) + "</em> <small>(\u7a0e\u8fbc)</small>"
      : yen(p.price) + " <small>(\u7a0e\u8fbc)</small>";
    var dots = p.colors.map(function (c) {
      return '<i style="background:' + c + '"></i>';
    }).join("");
    return (
      '<li class="pcard" data-brand="' + p.brand + '">' +
        '<a href="#shop">' +
          '<div class="pcard__media">' + badgeHTML +
            '<img src="' + p.img + '" alt="' + p.brand + " " + p.name + '" loading="lazy">' +
          "</div>" +
          '<p class="pcard__brand">' + p.brand + "</p>" +
          '<p class="pcard__name">' + p.name + "</p>" +
          '<p class="pcard__price">' + price + "</p>" +
          '<span class="pcard__colors">' + dots + "</span>" +
        "</a>" +
      "</li>"
    );
  }

  /* ---------- Shop（タブ × ブランド絞り込み） ---------- */
  var state = { tab: "ranking", brand: "all" };
  var shopTrack = document.getElementById("shopTrack");
  var shopEmpty = document.getElementById("shopEmpty");

  function renderShop() {
    if (!shopTrack) return;
    var keys = (TABS[state.tab] || TABS.ranking).filter(function (k) {
      return state.brand === "all"
        || (PRODUCTS[k] && PRODUCTS[k].brand === state.brand);
    });
    var badges = BADGES[state.tab] || {};
    shopTrack.innerHTML = keys.map(function (k) { return cardHTML(k, badges[k]); }).join("");
    if (shopEmpty) {
      shopEmpty.hidden = keys.length > 0;
      shopEmpty.textContent = keys.length ? "" : state.brand
        + " \u306e\u8a72\u5f53\u5546\u54c1\u306f\u3053\u306e\u30ab\u30c6\u30b4\u30ea\u306b\u3054\u3056\u3044\u307e\u305b\u3093\u3002"
        + "\u304a\u53d6\u308a\u5bc4\u305b\u3082\u627f\u3063\u3066\u304a\u308a\u307e\u3059\u3002";
    }
    var rail = shopTrack.parentElement;
    if (rail) rail.scrollLeft = 0;
  }

  function renderReco() {
    var el = document.getElementById("recoTrack");
    if (el) el.innerHTML = RECO.map(function (k) { return cardHTML(k, null); }).join("");
  }

  renderShop();
  renderReco();

  function activate(list, btn) {
    Array.prototype.forEach.call(list, function (b) {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");
  }

  var tabBtns = document.querySelectorAll(".shop__tab");
  Array.prototype.forEach.call(tabBtns, function (btn) {
    btn.addEventListener("click", function () {
      activate(tabBtns, btn);
      state.tab = btn.dataset.tab;
      renderShop();
    });
  });

  var chipBtns = document.querySelectorAll(".chip");
  Array.prototype.forEach.call(chipBtns, function (btn) {
    btn.addEventListener("click", function () {
      activate(chipBtns, btn);
      state.brand = btn.dataset.brand;
      renderShop();
    });
  });

  /* ---------- EXPLORER グリッド ---------- */
  var explorerImgs = [
    "assets/explorer-01.jpg", "assets/explorer-02.jpg", "assets/explorer-03.jpg",
    "assets/explorer-04.jpg", "assets/explorer-05.jpg", "assets/explorer-06.jpg",
    "assets/explorer-07.jpg", "assets/explorer-08.jpg"
  ];
  var grid = document.getElementById("explorerGrid");
  if (grid) {
    grid.innerHTML = explorerImgs.map(function (src, i) {
      return '<li><img src="' + src + '" alt="\u304a\u5ba2\u6837\u306e\u304a\u5199\u771f '
             + (i + 1) + '" loading="lazy">'
             + '<span class="explorer__tag" aria-hidden="true">+</span></li>';
    }).join("");
  }

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
  // 読み込み中（loading="lazy" で未取得）の画像を失敗扱いしないこと。
  // 判定は「読み込みが終わっているのに寸法が 0」= 確実に失敗した場合のみ。
  window.addEventListener("load", function () {
    Array.prototype.forEach.call(document.images, function (i) {
      if (i.complete && i.naturalWidth === 0) placeholder(i);
    });
  });
})();
