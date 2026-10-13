import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, CheckCircle2, HeartHandshake, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const benefits = [
  "Reconhecer comportamentos manipuladores e padrões tóxicos",
  "Estabelecer limites sem culpa e proteger a tua tranquilidade",
  "Responder com mais clareza em conversas difíceis",
  "Recuperar confiança nas tuas decisões e sentimentos",
];

function Index() {
  // TODO: substituir pelo número real de WhatsApp, apenas dígitos com indicativo do país.
  const whatsappUrl =
    "https://wa.me/244XXXXXXXXX?text=" +
    encodeURIComponent("Olá! Tenho interesse no e-book Como Lidar com Pessoas Narcisistas. Pode enviar-me mais informações?");

  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf8f3] text-[#27231f]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Página inicial">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#31594b] text-white">
            <BookOpen size={21} />
          </span>
          <span className="text-sm font-bold tracking-tight sm:text-base">Sweet Simple Solutions</span>
        </a>
        <a href="#ebook" className="rounded-full border border-[#d9d0c4] px-4 py-2 text-sm font-semibold transition hover:bg-white">
          Conhecer o e-book
        </a>
      </header>

      <section id="inicio" className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 md:grid-cols-2 md:gap-16 md:pb-28 md:pt-20">
        <div className="relative z-10">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d9e2d8] bg-[#eef3ec] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#31594b]">
            <Sparkles size={14} /> Mais clareza, limites e tranquilidade
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Como Lidar com Pessoas <span className="text-[#477765]">Narcisistas</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6a6259]">
            Um guia prático para compreender relações difíceis, reconhecer padrões prejudiciais e aprender a cuidar melhor de ti — sem perder a tua voz.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#31594b] px-6 py-4 font-semibold text-white shadow-lg shadow-[#31594b]/15 transition hover:-translate-y-0.5 hover:bg-[#25483b]">
              <MessageCircle size={19} /> Pedir pelo WhatsApp <ArrowRight size={17} />
            </a>
            <a href="#o-que-ganhas" className="inline-flex items-center justify-center rounded-full border border-[#d9d0c4] px-6 py-4 font-semibold transition hover:bg-white">
              Ver o que vais aprender
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#6a6259]">
            <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-[#477765]" /> Informação clara e acessível</span>
            <span className="inline-flex items-center gap-2"><HeartHandshake size={16} className="text-[#477765]" /> Foco no teu bem-estar</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-[#e9e7d9] rotate-3" />
          <div className="relative overflow-hidden rounded-[2rem] bg-[#31594b] p-7 text-white shadow-2xl shadow-[#31594b]/20 sm:p-10">
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-white/15" />
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border border-white/15" />
            <div className="relative flex min-h-[390px] flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                <span>Guia digital</span><BookOpen size={20} />
              </div>
              <div className="py-10">
                <div className="mb-5 h-1 w-14 rounded-full bg-[#d9bd86]" />
                <p className="text-sm uppercase tracking-[0.18em] text-[#e5d4b4]">Um guia para ti</p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">Como Lidar com Pessoas Narcisistas</h2>
                <p className="mt-5 max-w-xs text-base leading-7 text-white/75">Compreender. Estabelecer limites. Cuidar de ti.</p>
              </div>
              <div className="flex items-end justify-between border-t border-white/20 pt-5">
                <span className="text-sm text-white/70">Sweet Simple Solutions</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e5d4b4] text-[#31594b]"><HeartHandshake size={23} /></span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white px-4 py-3 shadow-lg sm:-left-8">
            <p className="text-xs text-[#7a7167]">O primeiro passo</p>
            <p className="font-semibold text-[#31594b]">é compreender melhor.</p>
          </div>
        </div>
      </section>

      <section id="o-que-ganhas" className="border-y border-[#eee7dd] bg-white/70">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#477765]">O que vais aprender</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Mais ferramentas para lidar com relações difíceis</h2>
            <p className="mt-4 leading-7 text-[#6a6259]">Este e-book foi pensado para te ajudar a refletir sobre situações desafiantes e a escolher respostas mais conscientes.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex gap-3 rounded-2xl border border-[#eee7dd] bg-[#fbf8f3] p-5">
                <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-[#477765]" />
                <p className="leading-7 text-[#49423b]">{benefit}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-6 text-[#81786e]">O conteúdo é educativo e não substitui apoio psicológico ou profissional. O termo “narcisista” não deve ser usado para diagnosticar alguém por conta própria.</p>
        </div>
      </section>

      <section id="ebook" className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24">
        <div className="rounded-[2rem] bg-[#e9eee5] p-7 sm:p-10 md:flex md:items-center md:justify-between md:gap-10 md:p-14">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#477765]">Começa por aqui</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Queres saber mais sobre o e-book?</h2>
            <p className="mt-4 leading-7 text-[#625d53]">Envia uma mensagem para receber informações sobre o conteúdo, o preço e as opções de pagamento.</p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#31594b] px-6 py-4 font-semibold text-white transition hover:bg-[#25483b] md:mt-0">
            <MessageCircle size={19} /> Falar pelo WhatsApp <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <footer className="border-t border-[#e9e1d6] px-5 py-7 text-center text-sm text-[#81786e]">
        <p className="font-semibold text-[#49423b]">Sweet Simple Solutions</p>
        <p className="mt-2">Conteúdo digital para apoiar escolhas mais conscientes.</p>
        <p className="mt-4">© {new Date().getFullYear()} Sweet Simple Solutions. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
