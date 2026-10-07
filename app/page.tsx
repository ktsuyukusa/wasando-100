"use client";

import { useState } from "react";
import { content } from "../lib/content";
import type { Locale } from "../lib/site-config";

type RouteId = "company" | "income" | "takeover";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ja");
  const t = content[locale];
  const [selected, setSelected] = useState<RouteId>("company");
  const route = t.routes.find((item) => item.id === selected) ?? t.routes[0];

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#"><span>WaSanDo</span><small>和讃堂</small></a>
        <nav><a href="#routes">{t.nav.routes}</a><a href="#tools">{t.nav.tools}</a><div className="locale">{(["ja","en","pl"] as Locale[]).map((l)=><button key={l} className={locale===l?"active":""} onClick={()=>setLocale(l)}>{l.toUpperCase()}</button>)}</div><a className="navCta" href="#contact">{t.nav.contact}</a></nav>
      </header>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="lead">{t.lead}</p>
          <a className="primary" href="#routes">{t.choose}<b>↓</b></a>
        </div>
        <div className="heroMap" aria-label="income system">
          <div className="orbit orbitA"><span>今の利益</span><span>新しい収入</span></div>
          <div className="orbit orbitB"><span>自動化</span><span>海外</span></div>
          <div className="core"><small>100 YEARS</small><strong>稼ぎ<br/>続ける</strong></div>
          <p>人・一社・一市場への<br/>依存を減らす</p>
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
        <div className="sectionHead"><p className="eyebrow">SMALL TOOLS · WORKING TOGETHER</p><h2>{t.toolsTitle}</h2><p>{t.toolsLead}</p></div>
        <div className="toolGrid">{t.toolExamples.map((tool, i) => <div key={tool}><small>{String(i+1).padStart(2,"0")}</small><strong>{tool}</strong><span>単独利用 / 組合せ / White Label / Multilingual</span></div>)}</div>
      </section>

      <section className="closing" id="contact"><p className="eyebrow">NEXT MOVE</p><h2>{t.closing}</h2><p>{t.closingText}</p><a className="primary" href="mailto:contact@wasando.com">{t.consult} <b>→</b></a></section>
      <footer><span>WaSanDo 和讃堂</span><small>Small tools. Durable income.</small></footer>
    </main>
  );
}
