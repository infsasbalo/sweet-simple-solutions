import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  CircleHelp,
  Heart,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const benefits = [
  {
    icon: Target,
    title: "Identificar com clareza",
    description: "Reconhece comportamentos difíceis e padrões relacionais que merecem atenção.",
  },
  {
    icon: Sparkles,
    title: "Compreender o que se passa",
    description: "Reflete sobre dinâmicas de comunicação e o impacto que podem ter em ti.",
  },
  {
    icon: ShieldCheck,
    title: "Estabelecer limites",
    description: "Explora formas mais claras de comunicar as tuas necessidades e limites.",
  },
  {
    icon: Heart,
    title: "Fortalecer a tua confiança",
    description: "Dá mais espaço às tuas emoções, escolhas e ao teu bem-estar.",
  },
  {
    icon: BookOpen,
    title: "Construir relações mais saudáveis",
    description: "Aprende a pensar nas tuas opções e a escolher os próximos passos com consciência.",
  },
];

const audience = [
  "Queres compreender melhor comportamentos que te deixam confuso/a.",
  "Tens dificuldade em estabelecer limites sem sentir culpa.",
  "Procuras formas mais conscientes de lidar com conversas difíceis.",
  "Queres dar mais atenção à tua tranquilidade e ao teu bem-estar.",
];

const faqs = [
  {
    question: "Como recebo o e-book?",
    answer: "Envia uma mensagem pelo WhatsApp para receber informações sobre o formato, o processo de compra e a entrega do guia.",
  },
  {
    question: "Qual é o preço?",
    answer: "O preço e as opções de pagamento serão confirmados pelo WhatsApp antes de decidires comprar.",
  },
  {
    question: "Como posso pagar?",
    answer: "Contacta-nos pelo WhatsApp para confirmar os métodos de pagamento disponíveis.",
  },
  {
    question: "O e-book substitui apoio psicológico?",
    answer: "Não. É um recurso educativo e não substitui avaliação, diagnóstico ou acompanhamento de um profissional de saúde mental.",
  },
];

