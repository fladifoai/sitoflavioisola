# Regole SEO — Concalma Island

## Colori del sito
- Blu: #0000CC
- Bianco: #FFFFFF
- Nero: #1E1E1E

## Logo
- File: concalma_logo_clean.png (sfondo trasparente)
- Navbar: 32px, colori originali (nuvoletta bianca, linee nere)
- Hero: 120px, colori originali
- Footer: 60px, colori originali
- MAI usare filtri CSS che cambino i colori

## Struttura heading (CRITICO)
- UN SOLO H1 per pagina (il titolo principale)
- Sezioni principali: H2
- Sotto-sezioni: H3
- Mai saltare livelli (H1 > H2 > H3, mai H1 > H3)
- Payoff inglese "THREE DAYS OF PURE MADNESS" = tag <p>, NON heading

## Lingua
- Tutto in italiano tranne il payoff (branding)
- Meta description: solo italiano
- OG title / Twitter title: solo italiano
- JSON-LD description: solo italiano
- "Giorno 1/2/3" NON "Day 1/2/3"

## Meta tag obbligatori (nel <head>)
- title: "Concalma Island | Festival 1-3 Maggio 2026 — Ventotene"
- meta description: italiano, max 160 caratteri
- canonical: https://concalma.cloud/
- og:title, og:description, og:image (1200x630), og:locale it_IT
- twitter:card, twitter:title, twitter:image, twitter:site @concalma_
- theme-color: #0000CC
- favicon (32x32, 16x16, apple-touch-icon 180x180)
- NON includere: meta generator, dc.creator, build

## Pagine del sito (una HTML per ognuna)
- index.html — Home (hero, benvenuti, programma, 10 hours, prenotazioni, countdown, partner, FAQ, social)
- artisti.html — Lineup
- alloggi.html — Dove dormirai
- pacchetti.html — Pacchetti
- privacy.html — Privacy Policy
- cookie.html — Cookie Policy
- termini.html — Termini e Condizioni

## Navigazione
- Ogni link deve avere href reale (es. href="artisti.html")
- Navbar e footer identici su tutte le pagine
- Link esterni: sempre target="_blank" rel="noopener noreferrer"

## Tag semantici HTML5
- <header> per navbar
- <main> per contenuto principale
- <footer> per footer
- <nav> con role="navigation" e aria-label
- <section> con aria-label per ogni sezione

## Immagini
- Sempre width e height espliciti
- Sempre alt descrittivo in italiano con keyword
- loading="lazy" su tutte tranne hero
- Artisti: 600x600
- Alloggi: 800x500

## Video
- Solo .mp4 (H.264, baseline, no audio, faststart)
- Attributi: autoplay muted loop playsinline preload="metadata"
- poster image obbligatorio
- Script JS fallback per autoplay mobile

## Dati strutturati (JSON-LD)
- MusicEvent schema su index.html
- FAQPage schema su index.html
- Descrizioni solo in italiano

## File nella root
- robots.txt (Allow: /, Sitemap)
- sitemap.xml (tutte le pagine)

## Preconnect
- https://i0.wp.com
- https://images.unsplash.com

## Accessibilita
- aria-label su nav, sezioni, video, hamburger
- role su nav, main, footer
- Accordion FAQ con aria-expanded
