import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, BookOpen, Check, MessageCircle, Plus, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const chapters = [
  { number: "01", title: "Reconhecer padrões", text: "Observar comportamentos recorrentes com mais clareza, sem tirar conclusões precipitadas nem depender apenas de rótulos." },
  { number: "02", title: "Compreender dinâmicas difíceis", text: "Refletir sobre culpabilização, desvalorização e controlo quando estes padrões surgem nas relações." },
  { number: "03", title: "Definir os teus limites", text: "Identificar o que precisas, o que aceitas e formas mais conscientes de comunicar os teus limites." },
  { number: "04", title: "Escolher como responder", text: "Fazer uma pausa antes de reagir e considerar quando conversar, afastar-te de uma discussão ou procurar apoio." },
  { number: "05", title: "Voltar a ouvir-te", text: "Dar espaço à tua experiência, reconhecer as tuas necessidades e tomar decisões com maior autonomia." },
];

const faqs = [
  { question: "Como posso comprar o e-book?", answer: "Envia uma mensagem pelo WhatsApp. Confirmamos o preço e os métodos de pagamento disponíveis antes de avançares." },
  { question: "Como recebo o guia?", answer: "O produto é um e-book digital. A forma e o prazo de entrega são confirmados contigo durante a conversa." },
  { question: "Preciso de conhecimentos de psicologia?", answer: "O guia destina-se a apoiar a reflexão sobre relações e comportamentos. Fala connosco para conhecer melhor o conteúdo antes de comprar." },
  { question: "O guia permite diagnosticar alguém?", answer: "Não. É um recurso educativo para refletir sobre comportamentos e limites; não serve para diagnosticar outra pessoa." },
  { question: "O e-book substitui acompanhamento psicológico?", answer: "Não. O conteúdo é educativo e não substitui acompanhamento psicológico, aconselhamento jurídico ou apoio especializado quando necessário." },
];