function Index() {
  // Substituir pelo número real de WhatsApp, com indicativo do país e apenas dígitos.
  const whatsappUrl =
    "https://wa.me/244XXXXXXXXX?text=" +
    encodeURIComponent(
      "Olá! Tenho interesse no e-book Como Lidar com Pessoas Narcisistas. Pode enviar-me o preço, as opções de pagamento e como recebo o guia?",
    );

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-[#f6f2ef]">
      <header className="relative z-20 border-b border-white/10 bg-black/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Sweet Simple Solutions — início">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ff1e2d] text-[#ff1e2d]">
              <Sparkles size={21} />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold uppercase tracking-[0.18em]">Sweet Simple</span>
              <span className="block text-[10px] uppercase tracking-[0.32em] text-white/60">Solutions</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            <a href="#inicio" className="transition hover:text-[#ff2635]">Início</a>
            <a href="#beneficios" className="transition hover:text-[#ff2635]">Benefícios</a>
            <a href="#sobre" className="transition hover:text-[#ff2635]">Sobre o e-book</a>
            <a href="#perguntas" className="transition hover:text-[#ff2635]">Perguntas</a>
          </nav>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#f3162a] px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-red-950/40 transition hover:bg-[#d90d20] sm:px-5 sm:text-sm"
          >
            <MessageCircle size={17} /> <span className="hidden sm:inline">Falar no WhatsApp</span><span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      <section id="inicio" className="relative isolate border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_35%,rgba(235,10,32,0.22),transparent_38%),radial-gradient(ellipse_at_12%_80%,rgba(110,0,10,0.24),transparent_40%),linear-gradient(115deg,#050505_30%,#100304_68%,#050505)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:min-h-[650px] md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:py-20">
          <div className="relative z-10">
            <span className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-[#ff2635]">
              <span className="h-px w-8 bg-[#ff2635]" /> E-book digital
            </span>
            <h1 className="max-w-2xl font-serif text-5xl font-semibold leading-[0.99] tracking-tight sm:text-6xl lg:text-7xl">
              Como Lidar com
              <span className="mt-2 block text-[#ff2635]">Pessoas Narcisistas</span>
            </h1>
            <p className="mt-7 max-w-xl font-serif text-xl leading-8 text-white/90 sm:text-2xl">
              Protege a tua paz, recupera a tua confiança e aprende a estabelecer limites saudáveis.
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
              Um guia prático para refletir sobre relações difíceis, reconhecer padrões prejudiciais e escolher respostas mais conscientes — seja na família, no trabalho ou nas amizades.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f3162a] px-7 py-4 font-bold text-white shadow-xl shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-[#d90d20]"
              >
                <MessageCircle size={20} /> Quero saber como comprar <ArrowRight size={18} />
              </a>
              <a
                href="#beneficios"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 font-semibold text-white/85 transition hover:border-[#ff2635] hover:text-white"
              >
                Explorar o guia <ArrowDown size={16} />
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs uppercase tracking-wide text-white/55">
              <span className="inline-flex items-center gap-2"><ShieldCheck size={15} className="text-[#ff2635]" /> Conteúdo educativo</span>
              <span className="inline-flex items-center gap-2"><LockKeyhole size={15} className="text-[#ff2635]" /> Informação pelo WhatsApp</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] py-6">
            <div className="pointer-events-none absolute inset-x-4 bottom-0 h-24 rounded-full bg-red-700/20 blur-3xl" />
            <div className="absolute right-2 top-10 h-64 w-64 rounded-full bg-red-600/10 blur-3xl sm:right-0" />
            <div className="relative mx-auto w-[min(78%,330px)] rotate-[-3deg]">
              <div className="absolute -left-3 top-2 h-[calc(100%-8px)] w-5 rounded-l-sm border border-white/10 bg-[#292929] shadow-[-12px_12px_22px_rgba(0,0,0,0.55)]" />
              <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden border border-white/20 bg-[linear-gradient(145deg,#191919,#050505_58%,#200308)] px-7 py-8 shadow-2xl shadow-black/80 sm:min-h-[470px] sm:px-9 sm:py-10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_68%,rgba(255,0,32,0.34),transparent_38%),linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.04)_48%,transparent_60%)]" />
                <div className="relative">
                  <p className="text-center text-[9px] uppercase tracking-[0.34em] text-white/55">Sweet Simple Solutions</p>
                  <div className="mx-auto mt-8 h-px w-12 bg-[#ff2635]" />
                  <h2 className="mt-7 text-center font-serif text-3xl font-semibold uppercase leading-[1.1] sm:text-4xl">
                    Como lidar com
                    <span className="mt-2 block text-[#ff2635]">pessoas narcisistas</span>
                  </h2>
                  <p className="mt-5 text-center text-[10px] uppercase leading-5 tracking-[0.22em] text-white/65">
                    Guia prático para proteger a tua paz e o teu bem-estar
                  </p>
                </div>
                <div className="relative mx-auto my-5 flex h-32 w-32 items-center justify-center rounded-full border border-[#ff2635]/40 bg-[radial-gradient(circle,rgba(255,20,40,0.22),rgba(0,0,0,0.1)_68%)] sm:h-40 sm:w-40">
                  <div className="absolute h-24 w-24 rounded-full border border-white/10 sm:h-32 sm:w-32" />
                  <Heart size={48} strokeWidth={1} className="text-[#ff2635]" />
                </div>
                <div className="relative border-t border-white/15 pt-5 text-center text-[9px] uppercase tracking-[0.22em] text-white/50">
                  Informação · Consciência · Limites
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 h-full w-full -z-10 border border-[#ff2635]/30" />
            </div>
            <p className="relative mt-8 text-center font-serif text-lg italic text-white/65">
              “O teu bem-estar também importa.”
            </p>
          </div>
        </div>
      </section>

      <section id="beneficios" className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#ff2635]">O que vais encontrar neste e-book</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Um guia para mais clareza e autonomia emocional
            </h2>
          </div>
          <div className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className="border-t border-white/10 py-6 sm:px-5 lg:border-l lg:border-t-0 lg:first:border-l-0 lg:first:pl-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ff2635] text-[#ff2635]">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <p className="mt-5 text-[10px] font-semibold tracking-[0.2em] text-[#ff2635]">0{index + 1}</p>
                  <h3 className="mt-2 font-serif text-xl font-semibold leading-snug">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="sobre" className="border-b border-[#ff2635]/50 bg-[linear-gradient(110deg,#100304,#050505_45%,#0c0c0c)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-16 md:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#ff2635]">Para quem é este e-book?</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">Este guia pode ser para ti se…</h2>
            <ul className="mt-7 space-y-4">
              {audience.map((item) => (
                <li key={item} className="flex gap-3 text-white/75">
                  <Check size={19} className="mt-1 shrink-0 text-[#ff2635]" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <BookOpen size={38} strokeWidth={1.3} className="text-[#ff2635]" />
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.26em] text-[#ff2635]">Mais do que ler</p>
            <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              É um momento para começares por ti.
            </h3>
            <p className="mt-5 leading-7 text-white/60">
              Não podes controlar as escolhas de outra pessoa, mas podes refletir sobre os teus limites, procurar apoio e decidir o que é melhor para ti.
            </p>
            <p className="mt-6 border-l-2 border-[#ff2635] pl-4 font-serif text-xl italic text-white/85">
              A tua paz merece atenção.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-[#ff2635]/50 bg-[#100203]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_50%,rgba(255,0,30,0.18),transparent_45%),linear-gradient(90deg,transparent,rgba(0,0,0,0.6))]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between md:py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#ff2635]">O teu próximo passo</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Queres conhecer melhor o e-book?
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-white/60">
              Envia uma mensagem para receber o preço, os métodos de pagamento e os detalhes de entrega. Podes esclarecer as tuas dúvidas antes de decidir.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#f3162a] px-7 py-4 font-bold text-white shadow-xl shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-[#d90d20]"
          >
            <MessageCircle size={20} /> Pedir informações <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section id="perguntas" className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-20">
        <div className="text-center">
          <CircleHelp size={28} className="mx-auto text-[#ff2635]" />
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.26em] text-[#ff2635]">Perguntas frequentes</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Tira as tuas dúvidas</h2>
        </div>
        <div className="mt-9 grid gap-3 md:grid-cols-2">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border border-white/10 bg-[#0b0b0b] p-5 open:border-[#ff2635]/60">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {faq.question}
                <span className="text-xl text-[#ff2635] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-white/60">{faq.answer}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center text-xs leading-6 text-white/35">
          O conteúdo é educativo e não substitui apoio psicológico ou profissional. Não se destina a diagnosticar outra pessoa.
        </p>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ff2635] text-[#ff2635]">
              <Sparkles size={18} />
            </span>
            <span className="text-xs font-semibold uppercase leading-5 tracking-[0.2em]">Sweet Simple<br />Solutions</span>
          </a>
          <p className="font-serif text-sm italic text-white/45">Conhecimento, consciência e bem-estar.</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff2635] transition hover:text-white">
            <MessageCircle size={17} /> Falar no WhatsApp
          </a>
        </div>
        <p className="mt-6 text-center text-xs text-white/30">© {new Date().getFullYear()} Sweet Simple Solutions. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
