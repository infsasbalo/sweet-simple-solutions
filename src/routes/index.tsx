import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, BookOpen, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const chapters = [
  {
    number: "01",
    title: "Reconhecer o que se repete",
    text: "Observar atitudes, conversas e dinâmicas que te deixam confuso — sem transformar uma palavra num diagnóstico.",
  },
  {
    number: "02",
    title: "Voltar a confiar na tua perceção",
    text: "Dar espaço ao que sentes, separar factos de interpretações e olhar para a situação com mais clareza.",
  },
  {
    number: "03",
    title: "Definir limites que fazem sentido",
    text: "Perceber o que aceitas, o que precisas de comunicar e quando é altura de procurar apoio.",
  },
];

const faqs = [
  {
    question: "Como recebo informações sobre a compra?",
    answer:
      "Envia uma mensagem pelo WhatsApp. Confirmamos contigo o preço, os métodos de pagamento disponíveis e a forma de entrega antes de avançares.",
  },
  {
    question: "O e-book é entregue em formato digital?",
    answer:
      "Sim, trata-se de um guia digital. Os detalhes de entrega são confirmados na conversa antes da compra.",
  },
  {
    question: "O guia permite diagnosticar alguém?",
    answer:
      "Não. É um recurso educativo para refletir sobre comportamentos e limites, não uma ferramenta de diagnóstico nem um substituto de apoio psicológico.",
  },
];

