import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, BookOpen, MessageCircle, Plus, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const chapters = [
  { number: "01", title: "Reconhecer padrões", text: "Observar comportamentos e dinâmicas com mais clareza, sem tirar conclusões precipitadas." },
  { number: "02", title: "Voltar a ouvir-te", text: "Dar espaço ao que sentes e separar aquilo que sabes daquilo que ainda estás a tentar compreender." },
  { number: "03", title: "Definir os teus limites", text: "Perceber o que precisas, o que aceitas e como cuidar de ti nas relações." },
];

const faqs = [
  { question: "Como posso comprar o e-book?", answer: "Envia uma mensagem pelo WhatsApp. Confirmamos o preço, os métodos de pagamento e a forma de entrega antes de avançares." },
  { question: "Como recebo o guia?", answer: "É um e-book digital. Os detalhes de entrega são confirmados contigo durante a conversa." },
  { question: "O guia permite diagnosticar alguém?", answer: "Não. É um recurso educativo para refletir sobre comportamentos e limites. Não substitui acompanhamento psicológico nem serve para diagnosticar outra pessoa." },
];

function Index() {
  const whatsappUrl = "https://wa.me/244XXXXXXXXX?text=" + encodeURIComponent("Olá! Gostaria de receber informações sobre o e-book Como Lidar com Pessoas Narcisistas.");

  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] text-[#f6f1e9] selection:bg-[#ff263b] selection:text-white">
      <header className="relative z-20 border-b border-white/10">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#inicio" aria-label="Sweet Simple Solutions — início" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border border-[#ff263b]/70 text-sm font-black tracking-[-0.14em] text-[#ff263b]">S/S</span>
            <span className="leading-none"><span className="block text-[11px] font-black tracking-[0.18em]">SWEET SIMPLE</span><span className="mt-1.5 block text-[9px] font-medium tracking-[0.34em] text-white/45">SOLUTIONS</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65 md:flex">
            <a className="transition hover:text-[#ff263b]" href="#guia">O guia</a>
            <a className="transition hover:text-[#ff263b]" href="#conteudo">O que vais encontrar</a>
            <a className="transition hover:text-[#ff263b]" href="#perguntas">Perguntas</a>
          </nav>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-white/25 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.12em] transition hover:border-[#ff263b] hover:bg-[#ff263b] sm:px-5">Falar connosco <ArrowRight size={13} /></a>
        </div>
      </header>

      <section id="inicio" className="relative isolate">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at 50% 28%, rgba(255,35,59,0.16), transparent 38%), radial-gradient(ellipse at 80% 65%, rgba(255,35,59,0.07), transparent 32%)" }} />
        <div className="mx-auto max-w-[1120px] px-5 pb-20 pt-16 text-center sm:px-8 sm:pb-24 sm:pt-24 lg:pt-28">
          <div className="mx-auto mb-7 flex w-fit items-center justify-center gap-3 border border-white/15 px-4 py-2"><Sparkles size={12} className="text-[#ff263b]" /><span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/65">Um guia para relações difíceis</span></div>
          <h1 className="mx-auto max-w-[1000px] text-[clamp(3.2rem,8.4vw,7.7rem)] font-semibold leading-[0.86] tracking-[-0.075em]"><span className="hero-title-rounded">VOLTA A CONFIAR</span><br /><span className="font-light italic text-[#ff263b]">na tua clareza.</span></h1>
          <p className="mx-auto mt-7 max-w-[570px] text-[14px] leading-7 text-white/60 sm:mt-9 sm:text-[16px] sm:leading-8">Um espaço para compreender relações difíceis, reconhecer padrões e olhar para as tuas necessidades com mais cuidado — sem pressa e sem julgamentos.</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="group mx-auto mt-8 inline-flex min-h-14 items-center gap-5 bg-[#ff263b] px-7 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#090909]">Conhecer o e-book <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></a>

          <div className="relative mx-auto mt-16 max-w-[800px] sm:mt-20">
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[75%] w-[72%] -translate-x-1/2 -translate-y-1/2 blur-[70px]" style={{ background: "rgba(255,35,59,0.22)" }} />
            <div className="relative mx-auto w-[min(82%,360px)] border border-white/20 bg-[#111] p-3 text-left shadow-[0_30px_100px_rgba(0,0,0,0.7)] sm:w-[330px] sm:p-4">
              <div className="flex items-center justify-between border-b border-white/15 pb-3"><span className="text-[8px] font-bold tracking-[0.2em] text-white/70">SWEET SIMPLE SOLUTIONS</span><span className="text-[8px] tracking-[0.16em] text-white/35">S/S — 001</span></div>
              <div className="relative mt-3 flex aspect-[0.73] flex-col justify-between overflow-hidden border border-white/10 p-5 sm:p-7" style={{ background: "linear-gradient(145deg, #1c1c1c 0%, #0a0a0a 58%, #26070d 100%)" }}>
                <div aria-hidden="true" className="absolute -right-20 top-10 h-56 w-56 rounded-full border border-[#ff263b]/70 shadow-[0_0_55px_rgba(255,35,59,0.2)] sm:-right-24 sm:h-64 sm:w-64" />
                <div aria-hidden="true" className="absolute -right-12 top-20 h-40 w-40 rounded-full border-[22px] border-[#ff263b]/20 sm:h-48 sm:w-48" />
                <div aria-hidden="true" className="absolute bottom-12 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#ff263b]/70 to-transparent" />
                <div className="relative z-10"><span className="text-[8px] font-bold uppercase tracking-[0.24em] text-[#ff263b]">Guia digital · Nº 01</span><h2 className="mt-7 text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[0.9] tracking-[-0.07em]">COMO LIDAR COM PESSOAS <span className="font-light italic text-[#ff263b]">NARCISISTAS</span></h2><p className="mt-5 max-w-[200px] text-[9px] leading-5 text-white/55">Compreender padrões. Reconhecer limites. Cuidar de ti.</p></div>
                <div className="relative z-10 flex items-end justify-between border-t border-white/20 pt-4"><span className="text-[8px] uppercase tracking-[0.2em] text-white/40">Uma leitura para ti</span><BookOpen size={17} className="text-[#ff263b]" /></div>
              </div>
              <div className="flex items-center justify-between px-1 pt-3"><span className="text-[7px] tracking-[0.22em] text-white/35">S/S EDITIONS</span><span className="text-[7px] tracking-[0.22em] text-white/35">LEITURA DIGITAL</span></div>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4"><span className="h-px w-8 bg-[#ff263b]/70" /><p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/45">Mais clareza. Mais espaço para ti.</p><span className="h-px w-8 bg-[#ff263b]/70" /></div>
          </div>
          <a href="#guia" className="mt-12 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/35 transition hover:text-white/80">Explorar <ArrowDown size={13} /></a>
        </div>
      </section>

      <section id="guia" className="border-y border-white/10 bg-[#101010]">
        <div className="mx-auto grid max-w-[1080px] gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-3 md:gap-8 lg:py-24">
          <div className="text-center"><span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#ff263b]/40 text-[10px] text-[#ff263b]">01</span><h2 className="mt-5 text-lg font-medium tracking-[-0.03em]">Compreender</h2><p className="mx-auto mt-3 max-w-[270px] text-[12px] leading-6 text-white/45">Observar as dinâmicas com curiosidade, sem te apressares a encontrar respostas.</p></div>
          <div className="text-center"><span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#ff263b]/40 text-[10px] text-[#ff263b]">02</span><h2 className="mt-5 text-lg font-medium tracking-[-0.03em]">Reconhecer</h2><p className="mx-auto mt-3 max-w-[270px] text-[12px] leading-6 text-white/45">Dar nome aos teus limites, às tuas necessidades e ao que merece atenção.</p></div>
          <div className="text-center"><span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#ff263b]/40 text-[10px] text-[#ff263b]">03</span><h2 className="mt-5 text-lg font-medium tracking-[-0.03em]">Cuidar de ti</h2><p className="mx-auto mt-3 max-w-[270px] text-[12px] leading-6 text-white/45">Avançar ao teu ritmo, respeitando a tua experiência e as tuas escolhas.</p></div>
        </div>
      </section>

      <section className="px-5 py-20 text-center sm:px-8 sm:py-28">
        <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#ff263b]">Uma pausa para ti</p>
        <h2 className="mx-auto mt-5 max-w-[760px] text-4xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-6xl">Não precisas de resolver tudo <span className="font-light italic text-[#ff263b]">hoje.</span></h2>
        <p className="mx-auto mt-6 max-w-[590px] text-[14px] leading-7 text-white/55">Quando uma relação se torna difícil, até as decisões simples podem parecer complicadas. Este guia é um ponto de partida para organizar ideias, fazer perguntas e escutar o que estás a sentir.</p>
      </section>

      <section id="conteudo" className="border-y border-white/10 bg-[#f4efe7] text-[#151313]">
        <div className="mx-auto max-w-[1040px] px-5 py-16 sm:px-8 sm:py-24">
          <div className="text-center"><p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#c91f32]">Dentro do e-book</p><h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl">Pequenos passos.<br /><span className="font-light italic">Mais consciência.</span></h2><p className="mx-auto mt-5 max-w-[480px] text-[12px] leading-6 text-black/55">Lê com calma e guarda aquilo que fizer sentido para a tua realidade.</p></div>
          <div className="mx-auto mt-12 max-w-[820px] border-t border-black/15">{chapters.map((chapter) => <article key={chapter.number} className="grid gap-3 border-b border-black/15 py-7 sm:grid-cols-[60px_1fr_1fr] sm:items-center sm:gap-7 sm:py-8"><span className="text-[10px] font-bold tracking-[0.15em] text-[#c91f32]">{chapter.number}</span><h3 className="text-xl font-medium tracking-[-0.04em] sm:text-2xl">{chapter.title}</h3><p className="text-[12px] leading-6 text-black/55">{chapter.text}</p></article>)}</div>
        </div>
      </section>

      <section id="contacto" className="relative isolate overflow-hidden text-center">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(255,35,59,0.2), transparent 55%)" }} />
        <div className="mx-auto max-w-[820px] px-5 py-20 sm:px-8 sm:py-28"><p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#ff263b]">O próximo passo é teu</p><h2 className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-6xl">Começa por fazer<br /><span className="font-light italic text-[#ff263b]">as perguntas.</span></h2><p className="mx-auto mt-6 max-w-[520px] text-[13px] leading-7 text-white/55">Fala connosco para conhecer o preço, as formas de pagamento e os detalhes de entrega. Decides depois, com toda a informação.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="group mx-auto mt-8 inline-flex min-h-14 items-center gap-4 bg-[#ff263b] px-7 text-[10px] font-bold uppercase tracking-[0.14em] transition hover:bg-white hover:text-[#090909]"><MessageCircle size={15} /> Pedir informações <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></a></div>
      </section>

      <section id="perguntas" className="border-t border-white/10 bg-[#101010] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-[900px] gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-12"><div className="text-center md:text-left"><p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#ff263b]">Antes de decidir</p><h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">Perguntas frequentes.</h2></div><div>{faqs.map((faq) => <details key={faq.question} className="group border-t border-white/15 py-5 last:border-b"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[12px] font-medium text-white/85 sm:text-[13px]">{faq.question}<Plus size={15} className="shrink-0 text-[#ff263b] transition group-open:rotate-45" /></summary><p className="max-w-[600px] pr-8 pt-4 text-[12px] leading-6 text-white/50">{faq.answer}</p></details>)}<p className="mt-6 text-[10px] leading-6 text-white/30">Este e-book tem fins educativos. Não se destina a diagnosticar outra pessoa nem substitui acompanhamento psicológico ou aconselhamento profissional.</p></div></div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-6 px-5 py-8 text-center sm:px-8 md:flex-row md:justify-between md:text-left lg:px-12"><a href="#inicio" className="flex items-center gap-3" aria-label="Sweet Simple Solutions — voltar ao início"><span className="flex h-9 w-9 items-center justify-center border border-[#ff263b]/70 text-[12px] font-black tracking-[-0.12em] text-[#ff263b]">S/S</span><span><span className="block text-[10px] font-bold tracking-[0.18em]">SWEET SIMPLE</span><span className="mt-1 block text-[8px] tracking-[0.34em] text-white/40">SOLUTIONS</span></span></a><p className="max-w-[340px] text-[10px] leading-5 text-white/35">Um guia para olhar para relações difíceis com mais clareza e respeito por ti.</p><div className="flex flex-col items-center gap-2 text-[10px] text-white/40 md:items-end"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[#ff263b]"><MessageCircle size={12} /> Contactar pelo WhatsApp</a><p>© {new Date().getFullYear()} Sweet Simple Solutions</p></div></div>
      </footer>
    </main>
  );
}
