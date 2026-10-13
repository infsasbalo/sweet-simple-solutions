import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, BookOpen, MessageCircle, Plus } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const chapters = [
  { number: "01", title: "Reconhecer padrões", text: "Observar comportamentos e dinâmicas que te deixam confuso, sem tirar conclusões precipitadas." },
  { number: "02", title: "Voltar a ouvir-te", text: "Dar espaço ao que sentes, separar factos de interpretações e olhar para a situação com mais clareza." },
  { number: "03", title: "Definir os teus limites", text: "Perceber o que aceitas, o que precisas de comunicar e quando procurar apoio." },
];

const faqs = [
  { question: "Como posso comprar o e-book?", answer: "Envia uma mensagem pelo WhatsApp. Confirmamos o preço, os métodos de pagamento e a forma de entrega antes de avançares." },
  { question: "Como recebo o guia?", answer: "É um e-book digital. Os detalhes de entrega são confirmados contigo durante a conversa." },
  { question: "O guia permite diagnosticar alguém?", answer: "Não. É um recurso educativo para refletir sobre comportamentos e limites. Não substitui acompanhamento psicológico nem serve para diagnosticar outra pessoa." },
];

function Index() {
  // Substituir pelo número real de WhatsApp, com indicativo do país e apenas dígitos.
  const whatsappUrl = "https://wa.me/244XXXXXXXXX?text=" + encodeURIComponent("Olá! Gostaria de receber informações sobre o e-book Como Lidar com Pessoas Narcisistas.");

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f1e9] text-[#171717] selection:bg-[#ff263b] selection:text-white">
      <header className="border-b border-black/15">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-14">
          <a href="#inicio" aria-label="Sweet Simple Solutions — início" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center bg-[#ff263b] text-sm font-black tracking-[-0.14em] text-white">S/S</span>
            <span className="leading-none"><span className="block text-[11px] font-black tracking-[0.15em]">SWEET SIMPLE</span><span className="mt-1.5 block text-[9px] font-semibold tracking-[0.33em] text-black/50">SOLUTIONS</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.12em] md:flex">
            <a className="transition hover:text-[#ff263b]" href="#guia">O guia</a>
            <a className="transition hover:text-[#ff263b]" href="#conteudo">Conteúdo</a>
            <a className="transition hover:text-[#ff263b]" href="#perguntas">Dúvidas</a>
          </nav>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#171717] px-4 py-3 text-[10px] font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-[#ff263b] sm:px-5">Falar connosco <ArrowRight size={14} /></a>
        </div>
      </header>

      <section id="inicio" className="relative">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 md:grid-cols-2 md:gap-12 lg:px-14 lg:pb-24 lg:pt-20">
          <div className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center text-center">
            <div className="mb-7 flex items-center justify-center gap-3"><span className="h-[2px] w-9 bg-[#ff263b]" /><p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#d7192e]">Um guia para relações difíceis</p></div>
            <h1 className="max-w-[790px] text-[clamp(3.3rem,7.3vw,7.8rem)] font-black leading-[0.84] tracking-[-0.09em]">
              RECUPERA A TUA <span className="text-[#ff263b]">CLAREZA.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-[510px] text-[16px] leading-7 text-black/65 sm:mt-10 sm:text-[18px] sm:leading-8">
              Quando uma relação te faz duvidar do que sentes, o primeiro passo pode ser compreender o que está a acontecer. Um guia para reconhecer padrões, pensar nos teus limites e voltar a dar atenção a ti.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="group inline-flex min-h-14 items-center gap-5 bg-[#ff263b] px-6 text-[11px] font-black uppercase tracking-[0.06em] text-white transition hover:bg-[#d7192e]">Conhecer o e-book <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></a>
              <span className="max-w-[190px] text-center text-[10px] leading-5 text-black/50">Pede informações primeiro. Decide depois.</span>
            </div>
            <div className="mt-12 flex w-full items-center justify-center gap-4 border-t border-black/15 pt-5 sm:mt-16"><span className="text-[10px] font-black tracking-[0.18em] text-[#ff263b]">S/S — 001</span><span className="h-px w-10 bg-black/20" /><p className="text-[9px] font-bold uppercase tracking-[0.15em] text-black/50">Compreender · Limites · Autocuidado</p></div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] py-8 sm:py-12">
            <div aria-hidden="true" className="absolute -right-12 top-0 h-[74%] w-[83%] bg-[#ff263b] sm:-right-16" />
            <div aria-hidden="true" className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-[9px] font-black uppercase tracking-[0.2em] [writing-mode:vertical-rl]">Uma publicação S/S</div>
            <div className="relative z-[1] mx-auto w-[78%] max-w-[390px] bg-[#171717] p-4 text-white shadow-[20px_25px_0_rgba(23,23,23,0.12)] sm:p-6">
              <div className="flex items-center justify-between border-b border-white/25 pb-4"><span className="text-[8px] font-black tracking-[0.2em]">SWEET SIMPLE SOLUTIONS</span><span className="text-[8px] text-white/45">GUIA Nº 01</span></div>
              <div className="relative mt-5 flex aspect-[0.72] flex-col justify-between overflow-hidden border border-white/15 bg-[#202020] p-5 sm:mt-7 sm:p-7">
                <div aria-hidden="true" className="absolute -right-16 top-12 h-52 w-52 rounded-full border-[30px] border-[#ff263b] sm:-right-20 sm:h-64 sm:w-64 sm:border-[38px]" />
                <div aria-hidden="true" className="absolute -bottom-16 -left-12 h-48 w-48 rotate-45 border-[24px] border-white/10 sm:h-60 sm:w-60" />
                <div className="relative z-[1]"><span className="inline-block bg-[#ff263b] px-2 py-1 text-[8px] font-black uppercase tracking-[0.18em]">Guia digital</span><h2 className="mt-6 text-[clamp(2rem,4.2vw,3.9rem)] font-black leading-[0.87] tracking-[-0.08em]">COMO LIDAR COM PESSOAS <span className="text-[#ff263b]">NARCISISTAS</span></h2><p className="mt-5 max-w-[210px] text-[10px] leading-5 text-white/65">Compreender os padrões. Reconhecer os teus limites. Cuidar de ti.</p></div>
                <div className="relative z-[1] flex items-end justify-between border-t border-white/25 pt-4"><span className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/55">Uma leitura para ti</span><span className="flex h-8 w-8 items-center justify-center bg-[#ff263b]"><BookOpen size={15} /></span></div>
              </div>
              <div className="flex items-center justify-between pt-4"><span className="text-[8px] tracking-[0.2em] text-white/45">S/S EDITIONS</span><span className="text-[8px] text-white/45">LEITURA DIGITAL</span></div>
            </div>
            <div className="absolute -bottom-1 right-0 z-10 bg-[#f5f1e9] px-4 py-3 sm:-right-2 sm:px-5"><p className="text-[9px] font-black uppercase tracking-[0.15em]">Mais clareza.</p><p className="mt-1 text-[9px] font-black uppercase tracking-[0.15em] text-[#ff263b]">Mais espaço para ti.</p></div>
          </div>
        </div>
      </section>

      <div className="bg-[#ff263b] text-white"><div className="mx-auto grid max-w-[1180px] divide-y divide-white/30 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-14"><div className="flex items-center justify-center gap-4 py-5 text-center md:py-6"><span className="text-[10px] font-black">01</span><p className="text-[10px] font-extrabold uppercase tracking-[0.16em]">Compreender sem rotular</p></div><div className="flex items-center justify-center gap-4 py-5 text-center md:py-6"><span className="text-[10px] font-black">02</span><p className="text-[10px] font-extrabold uppercase tracking-[0.16em]">Reconhecer os teus limites</p></div><div className="flex items-center gap-4 py-5 md:py-6 md:pl-8"><span className="text-[10px] font-black">03</span><p className="text-[10px] font-extrabold uppercase tracking-[0.16em]">Cuidar de ti também</p></div></div></div>

      <section id="guia" className="bg-[#171717] text-[#f5f1e9]"><div className="mx-auto flex max-w-[900px] flex-col items-center gap-8 px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-28"><div className="mx-auto"><p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#ff263b]">Uma pausa para olhar com atenção</p><h2 className="mx-auto mt-6 max-w-[720px] text-4xl font-black leading-[0.91] tracking-[-0.07em] sm:text-6xl">Não precisas de ter todas as respostas <span className="text-[#ff263b]">agora.</span></h2></div><div className="mx-auto max-w-[680px]"><p className="text-lg leading-8 text-white/75 sm:text-xl sm:leading-9">Quando uma relação se torna difícil, até as decisões simples podem parecer complicadas. Às vezes, o primeiro passo é parar, observar o que está a acontecer e encontrar palavras para aquilo que tens vivido.</p><p className="mt-6 text-[13px] leading-7 text-white/50">Este e-book não promete soluções mágicas. Reúne ideias para reflexão e ajuda-te a organizar as perguntas certas — ao teu ritmo e sem decidir por ti.</p><a href="#conteudo" className="mt-8 inline-flex items-center justify-center gap-3 border-b border-[#ff263b] pb-2 text-[11px] font-bold uppercase tracking-[0.08em] transition hover:text-[#ff263b]">Explorar o conteúdo <ArrowDownRight size={16} /></a></div></div></section>

      <section id="conteudo" className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28"><div className="flex flex-col items-center justify-between gap-6 border-b border-black/20 pb-8 text-center sm:pb-10"><div><p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#d7192e]">Dentro do e-book</p><h2 className="mx-auto mt-4 max-w-[650px] text-4xl font-black leading-[0.92] tracking-[-0.07em] sm:text-6xl">Três passos. Ao teu ritmo.</h2></div><p className="mx-auto max-w-[420px] text-[12px] leading-6 text-black/55">Lê com calma e guarda aquilo que fizer sentido para a tua realidade.</p></div><div className="mt-2">{chapters.map((chapter) => <article key={chapter.number} className="group grid gap-3 border-b border-black/15 py-8 text-center sm:grid-cols-[70px_1fr_1fr] sm:items-center sm:gap-8 sm:py-9 sm:text-left"><span className="text-[11px] font-black tracking-[0.12em] text-[#ff263b]">{chapter.number} <span className="text-black/30">/ 03</span></span><h3 className="max-w-[360px] text-2xl font-extrabold leading-tight tracking-[-0.045em] transition-colors group-hover:text-[#d7192e] sm:text-3xl">{chapter.title}</h3><p className="mx-auto max-w-[460px] text-[13px] leading-7 text-black/60">{chapter.text}</p></article>)}</div></section>

      <section id="contacto" className="relative overflow-hidden bg-[#ff263b] text-white"><div aria-hidden="true" className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[42px] border-white/10 sm:-right-8 sm:h-[440px] sm:w-[440px] sm:border-[60px]" /><div className="relative mx-auto flex max-w-[920px] flex-col items-center gap-8 px-5 py-14 text-center sm:px-8 sm:py-16 lg:py-20"><div className="max-w-[720px]"><p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/75">O próximo passo é teu</p><h2 className="mt-4 text-4xl font-black leading-[0.91] tracking-[-0.07em] sm:text-6xl">Começa por fazer as perguntas.</h2><p className="mx-auto mt-5 max-w-[570px] text-[14px] leading-7 text-white/85">Fala connosco para conhecer o preço, as formas de pagamento e os detalhes de entrega. Decides depois, com toda a informação.</p></div><a href={whatsappUrl} target="_blank" rel="noreferrer" className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-4 bg-[#171717] px-6 text-[11px] font-extrabold uppercase tracking-[0.06em] text-white transition hover:bg-white hover:text-[#171717] md:self-center"><MessageCircle size={17} /> Pedir informações <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a></div></section>

      <section id="perguntas" className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24"><div className="mx-auto grid max-w-[900px] gap-8 md:gap-10"><div className="text-center"><p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#d7192e]">Antes de decidir</p><h2 className="mt-4 text-4xl font-black leading-[0.92] tracking-[-0.06em] sm:text-5xl">Perguntas frequentes.</h2></div><div>{faqs.map((faq) => <details key={faq.question} className="group border-t border-black/20 py-5 last:border-b"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[13px] font-bold sm:text-[14px]">{faq.question}<span className="flex h-7 w-7 shrink-0 items-center justify-center border border-black/20 text-[#ff263b] transition group-open:border-[#ff263b]"><Plus size={15} /></span></summary><p className="max-w-[600px] pr-8 pt-4 text-[13px] leading-7 text-black/60">{faq.answer}</p></details>)}<p className="mt-7 text-[10px] leading-6 text-black/45">Este e-book tem fins educativos. Não se destina a diagnosticar outra pessoa nem substitui acompanhamento psicológico ou aconselhamento profissional.</p></div></div></section>

      <footer className="bg-[#171717] text-white"><div className="mx-auto flex max-w-[1180px] flex-col items-center gap-6 px-5 py-8 text-center sm:px-8 md:flex-row md:justify-between md:text-left lg:px-14"><a href="#inicio" className="flex items-center gap-3" aria-label="Sweet Simple Solutions — voltar ao início"><span className="flex h-9 w-9 items-center justify-center bg-[#ff263b] text-[13px] font-black tracking-[-0.12em]">S/S</span><span><span className="block text-[10px] font-extrabold tracking-[0.15em]">SWEET SIMPLE</span><span className="mt-1 block text-[8px] tracking-[0.33em] text-white/50">SOLUTIONS</span></span></a><p className="max-w-[360px] text-[10px] leading-5 text-white/45">Um guia para olhar para relações difíceis com mais clareza e respeito por ti.</p><div className="flex flex-col gap-2 text-[10px] text-white/55 sm:items-end"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[#ff263b]"><MessageCircle size={13} /> Contactar pelo WhatsApp</a><p>© {new Date().getFullYear()} Sweet Simple Solutions</p></div></div></footer>
    </main>
  );
}