function Index() {
  // Atualizar com o número real, incluindo indicativo do país e apenas dígitos.
  const whatsappUrl =
    "https://wa.me/244XXXXXXXXX?text=" +
    encodeURIComponent(
      "Olá! Gostaria de receber informações sobre o e-book Como Lidar com Pessoas Narcisistas.",
    );

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f0e8] text-[#171717] selection:bg-[#ff2338] selection:text-white">
      <header className="relative z-10 border-b border-black/15">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#inicio" aria-label="Sweet Simple Solutions — início" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center bg-[#ff2338] text-[15px] font-black tracking-[-0.12em] text-white transition-transform group-hover:rotate-[-6deg]">S/S</span>
            <span className="leading-none">
              <span className="block text-[11px] font-extrabold tracking-[0.16em]">SWEET SIMPLE</span>
              <span className="mt-1.5 block text-[9px] font-semibold tracking-[0.34em] text-black/55">SOLUTIONS</span>
            </span>
          </a>
          <nav className="hidden items-center gap-9 text-[12px] font-semibold tracking-[0.04em] sm:flex">
            <a href="#guia" className="transition-colors hover:text-[#ff2338]">O guia</a>
            <a href="#conteudo" className="transition-colors hover:text-[#ff2338]">O que vais encontrar</a>
            <a href="#perguntas" className="transition-colors hover:text-[#ff2338]">Perguntas</a>
          </nav>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#171717] px-4 py-3 text-[11px] font-bold tracking-wide text-white transition-colors hover:bg-[#ff2338] sm:px-5">
            Falar connosco <ArrowRight size={14} />
          </a>
        </div>
      </header>

      <section id="inicio" className="relative">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 md:grid-cols-[1.02fr_0.98fr] md:gap-8 lg:px-12 lg:pb-24 lg:pt-20">
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#ff2338]" />
              <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d9192c]">Uma leitura para relações difíceis</p>
            </div>
            <h1 className="max-w-[720px] text-[clamp(3.4rem,7.4vw,7.5rem)] font-black leading-[0.88] tracking-[-0.085em]">
              Nem tudo o que sentes é <span className="relative inline-block whitespace-nowrap text-[#ff2338]">exagero<span className="absolute -bottom-1 left-1 h-[5px] w-[88%] bg-[#ff2338] sm:-bottom-2 sm:h-[7px]" /></span>.
            </h1>
            <p className="mt-9 max-w-[500px] text-[16px] leading-7 text-black/65 sm:mt-11 sm:text-[18px] sm:leading-8">
              Há relações que nos fazem questionar a nossa própria versão dos acontecimentos. Este guia é um ponto de partida para reconhecer padrões, compreender os teus limites e pensar no que precisas daqui para a frente.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-center">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="group inline-flex min-h-14 items-center gap-4 bg-[#ff2338] px-6 text-[13px] font-extrabold text-white transition-all hover:bg-[#d9192c]">
                Quero conhecer o e-book <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>
              <span className="text-[11px] font-medium text-black/50">Sem compromisso. Esclarece primeiro as tuas dúvidas.</span>
            </div>
            <div className="mt-12 flex items-center gap-4 border-t border-black/15 pt-5 sm:mt-16">
              <span className="text-[10px] font-black tracking-[0.18em] text-[#ff2338]">S/S — 01</span>
              <span className="h-px w-10 bg-black/20" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-black/50">Clareza • Limites • Autocuidado</p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[600px] py-4 sm:py-8">
            <div aria-hidden="true" className="absolute -right-20 top-0 h-[72%] w-[88%] bg-[#ff2338] sm:-right-24" />
            <div aria-hidden="true" className="absolute -bottom-2 -left-1 z-10 h-24 w-24 border-b-[2px] border-l-[2px] border-[#171717] sm:-left-5 sm:h-32 sm:w-32" />
            <div className="relative z-[1] mx-auto w-[77%] max-w-[360px] rotate-[2deg] bg-[#171717] p-5 text-white shadow-[18px_24px_0_rgba(23,23,23,0.13)] sm:p-7">
              <div className="flex items-center justify-between border-b border-white/25 pb-4">
                <span className="text-[8px] font-extrabold tracking-[0.22em]">SWEET SIMPLE SOLUTIONS</span>
                <span className="text-[9px] text-white/55">01 / GUIA</span>
              </div>
              <div className="relative mt-7 flex aspect-[0.72] flex-col justify-between overflow-hidden border border-white/15 bg-[#222] p-5 sm:mt-9 sm:p-7">
                <div aria-hidden="true" className="absolute -right-14 top-8 h-48 w-48 rounded-full border-[28px] border-[#ff2338] sm:-right-16 sm:h-56 sm:w-56 sm:border-[34px]" />
                <div aria-hidden="true" className="absolute -bottom-16 -left-10 h-48 w-48 rotate-45 border-[22px] border-white/10 sm:h-60 sm:w-60" />
                <div className="relative z-[1]">
                  <span className="inline-block bg-[#ff2338] px-2 py-1 text-[8px] font-black uppercase tracking-[0.17em]">Guia digital</span>
                  <h2 className="mt-6 max-w-[250px] text-[clamp(2rem,4vw,3.65rem)] font-black leading-[0.91] tracking-[-0.075em]">
                    COMO LIDAR COM PESSOAS <span className="text-[#ff2338]">NARCISISTAS</span>
                  </h2>
                  <p className="mt-5 max-w-[210px] text-[10px] leading-5 text-white/65 sm:text-[11px]">
                    Reconhecer padrões. Proteger os teus limites. Voltar a ouvir-te.
                  </p>
                </div>
                <div className="relative z-[1] flex items-end justify-between border-t border-white/25 pt-4">
                  <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/60">Um guia para ti</span>
                  <span className="flex h-8 w-8 items-center justify-center bg-[#ff2338]"><BookOpen size={15} /></span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <span className="text-[8px] tracking-[0.2em] text-white/45">S/S EDITIONS</span>
                <span className="text-[8px] text-white/45">LEITURA DIGITAL</span>
              </div>
            </div>
            <div className="absolute -bottom-3 right-0 z-10 bg-[#f4f0e8] px-4 py-3 sm:-right-2 sm:px-5">
              <p className="text-[9px] font-black uppercase tracking-[0.18em]">Mais clareza.</p>
              <p className="mt-1 text-[9px] font-black uppercase tracking-[0.18em] text-[#ff2338]">Mais espaço para ti.</p>
            </div>
          </div>
        </div>
      </section>

      <div aria-label="Ideias-chave" className="bg-[#ff2338] text-white">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 divide-y divide-white/30 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12">
          <div className="flex items-center gap-4 py-5 md:py-6 md:pl-4"><span className="text-[10px] font-black">01</span><p className="text-[11px] font-extrabold uppercase tracking-[0.17em]">Compreender sem rotular</p></div>
          <div className="flex items-center gap-4 py-5 md:py-6 md:pl-8"><span className="text-[10px] font-black">02</span><p className="text-[11px] font-extrabold uppercase tracking-[0.17em]">Reconhecer os teus limites</p></div>
          <div className="flex items-center gap-4 py-5 md:py-6 md:pl-8"><span className="text-[10px] font-black">03</span><p className="text-[11px] font-extrabold uppercase tracking-[0.17em]">Cuidar de ti também</p></div>
        </div>
      </div>

      <section id="guia" className="bg-[#171717] text-[#f4f0e8]">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[0.85fr_1.15fr] md:gap-20 lg:px-12 lg:py-28">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#ff2338]">Porque este guia</p>
            <h2 className="mt-6 max-w-[500px] text-4xl font-black leading-[0.96] tracking-[-0.065em] sm:text-6xl">
              Não tens de resolver tudo <span className="text-[#ff2338]">hoje.</span>
            </h2>
          </div>
          <div className="max-w-[650px] md:pt-10">
            <p className="text-lg leading-8 text-white/75 sm:text-xl sm:leading-9">
              Quando uma relação se torna difícil, até as decisões simples podem parecer complicadas. Às vezes, o primeiro passo é parar, observar o que está a acontecer e encontrar palavras para aquilo que tens vivido.
            </p>
            <p className="mt-6 text-[14px] leading-7 text-white/50">
              O e-book foi pensado como material de reflexão — acessível, prático e sem promessas milagrosas. Não decide por ti; ajuda-te a organizar as perguntas certas.
            </p>
            <a href="#conteudo" className="mt-8 inline-flex items-center gap-3 border-b border-[#ff2338] pb-2 text-[12px] font-bold text-white transition-colors hover:text-[#ff2338]">
              Ver o que vais encontrar <ArrowDownRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section id="conteudo" className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="flex flex-col justify-between gap-6 border-b border-black/20 pb-8 sm:flex-row sm:items-end sm:pb-10">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d9192c]">Dentro do e-book</p>
            <h2 className="mt-4 max-w-[650px] text-4xl font-black leading-[0.96] tracking-[-0.065em] sm:text-6xl">Um caminho em três partes.</h2>
          </div>
          <p className="max-w-[300px] text-[12px] leading-6 text-black/55">Ideias para leres ao teu ritmo e aplicares apenas o que fizer sentido para a tua realidade.</p>
        </div>
        <div className="mt-2">
          {chapters.map((chapter) => (
            <article key={chapter.number} className="group grid gap-4 border-b border-black/15 py-7 transition-colors sm:grid-cols-[90px_1fr_1fr] sm:items-start sm:gap-8 sm:py-9">
              <span className="text-[12px] font-black tracking-[0.12em] text-[#ff2338]">{chapter.number} <span className="text-black/30">/ 03</span></span>
              <h3 className="max-w-[360px] text-2xl font-extrabold leading-tight tracking-[-0.045em] transition-colors group-hover:text-[#d9192c] sm:text-3xl">{chapter.title}</h3>
              <p className="max-w-[460px] text-[13px] leading-7 text-black/60">{chapter.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="relative overflow-hidden bg-[#ff2338] text-white">
        <div aria-hidden="true" className="absolute -right-16 -top-24 h-72 w-72 rounded-full border-[42px] border-white/10 sm:-right-8 sm:h-[440px] sm:w-[440px] sm:border-[60px]" />
        <div className="relative mx-auto flex max-w-[1320px] flex-col gap-8 px-5 py-14 sm:px-8 sm:py-16 md:flex-row md:items-center md:justify-between lg:px-12 lg:py-20">
          <div className="max-w-[720px]">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/75">O próximo passo é teu</p>
            <h2 className="mt-4 text-4xl font-black leading-[0.96] tracking-[-0.065em] sm:text-6xl">Começa por fazer as perguntas.</h2>
            <p className="mt-5 max-w-[570px] text-[14px] leading-7 text-white/85">Fala connosco para conhecer o preço, as formas de pagamento e os detalhes de entrega. Decides depois, com toda a informação.</p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-4 self-start bg-[#171717] px-6 text-[12px] font-extrabold text-white transition-colors hover:bg-white hover:text-[#171717] md:self-center">
            <MessageCircle size={17} /> Pedir informações <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <section id="perguntas" className="mx-auto max-w-[1000px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d9192c]">Antes de decidir</p>
            <h2 className="mt-4 text-4xl font-black leading-[0.96] tracking-[-0.06em] sm:text-5xl">Perguntas directas.</h2>
          </div>
          <div>
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-t border-black/20 py-5 last:border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[14px] font-bold sm:text-[15px]">
                  {faq.question}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-black/20 text-lg font-normal text-[#ff2338] transition-colors group-open:border-[#ff2338]">+</span>
                </summary>
                <p className="max-w-[600px] pr-8 pt-4 text-[13px] leading-7 text-black/60">{faq.answer}</p>
              </details>
            ))}
            <p className="mt-7 text-[11px] leading-6 text-black/45">Este e-book tem fins educativos. Não se destina a diagnosticar outra pessoa nem substitui acompanhamento psicológico ou aconselhamento profissional.</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#171717] text-white">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-8 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Sweet Simple Solutions — voltar ao início">
            <span className="flex h-9 w-9 items-center justify-center bg-[#ff2338] text-[13px] font-black tracking-[-0.12em]">S/S</span>
            <span><span className="block text-[10px] font-extrabold tracking-[0.16em]">SWEET SIMPLE</span><span className="mt-1 block text-[8px] tracking-[0.34em] text-white/50">SOLUTIONS</span></span>
          </a>
          <p className="max-w-[360px] text-[10px] leading-5 text-white/45">Um guia para olhar para relações difíceis com mais clareza e respeito por ti.</p>
          <div className="flex flex-col gap-2 text-[10px] text-white/55 sm:items-end">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-[#ff2338]"><MessageCircle size={13} /> Contactar pelo WhatsApp</a>
            <p>© {new Date().getFullYear()} Sweet Simple Solutions</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
