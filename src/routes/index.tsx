import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Check, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const topics = [
  {
    number: "01",
    title: "Perceber os padrões",
    text: "Aprende a observar atitudes e dinâmicas de comunicação que podem tornar uma relação difícil.",
  },
  {
    number: "02",
    title: "Definir os teus limites",
    text: "Pensa no que é importante para ti e em como comunicar os teus limites com mais clareza.",
  },
  {
    number: "03",
    title: "Cuidar de ti",
    text: "Dá atenção às tuas necessidades, às tuas escolhas e à forma como te sentes nas tuas relações.",
  },
];

const faqs = [
  {
    question: "Como posso comprar o e-book?",
    answer: "Envia-nos uma mensagem pelo WhatsApp. Explicamos o preço, os métodos de pagamento e como receberás o ficheiro.",
  },
  {
    question: "Em que formato vou receber o e-book?",
    answer: "O formato e os detalhes de entrega serão confirmados contigo antes da compra.",
  },
  {
    question: "O guia serve para diagnosticar alguém?",
    answer: "Não. O e-book é um recurso educativo para ajudar a refletir sobre comportamentos e limites. Não substitui a avaliação de um profissional.",
  },
];

function Index() {
  // Substituir pelo número real de WhatsApp, com indicativo do país e apenas dígitos.
  const whatsappUrl =
    "https://wa.me/244XXXXXXXXX?text=" +
    encodeURIComponent(
      "Olá. Gostaria de receber informações sobre o e-book Como Lidar com Pessoas Narcisistas, incluindo o preço e as formas de pagamento.",
    );

  return (
    <main className="min-h-screen bg-[#090909] text-[#f2efec]">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#inicio" className="leading-tight" aria-label="Sweet Simple Solutions — início">
            <span className="block text-sm font-semibold tracking-[0.16em]">SWEET SIMPLE</span>
            <span className="mt-1 block text-[10px] tracking-[0.32em] text-white/50">SOLUTIONS</span>
          </a>
          <a
            href="#ebook"
            className="border-b border-[#e51b2b] pb-1 text-sm text-white/80 transition hover:text-white"
          >
            Sobre o e-book
          </a>
        </div>
      </header>

      <section id="inicio" className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:gap-20 md:py-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#f12a38]">Um guia digital</p>
            <h1 className="mt-6 max-w-2xl font-serif text-5xl font-medium leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-[68px]">
              Como lidar com pessoas <span className="text-[#f12a38]">narcisistas</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
              Há relações que nos deixam a duvidar do que sentimos e pensamos. Este guia ajuda-te a olhar para esses padrões e a refletir sobre a forma como queres seguir em frente.
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#e51b2b] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#c91523]"
              >
                <MessageCircle size={18} /> Pedir informações <ArrowRight size={17} />
              </a>
              <span className="text-sm text-white/45">Preço e detalhes pelo WhatsApp</span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="relative border border-white/15 bg-[#111111] px-8 py-9 shadow-2xl shadow-black sm:px-10 sm:py-12">
              <div className="absolute left-0 top-0 h-1 w-20 bg-[#e51b2b]" />
              <p className="text-center text-[9px] tracking-[0.28em] text-white/45">SWEET SIMPLE SOLUTIONS</p>
              <div className="my-8 border-t border-white/10" />
              <p className="text-xs uppercase tracking-[0.2em] text-[#f12a38]">Um guia para relações difíceis</p>
              <h2 className="mt-5 font-serif text-4xl leading-[1.12]">
                Como lidar com <span className="text-[#f12a38]">pessoas narcisistas</span>
              </h2>
              <p className="mt-5 text-sm leading-6 text-white/55">
                Compreender os comportamentos. Reconhecer os teus limites. Cuidar de ti.
              </p>
              <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-5">
                <BookOpen size={22} className="text-[#f12a38]" strokeWidth={1.4} />
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">E-book digital</span>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-white/35">Sweet Simple Solutions · Guia digital</p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-3 md:gap-12 md:py-12">
          <div>
            <p className="font-serif text-2xl">Compreender</p>
            <p className="mt-2 text-sm leading-6 text-white/50">Dar nome aos padrões que observas, sem tirar conclusões precipitadas.</p>
          </div>
          <div className="border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p className="font-serif text-2xl">Estabelecer limites</p>
            <p className="mt-2 text-sm leading-6 text-white/50">Encontrar formas mais claras de comunicar aquilo que é importante para ti.</p>
          </div>
          <div className="border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p className="font-serif text-2xl">Cuidar de ti</p>
            <p className="mt-2 text-sm leading-6 text-white/50">Olhar para as tuas necessidades e considerar os próximos passos com calma.</p>
          </div>
        </div>
      </section>

      <section id="ebook" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#f12a38]">Sobre o e-book</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Um ponto de partida, não uma fórmula mágica.</h2>
            <p className="mt-6 leading-7 text-white/60">
              Cada relação tem a sua história. Este material reúne ideias para te ajudar a pensar sobre comportamentos difíceis, reconhecer os teus limites e decidir que tipo de apoio poderá ser útil.
            </p>
          </div>
          <div className="border-t border-white/15">
            {topics.map((topic) => (
              <article key={topic.number} className="grid gap-3 border-b border-white/15 py-6 sm:grid-cols-[60px_1fr] sm:gap-6 sm:py-7">
                <p className="font-serif text-2xl text-[#f12a38]">{topic.number}</p>
                <div>
                  <h3 className="font-serif text-2xl">{topic.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-white/55">{topic.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#3b171a] bg-[#12090a]">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between md:py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#f12a38]">Queres saber mais?</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">Esclarece as tuas dúvidas antes de comprar.</h2>
            <p className="mt-4 text-sm leading-7 text-white/60">Envia uma mensagem para conhecer o preço, os métodos de pagamento e a forma de entrega.</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#e51b2b] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#c91523]"
          >
            <MessageCircle size={18} /> Falar pelo WhatsApp <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section id="perguntas" className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#f12a38]">Informação útil</p>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Perguntas frequentes</h2>
        <div className="mt-8">
          {faqs.map((faq) => (
            <details key={faq.question} className="border-t border-white/15 py-5">
              <summary className="cursor-pointer text-base font-medium">{faq.question}</summary>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/55">{faq.answer}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-xs leading-6 text-white/35">
          Este e-book tem fins educativos e não substitui acompanhamento psicológico ou aconselhamento profissional. Não se destina a diagnosticar outra pessoa.
        </p>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-7 text-sm text-white/40 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-medium tracking-[0.12em] text-white/70">SWEET SIMPLE SOLUTIONS</p>
            <p className="mt-1 text-xs">Um guia para pensar nas relações com mais clareza.</p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[#f12a38]">
            <MessageCircle size={16} /> Contactar pelo WhatsApp
          </a>
          <p className="text-xs">© {new Date().getFullYear()} Sweet Simple Solutions</p>
        </div>
      </footer>
    </main>
  );
}
