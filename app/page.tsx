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
        <div className="sectionHead"><p className="eyebrow">MORE WAYS TO EARN</p><h2>{t.toolsTitle}</h2><p>{t.toolsLead}</p></div>
        <div className="toolGrid">{t.toolExamples.map((tool, i) => <div key={tool}><small>{String(i+1).padStart(2,"0")}</small><strong>{tool}</strong></div>)}</div>
      </section>

      <section className="closing" id="contact"><p className="eyebrow">NEXT MOVE</p><h2>{t.closing}</h2><p>{t.closingText}</p><a className="primary" href="mailto:contact@wasando.com">{t.consult} <b>→</b></a></section>
      <footer><span>WaSanDo 和讃堂</span><small>Small tools. Durable income.</small></footer>
    </main>
  );
}
