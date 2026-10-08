"use client";

import { useEffect, useState } from "react";
import { content } from "../lib/content";
import type { Locale } from "../lib/site-config";

type RouteId = "company" | "income" | "takeover";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ja");
  const t = content[locale];
  const [selected, setSelected] = useState<RouteId>("company");
  const route = t.routes.find((item) => item.id === selected) ?? t.routes[0];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#" aria-label="WaSanDo 和讃堂"><img src="/wasando-logo.png" alt="WaSanDo 和讃堂" /><span><strong>WaSanDo</strong><small>和讃堂</small></span></a>
        <nav><a href="#routes" onClick={() => setSelected("company")}>{t.nav.routes}</a><a href="#routes" onClick={() => setSelected("income")}>{t.nav.tools}</a><a href="#routes" onClick={() => setSelected("takeover")}>{locale === "ja" ? "稼いでいる事業を手に入れる" : locale === "en" ? "Acquire an earning business" : "Przejmij dochodowy biznes"}</a><div className="locale">{(["ja","en","pl"] as Locale[]).map((l)=><button key={l} className={locale===l?"active":""} onClick={()=>setLocale(l)}>{l.toUpperCase()}</button>)}</div><a className="navCta" href="#contact">{t.nav.contact}</a></nav>
      </header>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="lead">{t.lead}</p>
          <a className="primary" href="#routes">{t.choose}<b>↓</b></a>
        </div>
        <div className="heroMap profitEngine" aria-label="income system">
          <div className="engineLever leverTop"><small>01</small><strong>{locale === "ja" ? "既存事業" : locale === "en" ? "EXISTING BUSINESS" : "OBECNY BIZNES"}</strong><span>{locale === "ja" ? "収益を拡大" : locale === "en" ? "Grow revenue" : "Zwiększ przychody"}</span></div>
          <div className="engineLever leverRight"><small>02</small><strong>{locale === "ja" ? "新規収入源" : locale === "en" ? "NEW INCOME" : "NOWY DOCHÓD"}</strong><span>{locale === "ja" ? "稼ぎ口を追加" : locale === "en" ? "Add income streams" : "Dodaj źródła"}</span></div>
          <div className="engineCore"><img src="/wasando-logo.png" alt="WaSanDo" /></div>
          <div className="engineLever leverBottom"><small>03</small><strong>{locale === "ja" ? "自動化" : locale === "en" ? "AUTOMATION" : "AUTOMATYZACJA"}</strong><span>{locale === "ja" ? "人への依存を軽減" : locale === "en" ? "Reduce dependency" : "Mniej zależności"}</span></div>
          <div className="engineLever leverLeft"><small>04</small><strong>{locale === "ja" ? "海外展開" : locale === "en" ? "NEW MARKETS" : "NOWE RYNKI"}</strong><span>{locale === "ja" ? "市場を広げる" : locale === "en" ? "Expand markets" : "Rozszerz rynki"}</span></div>
          <div className="engineOutcome"><small>WASANDO 100</small><strong>{locale === "ja" ? "安定した利益を、生み続ける。" : locale === "en" ? "Keep generating durable profit." : "Trwale generuj zysk."}</strong></div>
        </div>
      </section>

      <section className="routes" id="routes">
        <div className="sectionHead"><p className="eyebrow">START HERE</p><h2>{t.startTitle}</h2><p>{t.startLead}</p></div>
        <div className="routeTabs">
          {t.routes.map((item) => (
            <button key={item.id} className={selected === item.id ? "active" : ""} onClick={() => setSelected(item.id as RouteId)}>
              <small>{item.no}</small><strong>{item.label}</strong><span>{item.promise}</span>
            </button>
          ))}
        </div>
        <article className="routeDetail">
          <div className="routeIntro"><p className="eyebrow">ROUTE {route.no}</p><h3>{route.promise}</h3><p>{route.detail}</p></div>
          <ol>{route.steps.map((step, i) => <li key={step}><b>{String(i+1).padStart(2,"0")}</b><span>{step}</span></li>)}</ol>
        </article>
      </section>

      <section className="tools" id="tools">
        <div className="sectionHead">
          <p className="eyebrow">{locale === "ja" ? "すぐ使える｜売上改善ツール" : locale === "en" ? "READY TO USE｜REVENUE TOOLS" : "GOTOWE DO UŻYCIA｜NARZĘDZIA SPRZEDAŻOWE"}</p>
          <h2>{locale === "ja" ? "逃している売上を、取りにいく。" : locale === "en" ? "Recover the revenue you are already missing." : "Odzyskaj sprzedaż, która dziś Ci ucieka."}</h2>
          <p>{locale === "ja" ? "電話に出られない。見積を出したまま。次の点検時期を逃す。すでにある需要を売上に変えるところから始めます。さらに、今ある強みから新しい収入や海外売上をつくるツールも用意します。" : locale === "en" ? "Missed calls, forgotten quotes and missed service dates are already costing sales. Recover that demand first, then use what you already have to create new and overseas revenue." : "Nieodebrane telefony, zapomniane wyceny i przegapione terminy serwisu już kosztują sprzedaż. Najpierw odzyskaj ten popyt, potem wykorzystaj obecne mocne strony do tworzenia nowych i zagranicznych przychodów."}</p>
        </div>
        <div className="fastGrid">
          <article className="fastCard fastPrimary">
            <div className="fastTag">{locale === "ja" ? "売上を取り戻す" : locale === "en" ? "RECOVER REVENUE" : "ODZYSKAJ PRZYCHÓD"}</div>
            <h3>{locale === "ja" ? "取りこぼし売上回収" : locale === "en" ? "Missed Revenue Recovery" : "Odzyskiwanie utraconej sprzedaży"}</h3>
            <p className="fastHook">{locale === "ja" ? "電話に出られなかっただけで、売上を捨てていませんか？" : locale === "en" ? "A missed call should not mean a lost customer." : "Nieodebrany telefon nie powinien oznaczać utraty klienta."}</p>
            <div className="recoveryFlow">
              <span>{locale === "ja" ? "不在着信" : locale === "en" ? "Missed call" : "Nieodebrany telefon"}</span><b>→</b>
              <span>{locale === "ja" ? "即時返信" : locale === "en" ? "Instant reply" : "Natychmiastowa odpowiedź"}</span><b>→</b>
              <span>{locale === "ja" ? "用件受付" : locale === "en" ? "Capture need" : "Zbierz potrzebę"}</span><b>→</b>
              <span>{locale === "ja" ? "予約・見積" : locale === "en" ? "Booking / quote" : "Rezerwacja / wycena"}</span><b>→</b>
              <span>{locale === "ja" ? "追客" : locale === "en" ? "Follow-up" : "Follow-up"}</span>
            </div>
            <div className="fastBenefits">
              <strong>{locale === "ja" ? "回収できた売上まで測定" : locale === "en" ? "Measure revenue recovered" : "Mierz odzyskany przychód"}</strong>
              <span>{locale === "ja" ? "不在着信数 → 顧客回答 → 見積・予約 → 受注 → 回収売上" : locale === "en" ? "Missed calls → replies → quotes/bookings → wins → recovered revenue" : "Nieodebrane → odpowiedzi → wyceny/rezerwacje → sprzedaż → odzyskany przychód"}</span>
            </div>
            <a className="offerCta" href="#contact">{locale === "ja" ? "この仕組みを導入する" : locale === "en" ? "Install this system" : "Wdróż ten system"}<b>→</b></a>
          </article>

          <article className="fastCard">
            <div className="fastTag">{locale === "ja" ? "見積を売上にする" : locale === "en" ? "CONVERT QUOTES" : "ZAMIEŃ WYCENY W SPRZEDAŻ"}</div>
            <h3>{locale === "ja" ? "見積後フォロー" : locale === "en" ? "Quote Follow-up" : "Follow-up po wycenie"}</h3>
            <p>{locale === "ja" ? "見積を送って終わりにせず、適切な時期に再接触して受注機会を回収。" : locale === "en" ? "Re-contact quoted customers at the right time and recover sales opportunities." : "Wracaj do klientów po wycenie we właściwym czasie i odzyskuj szanse sprzedaży."}</p>
            <a className="fastLink" href="#contact">{locale === "ja" ? "見積の取りこぼしを減らす" : locale === "en" ? "Recover quote opportunities" : "Odzyskaj szanse z wycen"} →</a>
          </article>

          <article className="fastCard">
            <div className="fastTag">{locale === "ja" ? "既存客から次の売上" : locale === "en" ? "REPEAT REVENUE" : "POWTARZALNY PRZYCHÓD"}</div>
            <h3>{locale === "ja" ? "リピート売上" : locale === "en" ? "Repeat Sales" : "Sprzedaż powtórna"}</h3>
            <p>{locale === "ja" ? "点検・更新・再購入の時期を逃さず、既存顧客から次の注文につなげる。" : locale === "en" ? "Turn service, renewal and repurchase timing into the next order." : "Zamieniaj terminy serwisu, odnowienia i ponownego zakupu w kolejne zamówienia."}</p>
            <a className="fastLink" href="#contact">{locale === "ja" ? "リピート売上をつくる" : locale === "en" ? "Build repeat revenue" : "Zbuduj sprzedaż powtórną"} →</a>
          </article>

          <article className="fastCard">
            <div className="fastTag">{locale === "ja" ? "新しい稼ぎをつくる" : locale === "en" ? "CREATE NEW INCOME" : "STWÓRZ NOWY DOCHÓD"}</div>
            <h3>{locale === "ja" ? "新規収入発見" : locale === "en" ? "New Income Finder" : "Wyszukiwarka nowego dochodu"}</h3>
            <p>{locale === "ja" ? "技術・ノウハウ・顧客基盤・設備から、まだ売っていない商品やサービス候補を見つける。" : locale === "en" ? "Find new sellable offers hidden in your know-how, customers, capabilities and equipment." : "Znajdź nowe oferty ukryte w know-how, klientach, możliwościach i sprzęcie."}</p>
            <a className="fastLink" href="#contact">{locale === "ja" ? "新しい収入源を探す" : locale === "en" ? "Find new income" : "Znajdź nowy dochód"} →</a>
          </article>

          <article className="fastCard">
            <div className="fastTag">{locale === "ja" ? "海外に売上を追加" : locale === "en" ? "ADD OVERSEAS SALES" : "DODAJ SPRZEDAŻ ZA GRANICĄ"}</div>
            <h3>{locale === "ja" ? "海外販売診断" : locale === "en" ? "Overseas Sales Check" : "Ocena sprzedaży zagranicznej"}</h3>
            <p>{locale === "ja" ? "今の商品・サービスを、どの市場で、どう売れば収益になるかを絞り込む。" : locale === "en" ? "Identify where and how an existing offer can produce revenue in another market." : "Sprawdź, gdzie i jak obecna oferta może zarabiać na innym rynku."}</p>
            <a className="fastLink" href="#contact">{locale === "ja" ? "海外売上の可能性を調べる" : locale === "en" ? "Check overseas potential" : "Sprawdź potencjał zagraniczny"} →</a>
          </article>

          <article className="fastCard">
            <div className="fastTag">{locale === "ja" ? "時間を買う" : locale === "en" ? "BUY TIME" : "KUP CZAS"}</div>
            <h3>{locale === "ja" ? "事業取得検索" : locale === "en" ? "Business Expansion Finder" : "Wyszukiwarka biznesów do przejęcia"}</h3>
            <p>{locale === "ja" ? "後継者不在などで譲渡される、すでに稼いでいる事業を探し、自社との相乗効果と改善余地を評価。" : locale === "en" ? "Find earning businesses ready for transfer and assess synergy and improvement potential." : "Znajdź dochodowe firmy gotowe do przekazania i oceń synergię oraz potencjał poprawy."}</p>
            <a className="fastLink" href="#contact">{locale === "ja" ? "取得候補を探す" : locale === "en" ? "Find acquisition candidates" : "Znajdź kandydatów do przejęcia"} →</a>
          </article>
        </div>
      </section>

      <section className="closing" id="contact"><p className="eyebrow">NEXT MOVE</p><h2>{t.closing}</h2><p>{t.closingText}</p><a className="primary" href="mailto:contact@wasando.com">{t.consult} <b>→</b></a></section>
      <footer><span>WaSanDo 和讃堂</span><small>Small tools. Durable income.</small></footer>
    </main>
  );
}