function Index() {
  const whatsappUrl = "https://wa.me/244XXXXXXXXX?text=" + encodeURIComponent("Olá! Gostaria de receber informações sobre o e-book Como Lidar com Pessoas Narcisistas.");

  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] text-[#f6f1e9] selection:bg-[#ff263b] selection:text-white">
      <header className="glass-header relative z-20 border-b border-white/10">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#inicio" aria-label="Sweet Simple Solutions — início" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border border-[#ff263b]/70 text-sm font-black tracking-[-0.14em] text-[#ff263b]">S/S</span>
            <span className="leading-none"><span className="block text-[11px] font-black tracking-[0.18em]">SWEET SIMPLE</span><span className="mt-1.5 block text-[9px] font-medium tracking-[0.34em] text-white/45">SOLUTIONS</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65 md:flex">
            <a className="transition hover:text-[#ff263b]" href="#guia">O guia</a>
            <a className="transition hover:text-[#ff263b]" href="#conteudo">O que vais aprender</a>
            <a className="transition hover:text-[#ff263b]" href="#perguntas">Perguntas</a>
          </nav>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-white/25 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.12em] transition hover:border-[#ff263b] hover:bg-[#ff263b] sm:px-5">Falar connosco <ArrowRight size={13} /></a>
        </div>
      </header>

      <section id="inicio" className="relative isolate">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at 50% 28%, rgba(255,35,59,0.16), transparent 38%), radial-gradient(ellipse at 80% 65%, rgba(255,35,59,0.07), transparent 32%)" }} />
        <div className="mx-auto max-w-[1120px] px-5 pb-20 pt-16 text-center sm:px-8 sm:pb-24 sm:pt-24 lg:pt-28">
          <div className="glass-panel mx-auto mb-7 flex w-fit items-center justify-center gap-3 border border-white/15 px-4 py-2"><Sparkles size={12} className="text-[#ff263b]" /><span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/65">Um guia para relações difíceis</span></div>
          <h1 className="mx-auto max-w-[1000px] text-[clamp(3.2rem,8.4vw,7.7rem)] font-semibold leading-[0.86] tracking-[-0.075em]"><span className="hero-title-rounded">Liberta-te do narcisismo.</span><br /><span className="hero-title-fraunces font-light italic text-[#ff263b]">e recupera o teu poder.</span></h1>
          <p className="mx-auto mt-7 max-w-[650px] text-[14px] leading-7 text-white/60 sm:mt-9 sm:text-[16px] sm:leading-8">Aprende a reconhecer comportamentos narcisistas, proteger os teus limites emocionais e lidar com relações difíceis sem perderes a confiança em ti mesmo.</p>
          <p className="mx-auto mt-3 max-w-[570px] text-[12px] leading-6 text-white/40">Um guia prático para compreender dinâmicas emocionais, responder com mais consciência e dar atenção às tuas próprias necessidades.</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="group mx-auto mt-8 inline-flex min-h-14 items-center gap-4 bg-[#ff263b] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#090909] sm:px-7">Quero conhecer o e-book <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></a>
          <p className="mt-3 text-[10px] text-white/35">Pede informações sobre preço, pagamento e entrega antes de decidir.</p>

          <div className="relative mx-auto mt-16 max-w-[800px] sm:mt-20">
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[75%] w-[72%] -translate-x-1/2 -translate-y-1/2 blur-[70px]" style={{ background: "rgba(255,35,59,0.22)" }} />
            <div className="glass-panel relative mx-auto w-[min(82%,360px)] border border-white/20 bg-[#111]/80 p-3 text-left shadow-[0_30px_100px_rgba(0,0,0,0.7)] sm:w-[330px] sm:p-4">
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

      <section id="guia" className="border-y border-white/10 bg-[#101010] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1000px]">
          <div className="mx-auto max-w-[700px] text-center"><p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#ff263b]">Talvez te reconheças nisto</p><h2 className="mt-4 text-3xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl">Já sentiste que uma relação te faz <span className="font-light italic text-[#ff263b]">duvidar de ti?</span></h2><p className="mt-6 text-[13px] leading-7 text-white/55 sm:text-[14px]">Talvez tenhas tentado explicar o que sentes e acabaste por te sentir culpado. Talvez uma conversa simples tenha terminado com a sensação de que fizeste tudo errado. Ou talvez estejas sempre a rever as tuas palavras e decisões para tentar evitar um novo conflito.</p><p className="mt-4 text-[13px] leading-7 text-white/55 sm:text-[14px]">Quando uma relação se torna emocionalmente confusa, pode ser difícil confiar na própria perceção. Não precisas de compreender tudo sobre a outra pessoa para começares a cuidar melhor de ti.</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <article className="glass-panel p-6 sm:p-7"><span className="text-[10px] font-bold tracking-[0.18em] text-[#ff263b]">01 / DÚVIDA</span><h3 className="mt-5 text-xl font-semibold tracking-[-0.04em]">A dúvida constante</h3><p className="mt-3 text-[12px] leading-6 text-white/50">Questionas as tuas decisões, as tuas memórias e até a legitimidade dos teus sentimentos.</p></article>
            <article className="glass-panel p-6 sm:p-7"><span className="text-[10px] font-bold tracking-[0.18em] text-[#ff263b]">02 / CANSAÇO</span><h3 className="mt-5 text-xl font-semibold tracking-[-0.04em]">O desgaste emocional</h3><p className="mt-3 text-[12px] leading-6 text-white/50">Gastas energia a prever reações e a procurar a forma perfeita de comunicar.</p></article>
            <article className="glass-panel p-6 sm:p-7"><span className="text-[10px] font-bold tracking-[0.18em] text-[#ff263b]">03 / LIMITES</span><h3 className="mt-5 text-xl font-semibold tracking-[-0.04em]">Os limites enfraquecidos</h3><p className="mt-3 text-[12px] leading-6 text-white/50">Aceitas situações desconfortáveis por receio da reação da outra pessoa ou na esperança de que tudo mude.</p></article>
          </div>
          <p className="mx-auto mt-8 max-w-[650px] text-center text-[12px] leading-6 text-white/40">Reconhecer estes padrões não resolve tudo de imediato, mas pode ajudar-te a compreender melhor a situação e a escolher respostas mais conscientes.</p>
        </div>
      </section>

      <section className="px-5 py-20 text-center sm:px-8 sm:py-28">
        <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#ff263b]">Uma abordagem mais consciente</p>
        <h2 className="mx-auto mt-5 max-w-[760px] text-4xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl">Não tens de controlar a outra pessoa. <span className="font-light italic text-[#ff263b]">Começa por ti.</span></h2>
        <p className="mx-auto mt-6 max-w-[620px] text-[14px] leading-7 text-white/55">O e-book <em>Como Lidar com Pessoas Narcisistas</em> propõe um ponto de partida para compreender comportamentos difíceis, refletir sobre padrões relacionais e explorar estratégias mais claras para proteger os teus limites.</p>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="group mx-auto mt-8 inline-flex min-h-14 items-center gap-4 border border-white/20 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.12em] transition hover:border-[#ff263b] hover:bg-[#ff263b]">Conhecer o guia <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></a>
      </section>

      <section id="conteudo" className="border-y border-white/10 bg-[#f4efe7] text-[#151313]">
        <div className="mx-auto max-w-[1040px] px-5 py-16 sm:px-8 sm:py-24">
          <div className="text-center"><p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#c91f32]">O que vais explorar</p><h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl">Mais compreensão.<br /><span className="font-light italic">Respostas mais conscientes.</span></h2><p className="mx-auto mt-5 max-w-[520px] text-[12px] leading-6 text-black/55">Uma estrutura de aprendizagem para te ajudar a observar padrões, refletir sobre os teus limites e considerar as tuas opções.</p></div>
          <div className="mx-auto mt-12 max-w-[820px] border-t border-black/15">{chapters.map((chapter) => <article key={chapter.number} className="glass-row grid gap-3 border-b border-black/15 py-7 sm:grid-cols-[60px_1fr_1fr] sm:items-center sm:gap-7 sm:py-8"><span className="text-[10px] font-bold tracking-[0.15em] text-[#c91f32]">{chapter.number}</span><h3 className="text-xl font-semibold tracking-[-0.04em] sm:text-2xl">{chapter.title}</h3><p className="text-[12px] leading-6 text-black/55">{chapter.text}</p></article>)}</div>
          <p className="mx-auto mt-5 max-w-[820px] text-[10px] leading-5 text-black/40">Os tópicos apresentados descrevem áreas de aprendizagem da página; confirma o índice e os conteúdos exatos do e-book antes da publicação.</p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#101010] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1000px]">
          <div className="text-center"><p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#ff263b]">A mudança começa no entendimento</p><h2 className="mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-5xl">Menos confusão.<br /><span className="font-light italic text-[#ff263b]">Mais consciência nas tuas decisões.</span></h2></div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="glass-panel p-6 sm:p-8"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">Quando os padrões são difíceis de reconhecer</p><ul className="mt-6 space-y-4">{["Questionas constantemente as tuas reações.", "Sentes pressão para justificar cada decisão.", "Tens dificuldade em comunicar os teus limites.", "Tent​​as prever ou controlar as reações da outra pessoa."].map((item) => <li key={item} className="flex gap-3 text-[12px] leading-6 text-white/60"><span className="mt-1 text-[#ff263b]">—</span><span>{item}</span></li>)}</ul></div>
            <div className="glass-panel p-6 sm:p-8"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff263b]">Ferramentas que podes desenvolver</p><ul className="mt-6 space-y-4">{["Observar comportamentos com mais clareza.", "Refletir antes de responder.", "Comunicar limites de forma mais consciente.", "Concentrar-te nas decisões que estão ao teu alcance."].map((item) => <li key={item} className="flex gap-3 text-[12px] leading-6 text-white/70"><Check size={15} className="mt-1 shrink-0 text-[#ff263b]" /><span>{item}</span></li>)}</ul></div>
          </div>
          <p className="mt-5 text-center text-[10px] leading-5 text-white/30">Estas são possibilidades de aprendizagem, não resultados garantidos.</p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-[1000px] gap-10 md:grid-cols-2 md:items-center">
          <div><p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#ff263b]">Para quem é</p><h2 className="mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-5xl">Este guia pode ser útil para ti se...</h2><p className="mt-5 text-[13px] leading-7 text-white/50">Queres compreender melhor uma relação emocionalmente desgastante e encontrar formas mais conscientes de cuidar de ti.</p></div>
          <div className="glass-panel p-6 sm:p-8"><ul className="space-y-4">{["Queres reconhecer padrões de comunicação prejudiciais.", "Tens dificuldade em estabelecer limites sem sentir culpa.", "Procuras estratégias para lidar com pessoas difíceis.", "Queres tomar decisões com mais autonomia e consciência."].map((item) => <li key={item} className="flex gap-3 text-[12px] leading-6 text-white/65"><Check size={15} className="mt-1 shrink-0 text-[#ff263b]" /><span>{item}</span></li>)}</ul><div className="mt-7 border-t border-white/10 pt-5"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">Uma nota importante</p><p className="mt-2 text-[11px] leading-6 text-white/40">O e-book não diagnostica pessoas nem substitui apoio psicológico, aconselhamento jurídico ou serviços especializados de segurança.</p></div></div>
        </div>
      </section>

      <section id="oferta" className="border-y border-white/10 bg-[#101010] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-[980px] gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div className="relative mx-auto w-full max-w-[280px]"><div aria-hidden="true" className="absolute inset-4 rounded-full bg-[#ff263b]/20 blur-[55px]" /><div className="glass-panel relative border border-white/15 p-3"><div className="flex aspect-[0.72] flex-col justify-between overflow-hidden border border-white/10 bg-gradient-to-br from-[#222] via-[#090909] to-[#350810] p-6"><span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#ff263b]">Sweet Simple Solutions</span><div><h3 className="text-3xl font-semibold leading-[0.92] tracking-[-0.06em]">COMO LIDAR COM PESSOAS <span className="font-light italic text-[#ff263b]">NARCISISTAS</span></h3><p className="mt-4 text-[10px] leading-5 text-white/50">Compreender padrões. Reconhecer limites. Cuidar de ti.</p></div><div className="flex items-center justify-between border-t border-white/20 pt-4"><span className="text-[8px] uppercase tracking-[0.16em] text-white/40">E-book digital</span><BookOpen size={17} className="text-[#ff263b]" /></div></div></div></div>
          <div><p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#ff263b]">O teu próximo passo</p><h2 className="mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-5xl">Começa pelo conhecimento.</h2><p className="mt-5 text-[13px] leading-7 text-white/55"><em>Como Lidar com Pessoas Narcisistas</em> é um guia digital para refletir sobre relações difíceis, reconhecer comportamentos prejudiciais e explorar formas mais conscientes de estabelecer limites.</p><div className="mt-6 space-y-3 border-y border-white/10 py-5 text-[12px] text-white/60"><p className="flex items-center gap-3"><Check size={14} className="text-[#ff263b]" /> Formato digital</p><p className="flex items-center gap-3"><Check size={14} className="text-[#ff263b]" /> Idioma: português</p><p className="flex items-center gap-3"><MessageCircle size={14} className="text-[#ff263b]" /> Preço, pagamento e entrega confirmados por mensagem</p></div><a href={whatsappUrl} target="_blank" rel="noreferrer" className="group mt-7 inline-flex min-h-14 items-center gap-4 bg-[#ff263b] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.12em] transition hover:bg-white hover:text-[#090909]">Quero informações sobre o e-book <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></a><p className="mt-3 text-[10px] leading-5 text-white/30">Podes esclarecer as condições da oferta antes de concluir a compra.</p></div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[850px] text-center"><p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#ff263b]">Transparência primeiro</p><h2 className="mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-5xl">Uma decisão informada começa com confiança.</h2><p className="mx-auto mt-5 max-w-[620px] text-[13px] leading-7 text-white/50">Antes de comprar, fala connosco para conhecer o conteúdo, esclarecer dúvidas e confirmar as condições de pagamento e entrega. Preferimos que decidas com informação clara.</p><div className="mx-auto mt-8 grid max-w-[720px] gap-3 text-left sm:grid-cols-3"><div className="glass-panel p-5"><BookOpen size={17} className="text-[#ff263b]" /><h3 className="mt-3 text-sm font-semibold">Conhece o conteúdo</h3><p className="mt-2 text-[11px] leading-5 text-white/40">Pede detalhes sobre os temas e a estrutura do guia.</p></div><div className="glass-panel p-5"><MessageCircle size={17} className="text-[#ff263b]" /><h3 className="mt-3 text-sm font-semibold">Tira as tuas dúvidas</h3><p className="mt-2 text-[11px] leading-5 text-white/40">Confirma as condições diretamente connosco.</p></div><div className="glass-panel p-5"><Check size={17} className="text-[#ff263b]" /><h3 className="mt-3 text-sm font-semibold">Decide com clareza</h3><p className="mt-2 text-[11px] leading-5 text-white/40">Avança apenas quando tiveres a informação necessária.</p></div></div></div>
      </section>

      <section id="contacto" className="relative isolate overflow-hidden border-y border-white/10 text-center">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(255,35,59,0.2), transparent 55%)" }} />
        <div className="mx-auto max-w-[820px] px-5 py-20 sm:px-8 sm:py-28"><p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#ff263b]">O próximo passo é teu</p><h2 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl">Não precisas de continuar na confusão <span className="font-light italic text-[#ff263b]">sem ferramentas.</span></h2><p className="mx-auto mt-6 max-w-[580px] text-[13px] leading-7 text-white/55">Começa por compreender melhor os padrões que observas, fortalecer os teus limites e explorar formas mais conscientes de cuidar do teu bem-estar. O primeiro passo não é controlar outra pessoa; é compreender melhor as tuas opções.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="group mx-auto mt-8 inline-flex min-h-14 items-center gap-4 bg-[#ff263b] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.12em] transition hover:bg-white hover:text-[#090909]"><MessageCircle size={15} /> Quero conhecer o e-book <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></a><p className="mt-3 text-[10px] text-white/30">Consulta os detalhes da oferta antes de concluir a compra.</p></div>
      </section>

      <section id="perguntas" className="bg-[#101010] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-[900px] gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-12"><div className="text-center md:text-left"><p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#ff263b]">Antes de decidir</p><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">Perguntas frequentes.</h2></div><div>{faqs.map((faq) => <details key={faq.question} className="glass-faq group border-t border-white/15 py-5 last:border-b"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[12px] font-medium text-white/85 sm:text-[13px]">{faq.question}<Plus size={15} className="shrink-0 text-[#ff263b] transition group-open:rotate-45" /></summary><p className="max-w-[600px] pr-8 pt-4 text-[12px] leading-6 text-white/50">{faq.answer}</p></details>)}<p className="mt-6 text-[10px] leading-6 text-white/30">Este e-book tem fins educativos. Não se destina a diagnosticar outra pessoa nem substitui acompanhamento psicológico ou aconselhamento profissional individualizado.</p></div></div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-6 px-5 py-8 text-center sm:px-8 md:flex-row md:justify-between md:text-left lg:px-12"><a href="#inicio" className="flex items-center gap-3" aria-label="Sweet Simple Solutions — voltar ao início"><span className="flex h-9 w-9 items-center justify-center border border-[#ff263b]/70 text-[12px] font-black tracking-[-0.12em] text-[#ff263b]">S/S</span><span><span className="block text-[10px] font-bold tracking-[0.18em]">SWEET SIMPLE</span><span className="mt-1 block text-[8px] tracking-[0.34em] text-white/40">SOLUTIONS</span></span></a><p className="max-w-[340px] text-[10px] leading-5 text-white/35">Um guia para olhar para relações difíceis com mais clareza e respeito por ti.</p><div className="flex flex-col items-center gap-2 text-[10px] text-white/40 md:items-end"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[#ff263b]"><MessageCircle size={12} /> Contactar pelo WhatsApp</a><p>© {new Date().getFullYear()} Sweet Simple Solutions</p></div></div>
      </footer>
    </main>
  );
}
