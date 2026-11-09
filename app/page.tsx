import Image from "next/image";
import ScrollEffects from "./ScrollEffects";
import ContactForm from "./ContactForm";
import {
  ArrowDown, ArrowRight, Check, ChevronDown, Instagram, Mail,
  MapPin, Menu, MessageCircle, Monitor, ShieldCheck, Sparkles,
} from "lucide-react";

const WHATSAPP =
  "https://api.whatsapp.com/send?phone=5595991624274&text=Ol%C3%A1,%20vim%20pelo%20site,%20gostaria%20de%20agendar%20uma%20sess%C3%A3o";
const BOOKING = "https://bit.ly/AgendamentoEvertonpsi";
const INSTAGRAM = "https://www.instagram.com/psievertonaraujo/";
const LATTES = "http://lattes.cnpq.br/9879492582863367";
const EMAIL = "mailto:psievertonaraujo@gmail.com";

const faqs = [
  {
    q: "Como funciona a primeira sessão?",
    a: "O primeiro encontro é um momento para conversarmos sobre o que motivou a busca por atendimento, conhecer suas expectativas e esclarecer dúvidas sobre o processo terapêutico. Não é necessário chegar com tudo organizado: começamos a partir do que for possível compartilhar.",
  },
  {
    q: "A psicoterapia é presencial ou on-line?",
    a: "Os atendimentos podem acontecer presencialmente, em Boa Vista–RR, ou on-line. A modalidade é definida considerando suas necessidades, condições de acesso e as orientações profissionais aplicáveis.",
  },
  {
    q: "Quanto tempo dura uma sessão?",
    a: "A duração e a frequência são combinadas no início do acompanhamento, considerando as necessidades do caso e os parâmetros técnicos da prática psicológica.",
  },
  {
    q: "O que é a Terapia Cognitivo-Comportamental?",
    a: "A TCC é uma abordagem estruturada e colaborativa que busca compreender as relações entre pensamentos, emoções e comportamentos. Ao longo do processo, psicólogo e paciente trabalham para desenvolver estratégias e ampliar possibilidades de enfrentamento.",
  },
  {
    q: "Como posso agendar um atendimento?",
    a: "Você pode utilizar o botão de agendamento ou entrar em contato diretamente pelo WhatsApp. Será possível conversar sobre horários, modalidade e demais informações iniciais.",
  },
];

