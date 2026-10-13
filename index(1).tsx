import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

// TODO: Substitui pelo teu número de WhatsApp com indicativo do país,
// apenas dígitos, por exemplo: 244923000000.
const WHATSAPP_NUMBER = "244XXXXXXXXX";
const whatsappMessage = encodeURIComponent(
  "Olá! Tenho interesse no e-book Como Lidar com Pessoas Narcisistas. Gostaria de saber o preço e como posso comprar."
);
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf8f4] text-[#24211f]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#inicio" className="text-lg font-extrabold tracking-tight text-[#284b43]">
          leitura<span className="text-[#c17b58]">.</span>
        </a>
        <a href="#ebook" className="rounded-full border border-[#d9d0c7] px-4 py-2 text-sm font-semibold transition hover:bg-white">
          Conhecer o e-book
        </a>
      </header>

      <section id="inicio" className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-8 sm:px-8 md:grid-cols-2 md:gap-16 md:pb-24 md:pt-16">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#e8eee8] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#315b4f]">
            <span className="h-2 w-2 rounded-full bg-[#54836e]" />
            Um guia para relações mais saudáveis
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Como lidar com pessoas <span className="text-[#b66f4f]">narcisistas</span> sem te perderes a ti mesmo.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#68615b]">
            Aprende a reconhecer comportamentos difíceis, estabelecer limites e proteger a tua paz emocional — com mais clareza, confiança e respeito por ti.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#285448] px-6 py-4 font-bold text-white shadow-lg shadow-[#285448]/15 transition hover:-translate-y-0.5 hover:bg-[#1f4339]">
              Quero saber mais <span aria-hidden="true">↗</span>
            </a>
            <a href="#conteudo" className="inline-flex min-h-14 items-center justify-center rounded-xl border border-[#d9d0c7] px-6 py-4 font-bold transition hover:bg-white">
              Ver o que vais aprender
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#777069]">
            <span>✓ Leitura prática</span>
            <span>✓ Ao teu ritmo</span>
            <span>✓ Foco em limites saudáveis</span>
          </div>
        </div>

        <div id="ebook" className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rotate-3 rounded-[2.5rem] bg-[#e9dfd2]" />
          <div className="relative mx-auto aspect-[4/5] max-w-[370px] overflow-hidden rounded-[1.6rem] bg-[#284b43] p-7 text-[#fffaf1] shadow-2xl shadow-[#44372b]/20 sm:p-9">
            <div className="absolute -right-16 -top-10 h-64 w-64 rounded-full border border-white/15" />
            <div className="absolute -right-7 top-8 h-48 w-48 rounded-full border border-white/15" />
            <div className="absolute bottom-[-5rem] left-[-3rem] h-64 w-64 rounded-full bg-[#c17b58]/80" />
            <div className="relative flex h-full flex-col">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#e5cbb9]">Guia prático</div>
              <div className="mt-12 text-4xl font-black leading-[1.05] sm:text-5xl">
                COMO LIDAR<br />COM PESSOAS<br /><span className="text-[#e5b79a]">NARCISISTAS</span>
              </div>
              <p className="mt-5 max-w-[230px] text-sm leading-6 text-white/80">
                Compreender padrões, definir limites e recuperar a tua tranquilidade.
              </p>
              <div className="mt-auto flex items-end justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/65">Um passo de cada vez</div>
                  <div className="mt-1 text-lg font-bold">Escolhe a tua paz.</div>
                </div>
                <div className="grid h-14 w-14 place-items-center rounded-full border border-white/35 text-2xl">✦</div>
              </div>
            </div>
          </div>
          <p className="relative mt-5 text-center text-xs text-[#82776d]">Capa ilustrativa do e-book</p>
        </div>
      </section>

      <section className="border-y border-[#e8dfd6] bg-white/70">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-3 md:gap-10">
          <div><div className="text-2xl">🧭</div><h2 className="mt-3 font-bold">Mais clareza</h2><p className="mt-2 text-sm leading-6 text-[#6f6861]">Observa comportamentos e padrões sem tirar conclusões precipitadas sobre alguém.</p></div>
          <div><div className="text-2xl">🛡️</div><h2 className="mt-3 font-bold">Limites mais firmes</h2><p className="mt-2 text-sm leading-6 text-[#6f6861]">Pratica formas respeitosas de dizer não e proteger o teu espaço emocional.</p></div>
          <div><div className="text-2xl">🌱</div><h2 className="mt-3 font-bold">Mais atenção a ti</h2><p className="mt-2 text-sm leading-6 text-[#6f6861]">Reforça a autoestima e pensa nos próximos passos com calma e apoio.</p></div>
        </div>
      </section>

      <section id="conteudo" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b66f4f]">O que vais encontrar</span>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Ferramentas para lidar com relações difíceis com mais consciência.</h2>
          <p className="mt-4 leading-7 text-[#6f6861]">Um ponto de partida para compreender dinâmicas relacionais e decidir o que é saudável para ti.</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {[
            ["01", "Reconhecer padrões de comportamento", "Distingue atitudes recorrentes de conflitos ocasionais e evita rotular alguém sem contexto."],
            ["02", "Estabelecer limites claros", "Aprende a comunicar o que aceitas e o que não aceitas, com firmeza e respeito."],
            ["03", "Responder a situações de manipulação", "Prepara respostas mais ponderadas e reduz discussões que não levam a soluções."],
            ["04", "Cuidar do teu bem-estar emocional", "Identifica quando precisas de distância, apoio de confiança ou orientação profissional."],
          ].map(([number, title, description]) => (
            <article key={number} className="rounded-2xl border border-[#e8dfd6] bg-white p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#e8eee8] text-sm font-extrabold text-[#315b4f]">{number}</span>
                <div><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 leading-7 text-[#6f6861]">{description}</p></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#eee6dc] px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-3xl leading-snug text-[#284b43] sm:text-4xl">“Compreender o comportamento dos outros não significa ter de aceitar tudo.”</p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#8b6b56]">O teu bem-estar também importa</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24">
        <div className="overflow-hidden rounded-[2rem] bg-[#284b43] px-6 py-10 text-center text-white sm:px-12 sm:py-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5b79a]">Começa por ti</span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black sm:text-4xl">Dá o primeiro passo para relações com limites mais saudáveis.</h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/75">Pede informações sobre o e-book e recebe os detalhes de compra diretamente pelo WhatsApp.</p>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#e5b79a] px-7 py-4 font-extrabold text-[#263f37] transition hover:-translate-y-0.5 hover:bg-[#f0cbb3]">
            Pedir informações pelo WhatsApp <span aria-hidden="true">↗</span>
          </a>
          <p className="mt-4 text-xs text-white/60">Preço e condições de entrega a confirmar pelo WhatsApp.</p>
        </div>
      </section>

      <footer className="border-t border-[#e8dfd6] px-5 py-8 text-center text-xs leading-6 text-[#81786f]">
        <p>© {new Date().getFullYear()} · E-book Como Lidar com Pessoas Narcisistas</p>
        <p className="mx-auto mt-2 max-w-3xl">Este material tem finalidade educativa e não substitui avaliação ou acompanhamento psicológico. O termo “narcisista” não deve ser usado para diagnosticar alguém por conta própria. Se estiveres em perigo ou numa relação abusiva, procura apoio seguro e profissional.</p>
      </footer>
    </main>
  );
}
