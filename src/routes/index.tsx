import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  Heart,
  HeartHandshake,
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
  "Reconhecer comportamentos manipuladores e padrões relacionais prejudiciais",
  "Aprender a definir limites de forma mais clara e consistente",
  "Preparar respostas para conversas difíceis sem entrar em discussões intermináveis",
  "Dar mais atenção às tuas necessidades, emoções e decisões",
];

const audience = [
  "Sentes que uma relação te deixa frequentemente confuso/a ou emocionalmente esgotado/a",
  "Tens dificuldade em dizer “não” sem sentir culpa",
  "Queres compreender melhor certos comportamentos e padrões de comunicação",
  "Procuras ferramentas práticas para refletir e agir com mais clareza",
];

const faqs = [
  {
    question: "Como recebo o e-book?",
    answer:
      "Envia uma mensagem pelo WhatsApp. Receberás informações sobre o formato, a entrega e os passos para adquirir o guia.",
  },
  {
    question: "Quanto custa e como posso pagar?",
    answer:
      "O preço e as opções de pagamento serão informados diretamente pelo WhatsApp antes de confirmares a compra.",
  },
  {
    question: "O e-book substitui acompanhamento psicológico?",
    answer:
      "Não. É um recurso educativo para reflexão e aprendizagem; não substitui avaliação, diagnóstico ou acompanhamento de um profissional de saúde mental.",
  },
  {
    question: "Este guia serve para diagnosticar alguém?",
    answer:
      "Não. O guia não permite diagnosticar outra pessoa. O foco é compreender comportamentos, refletir sobre a relação e identificar limites que façam sentido para ti.",
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
    <main className="min-h-screen overflow-hidden bg-[#fbf8f3] text-[#27231f]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Sweet Simple Solutions — início">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#31594b] text-white">
            <BookOpen size={21} />
          </span>
          <span className="text-sm font-bold tracking-tight sm:text-base">Sweet Simple Solutions</span>
        </a>
        <a
          href="#oferta"
          className="rounded-full bg-[#31594b] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#25483b]"
        >
          Ver o e-book
        </a>
      </header>

      <section
        id="inicio"
        className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 md:grid-cols-2 md:gap-16 md:pb-28 md:pt-16"
      >
        <div className="relative z-10">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d9e2d8] bg-[#eef3ec] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#31594b]">
            <Sparkles size={14} /> Um guia para relações difíceis
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Recupera a tua clareza ao lidar com pessoas{" "}
            <span className="text-[#477765]">narcisistas</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6a6259]">
            Um e-book prático para te ajudar a reconhecer padrões prejudiciais,
            estabelecer limites e cuidar melhor de ti — sem perder a tua voz.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#31594b] px-6 py-4 font-semibold text-white shadow-lg shadow-[#31594b]/15 transition hover:-translate-y-0.5 hover:bg-[#25483b]"
            >
              <MessageCircle size={19} /> Quero saber como comprar <ArrowRight size={17} />
            </a>
            <a
              href="#o-que-ganhas"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d9d0c4] px-6 py-4 font-semibold transition hover:bg-white"
            >
              Descobrir o conteúdo <ArrowDown size={16} />
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#6a6259]">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#477765]" /> Informação clara e acessível
            </span>
            <span className="inline-flex items-center gap-2">
              <HeartHandshake size={16} className="text-[#477765]" /> Foco no teu bem-estar
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rotate-3 rounded-[2.5rem] bg-[#e9e7d9]" />
          <div className="relative overflow-hidden rounded-[2rem] bg-[#31594b] p-7 text-white shadow-2xl shadow-[#31594b]/20 sm:p-10">
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-white/15" />
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border border-white/15" />
            <div className="relative flex min-h-[390px] flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                <span>E-book digital</span>
                <BookOpen size={20} />
              </div>
              <div className="py-10">
                <div className="mb-5 h-1 w-14 rounded-full bg-[#d9bd86]" />
                <p className="text-sm uppercase tracking-[0.18em] text-[#e5d4b4]">Um guia para ti</p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                  Como Lidar com Pessoas Narcisistas
                </h2>
                <p className="mt-5 max-w-xs text-base leading-7 text-white/75">
                  Compreender. Estabelecer limites. Cuidar de ti.
                </p>
              </div>
              <div className="flex items-end justify-between border-t border-white/20 pt-5">
                <span className="text-sm text-white/70">Sweet Simple Solutions</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e5d4b4] text-[#31594b]">
                  <Heart size={23} />
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white px-4 py-3 shadow-lg sm:-left-8">
            <p className="text-xs text-[#7a7167]">Um passo de cada vez</p>
            <p className="font-semibold text-[#31594b]">A tua tranquilidade importa.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eee7dd] bg-white/70">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3 md:gap-10 md:py-14">
          <div className="text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef3ec] text-[#31594b]">
              <Target size={22} />
            </span>
            <h3 className="mt-4 font-semibold">Mais clareza</h3>
            <p className="mt-2 text-sm leading-6 text-[#6a6259]">Observa comportamentos e padrões com mais consciência.</p>
          </div>
          <div className="text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef3ec] text-[#31594b]">
              <ShieldCheck size={22} />
            </span>
            <h3 className="mt-4 font-semibold">Limites mais firmes</h3>
            <p className="mt-2 text-sm leading-6 text-[#6a6259]">Reflete sobre formas de comunicar o que aceitas e o que não aceitas.</p>
          </div>
          <div className="text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef3ec] text-[#31594b]">
              <HeartHandshake size={22} />
            </span>
            <h3 className="mt-4 font-semibold">Mais atenção a ti</h3>
            <p className="mt-2 text-sm leading-6 text-[#6a6259]">Dá espaço às tuas necessidades e ao teu bem-estar.</p>
          </div>
        </div>
      </section>

      <section id="o-que-ganhas" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#477765]">O que vais aprender</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ferramentas para enfrentar conversas e relações desafiantes
            </h2>
            <p className="mt-5 leading-7 text-[#6a6259]">
              O objetivo não é mudar outra pessoa. É ajudar-te a observar melhor
              a situação, considerar as tuas opções e decidir os próximos passos
              com mais consciência.
            </p>
            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3">
                  <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-[#477765]" />
                  <p className="leading-7 text-[#49423b]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#e9e1d6] bg-white p-7 shadow-sm sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#477765]">Este guia pode ser para ti se…</p>
            <h3 className="mt-3 text-2xl font-semibold">Queres compreender melhor o que estás a viver</h3>
            <div className="mt-6 space-y-4">
              {audience.map((item) => (
                <div key={item} className="flex gap-3">
                  <Check size={19} className="mt-1 shrink-0 text-[#477765]" />
                  <p className="leading-7 text-[#625d53]">{item}</p>
                </div>
              ))}
            </div>
            <a href="#oferta" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#31594b] hover:text-[#25483b]">
              Conhecer a oferta <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section id="oferta" className="bg-[#31594b] px-5 py-16 text-white sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5d4b4]">O teu próximo passo</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Começa por investir em mais clareza para ti
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-white/75">
              Fala connosco para conhecer o preço, as opções de pagamento e
              como receber o e-book. Podes esclarecer as tuas dúvidas antes de
              decidir comprar.
            </p>
            <div className="mt-7 flex flex-wrap gap-4 text-sm text-white/80">
              <span className="inline-flex items-center gap-2"><BookOpen size={17} /> Formato digital</span>
              <span className="inline-flex items-center gap-2"><MessageCircle size={17} /> Atendimento pelo WhatsApp</span>
              <span className="inline-flex items-center gap-2"><LockKeyhole size={17} /> Sem obrigação de compra</span>
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#fbf8f3] p-7 text-[#27231f] shadow-xl sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9eee5] text-[#31594b]">
              <BookOpen size={23} />
            </div>
            <h3 className="mt-5 text-2xl font-semibold">Como Lidar com Pessoas Narcisistas</h3>
            <p className="mt-3 text-sm leading-6 text-[#6a6259]">
              Recebe os detalhes do conteúdo, preço e entrega antes de confirmar a compra.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#31594b] px-5 py-4 text-center font-semibold text-white transition hover:bg-[#25483b]"
            >
              <MessageCircle size={19} /> Pedir informações no WhatsApp <ArrowRight size={17} />
            </a>
            <p className="mt-4 text-center text-xs leading-5 text-[#81786e]">
              O preço e os métodos de pagamento serão confirmados por mensagem.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-20">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#477765]">Perguntas frequentes</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Antes de comprares</h2>
        </div>
        <div className="mt-9 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-[#e9e1d6] bg-white p-5 open:bg-[#f5f5ef]">
              <summary className="cursor-pointer list-none pr-5 font-semibold marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-xl text-[#477765] transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 leading-7 text-[#6a6259]">{faq.answer}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center text-xs leading-6 text-[#81786e]">
          O conteúdo é educativo e não substitui apoio psicológico ou profissional. A palavra “narcisista” não deve ser usada para diagnosticar alguém por conta própria.
        </p>
      </section>

      <footer className="border-t border-[#e9e1d6] px-5 py-8 text-center text-sm text-[#81786e]">
        <p className="font-semibold text-[#49423b]">Sweet Simple Solutions</p>
        <p className="mt-2">Conteúdo digital para apoiar escolhas mais conscientes.</p>
        <p className="mt-4">© {new Date().getFullYear()} Sweet Simple Solutions. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