export default function Home() {
  return (
    <main>
      <ScrollEffects />
      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#inicio" aria-label="Everton Araújo, início">
            <Image src="/logo-everton.png" alt="Everton Araújo — Psicólogo, CRP 20/10822" width={631} height={395} priority className="brand-logo" />
          </a>
          <nav className="nav-links" aria-label="Navegação principal">
            <a href="#sobre">Sobre mim</a>
            <a href="#abordagem">Abordagem</a>
            <a href="#atendimento">Atendimento</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <a className="button button-small button-outline nav-cta" href={BOOKING} target="_blank" rel="noreferrer">
            Agendar conversa <ArrowRight size={16} />
          </a>
          <a className="mobile-menu" href="#contato" aria-label="Ir para contato"><Menu /></a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy" data-reveal="up">
            <div className="eyebrow"><span /> PSICOLOGIA CLÍNICA</div>
            <h1 className="hero-title"><span style={{"--line":0} as React.CSSProperties}>Um espaço para</span><span style={{"--line":1} as React.CSSProperties}><em>se escutar</em>, compreender</span><span style={{"--line":2} as React.CSSProperties}>e construir novos caminhos.</span></h1>
            <p className="hero-lead">
              Psicoterapia com acolhimento, colaboração e responsabilidade técnica.
              Um processo construído no seu ritmo, a partir da sua história.
            </p>
            <div className="hero-actions">
              <a className="button button-contact-top" href="#formulario">Prefiro deixar meu contato <ArrowRight size={18} /></a>
              <a className="button button-primary" href={BOOKING} target="_blank" rel="noreferrer">
                Agende seu atendimento <ArrowRight size={18} />
              </a>
              <a className="text-link" href="#sobre">Conheça meu trabalho <ArrowDown size={16} /></a>
            </div>
            <div className="hero-note"><span className="note-dot" /> <span className="hero-note-text">Atendimento presencial em Boa Vista e on-line<br /><strong>Adolescentes a partir de 12 anos e adultos</strong></span></div>
          </div>
          <div className="hero-visual" data-reveal="left">
            <div className="photo-frame">
              <Image
                src="/foto-everton.jpeg"
                alt="Everton Araújo, psicólogo, em fotografia profissional lendo um livro"
                fill
                priority
                sizes="(max-width: 900px) 90vw, 44vw"
                className="hero-photo"
              />
            </div>
            <div className="photo-caption">
              <span className="caption-line" />
              <span><strong>Everton Araújo</strong><small>Psicólogo · CRP 20/10822</small></span>
            </div>
            <div className="floating-note"><strong>Everton Araújo</strong><span>Psicólogo · CRP 20/10822</span></div>
          </div>
        </div>
        <div className="container hero-bottom"><span>01 / 06</span><span className="hero-bottom-line" /><span>Conheça uma psicologia construída em conjunto</span></div>
      </section>

      <div className="word-ribbon" aria-label="Escuta, presença, autonomia e cuidado">
        <div className="word-ribbon-track">
          <span>ESCUTA</span><i>✳</i><span>PRESENÇA</span><i>✳</i><span>AUTONOMIA</span><i>✳</i><span>CUIDADO</span><i>✳</i>
          <span>ESCUTA</span><i>✳</i><span>PRESENÇA</span><i>✳</i><span>AUTONOMIA</span><i>✳</i><span>CUIDADO</span><i>✳</i>
        </div>
      </div>

      <section className="intro section-pad">
        <div className="container intro-grid" data-reveal="up">
          <div className="section-kicker">CUIDADO EM SAÚDE MENTAL</div>
          <div>
            <h2>Você não precisa ter todas as respostas para <em>começar.</em></h2>
            <p className="body-large">A psicoterapia é um espaço de encontro e construção. Um lugar para olhar com atenção para suas experiências, reconhecer padrões e desenvolver recursos para lidar com os desafios da vida.</p>
          </div>
        </div>
      </section>

      <section className="about section-pad" id="sobre">
        <div className="container about-grid" data-reveal="up">
          <div className="about-art">
            <div className="about-card">
              <span className="quote-mark">“</span>
              <p>Compreender a própria história pode abrir espaço para novas formas de viver.</p>
              <span className="quote-author">UM PROCESSO, NO SEU TEMPO</span>
            </div>
            <div className="about-stamp">PSICOLOGIA<br />CLÍNICA</div>
          </div>
          <div className="about-content">
            <div className="eyebrow"><span /> SOBRE MIM</div>
            <h2>Prazer, sou <em>Everton Araújo.</em></h2>
            <p>Sou psicólogo e trabalho com a compreensão das experiências humanas, considerando a singularidade de cada pessoa e o contexto em que sua história acontece.</p>
            <p>Na clínica, meu compromisso é oferecer um espaço ético, respeitoso e colaborativo, no qual possamos compreender suas demandas e construir, juntos, caminhos possíveis.</p>
            <p>Minha trajetória também inclui experiências acadêmicas, organizacionais e psicossociais, que ampliam meu olhar sobre as diferentes dimensões da vida e da saúde mental.</p>
            <div className="credentials">
              <div><span className="credential-number">01</span><span><strong>Psicólogo</strong><small>CRP 20/10822</small></span></div>
              <div><span className="credential-number">02</span><span><strong>Atuação clínica</strong><small>Adultos e adolescentes</small></span></div>
              <div><span className="credential-number">03</span><span><strong>Produção acadêmica</strong><small>Currículo Lattes disponível</small></span></div>
            </div>
            <a className="text-link burgundy-link" href={LATTES} target="_blank" rel="noreferrer">Acessar currículo Lattes <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="approach section-pad" id="abordagem">
        <div className="container">
          <div className="approach-heading" data-reveal="up">
            <div><div className="eyebrow light-eyebrow"><span /> ABORDAGEM TERAPÊUTICA</div><h2>Entender para <em>transformar.</em></h2></div>
            <p>A Terapia Cognitivo-Comportamental orienta meu trabalho clínico. É uma abordagem que valoriza a participação ativa, os objetivos compartilhados e estratégias construídas de acordo com cada pessoa.</p>
          </div>
          <div className="approach-cards" data-reveal="up">
            <article className="approach-card"><span className="card-index">01</span><div className="card-icon">↗</div><h3>Pensamentos</h3><p>Investigar interpretações e crenças que influenciam a maneira como percebemos as situações.</p></article>
            <article className="approach-card"><span className="card-index">02</span><div className="card-icon">◎</div><h3>Emoções</h3><p>Reconhecer e compreender as respostas emocionais, desenvolvendo formas mais funcionais de lidar com elas.</p></article>
            <article className="approach-card"><span className="card-index">03</span><div className="card-icon">⌁</div><h3>Comportamentos</h3><p>Identificar padrões de ação e experimentar novas estratégias no cotidiano, respeitando seu contexto.</p></article>
          </div>
          <p className="approach-footnote">A psicoterapia não oferece fórmulas prontas. O processo é individualizado e construído em colaboração.</p>
        </div>
      </section>

      <section className="care section-pad" id="atendimento">
        <div className="container">
          <div className="care-heading" data-reveal="up"><div className="eyebrow"><span /> MODALIDADES DE ATENDIMENTO</div><h2>O cuidado pode acontecer <em>onde você estiver.</em></h2></div>
          <div className="care-grid" data-reveal="up">
            <article className="care-card care-presential">
              <div className="care-icon"><MapPin size={23} /></div><span className="care-label">PRESENCIAL</span>
              <h3>Um espaço preparado para acolher você.</h3>
              <p>Atendimento em consultório, em ambiente reservado, em Boa Vista–RR.</p>
              <div className="address"><MapPin size={17} /><span>Av. Major Williams, 1782<br />Bairro São Francisco · Boa Vista–RR</span></div>
              <a className="text-link burgundy-link" href="https://www.google.com/maps/search/?api=1&query=Av.+Major+Williams%2C+1782%2C+Boa+Vista%2C+RR" target="_blank" rel="noreferrer">Ver localização <ArrowRight size={16} /></a>
            </article>
            <article className="care-card care-online">
              <div className="care-icon"><Monitor size={23} /></div><span className="care-label">ON-LINE</span>
              <h3>Psicoterapia com flexibilidade e privacidade.</h3>
              <p>Atendimento por videochamada, com atenção às condições necessárias para um encontro protegido e reservado.</p>
              <div className="online-detail"><Check size={16} /> De onde você estiver, com conexão à internet</div>
              <a className="text-link burgundy-link" href={BOOKING} target="_blank" rel="noreferrer">Consultar disponibilidade <ArrowRight size={16} /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="faq section-pad" id="duvidas">
        <div className="container faq-grid" data-reveal="up">
          <div className="faq-intro"><div className="eyebrow"><span /> DÚVIDAS FREQUENTES</div><h2>Talvez você esteja se <em>perguntando...</em></h2><p>Reunimos algumas informações para ajudar você a dar o primeiro passo com mais clareza.</p><a className="text-link burgundy-link" href={WHATSAPP} target="_blank" rel="noreferrer">Fale comigo <ArrowRight size={16} /></a></div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.q} open={index === 0}>
                <summary>{faq.q}<ChevronDown size={18} /></summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section-pad" id="contato">
        <div className="container contact-inner" data-reveal="up">
          <div className="contact-copy"><div className="eyebrow light-eyebrow"><span /> SEU PRÓXIMO PASSO</div><h2>Começar também é uma forma de <em>cuidar de si.</em></h2><p>Se fizer sentido para você, estou disponível para conversar sobre o atendimento e esclarecer suas dúvidas iniciais.</p><a className="button button-light" href={BOOKING} target="_blank" rel="noreferrer">Agendar atendimento <ArrowRight size={18} /></a><ContactForm /></div>
          <div className="contact-details">
            <a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /><span><small>WHATSAPP</small><strong>Conversar e tirar dúvidas</strong></span><ArrowRight /></a>
            <a href={EMAIL}><Mail /><span><small>E-MAIL</small><strong>psievertonaraujo@gmail.com</strong></span><ArrowRight /></a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram /><span><small>INSTAGRAM</small><strong>@psievertonaraujo</strong></span><ArrowRight /></a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-main">
          <a className="footer-signature" href="#inicio" aria-label="Everton Araújo, voltar ao início"><strong>Everton Araújo</strong><span>Psicologia Clínica · CRP 20/10822</span></a>
          <p>Psicologia clínica com ética, escuta e responsabilidade.</p>
          <div className="footer-links"><a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a><a href={LATTES} target="_blank" rel="noreferrer">Currículo Lattes</a><a href={EMAIL}>E-mail</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Everton Araújo. Todos os direitos reservados.</span><span>Psicólogo · CRP 20/10822</span></div>
      </footer>

      <a className="whatsapp-float" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp"><MessageCircle size={23} /></a>
    </main>
  );
}
