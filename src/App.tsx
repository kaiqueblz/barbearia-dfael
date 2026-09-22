import {
  Accessibility,
  Car,
  Clock3,
  CreditCard,
  MapPin,
  Menu,
  MessageCircle,
  Scissors,
  Wifi,
  X,
} from 'lucide-react';
import { useState, type ReactNode } from 'react';
import './App.css';

const WHATSAPP = '5511999999999';

type TServico = {
  nome: string;
  preco: string;
  tempo: string;
  descricao?: string;
  destaque?: boolean;
};

const servicos: TServico[] = [
  {
    nome: 'Corte',
    preco: 'R$ 45,00',
    tempo: '45 min',
    destaque: true,
  },
  {
    nome: 'Barba',
    preco: 'R$ 40,00',
    tempo: '30 min',
    destaque: true,
  },
  {
    nome: 'Cabelo + Barba',
    preco: 'R$ 75,00',
    tempo: '1h',
    destaque: true,
  },
  {
    nome: 'Corte + Sobrancelha',
    preco: 'R$ 60,00',
    tempo: '45 min',
    destaque: true,
  },
  {
    nome: 'Corte Kids - 1 a 8 anos',
    preco: 'R$ 45,00',
    tempo: '1h',
    descricao:
      'Corte realizado conforme a reação da criança. Daremos todo o suporte e atenção durante o atendimento.',
    destaque: true,
  },
  {
    nome: 'Corte Tesoura',
    preco: 'R$ 50,00',
    tempo: '45 min',
    destaque: true,
  },
  {
    nome: 'Corte Afro - Black',
    preco: 'R$ 50,00',
    tempo: '1h',
    descricao:
      'Serviço artesanal que busca realçar a beleza e o estilo do cabelo afro.',
  },
  {
    nome: 'Cavanhaque',
    preco: 'R$ 25,00',
    tempo: '30 min',
  },
  {
    nome: 'Corte + Barba + Sobrancelha',
    preco: 'R$ 85,00',
    tempo: '1h',
  },
  {
    nome: 'Aplicação de Shampoo Escurecedor',
    preco: 'R$ 30,00',
    tempo: '25 min',
  },
  {
    nome: 'Corte + Relaxamento',
    preco: 'R$ 75,00',
    tempo: '1h',
  },
  {
    nome: 'Corte + Progressiva',
    preco: 'R$ 130,00',
    tempo: '2h',
  },
  {
    nome: 'Corte + Luzes',
    preco: 'R$ 130,00',
    tempo: '30 min',
  },
  {
    nome: 'Descoloração Global - Nevou',
    preco: 'R$ 170,00',
    tempo: '30 min',
  },
  {
    nome: 'Corte a Domicílio',
    preco: 'R$ 150,00',
    tempo: '3h',
    descricao:
      'Até 3 km de distância, incluindo cabelo, barba e sobrancelha. Acima de 3 km, acréscimo de R$ 5,00 por km percorrido.',
  },
  {
    nome: 'Cor - Pintura',
    preco: 'R$ 50,00',
    tempo: '1h',
    descricao:
      'Preto, castanho escuro e castanho claro. Para outras cores, consulte valores.',
  },
  {
    nome: 'Hidratação Capilar',
    preco: 'R$ 30,00',
    tempo: '30 min',
  },
  {
    nome: 'Relaxamento',
    preco: 'R$ 30,00',
    tempo: '30 min',
  },
  {
    nome: 'Perfil (Pezinho)',
    preco: 'R$ 15,00',
    tempo: '10 min',
  },
  {
    nome: 'Freestyle',
    preco: 'R$ 10,00+',
    tempo: '15 min',
    descricao:
      'Riscos e desenhos de acordo com a habilidade do profissional.',
  },
  {
    nome: 'Progressiva',
    preco: 'R$ 100,00+',
    tempo: '1h 15min',
  },
  {
    nome: 'Sobrancelha',
    preco: 'R$ 15,00',
    tempo: '10 min',
  },
  {
    nome: 'Penteado',
    preco: 'R$ 20,00',
    tempo: '25 min',
  },
  {
    nome: 'Pacote Mensal',
    preco: 'Varia',
    tempo: '1h',
    descricao: 'Pacote mensal com 4 cortes dentro do mês.',
  },
];

const servicosPrincipais = servicos.filter(
  (servico) => servico.destaque,
);

function Instagram() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        width="18"
        height="18"
        x="3"
        y="3"
        rx="5"
        ry="5"
      />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line
        x1="17.5"
        x2="17.51"
        y1="6.5"
        y2="6.5"
      />
    </svg>
  );
}

export default function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  const abrirWhatsApp = (servico?: string) => {
    const mensagem = servico
      ? `Olá! Vim pelo site da Barbearia D'Fael e gostaria de reservar o serviço: ${servico}.`
      : `Olá! Vim pelo site da Barbearia D'Fael e gostaria de agendar um horário.`;

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <main>
      <section className="hero" id="inicio">
        <header className="header">
          <a
            className="logo"
            href="#inicio"
            onClick={fecharMenu}
          >
            <img
              src="/images/logo-dfael.jpeg"
              alt="Barbearia D'Fael"
            />
          </a>

          <button
            type="button"
            className="menu-btn"
            onClick={() =>
              setMenuAberto((aberto) => !aberto)
            }
            aria-label="Abrir menu"
          >
            {menuAberto ? <X /> : <Menu />}
          </button>

          <nav className={menuAberto ? 'aberto' : ''}>
            <a href="#inicio" onClick={fecharMenu}>
              Início
            </a>

            <a href="#servicos" onClick={fecharMenu}>
              Serviços
            </a>

            <a href="#sobre" onClick={fecharMenu}>
              Sobre
            </a>

            <a href="#ambiente" onClick={fecharMenu}>
              Ambiente
            </a>

            <a href="#contato" onClick={fecharMenu}>
              Contato
            </a>
          </nav>
        </header>

        <div className="hero-content">
          <span className="hero-subtitle">
            BARBEARIA D'FAEL
          </span>

          <h1>
            ESTILO, CUIDADO
            <br />
            E TRADIÇÃO EM
            <br />
            CADA CORTE.
          </h1>

          <span className="linha" />

          <p>Mais que um corte, uma experiência.</p>

          <button
            type="button"
            className="cta"
            onClick={() => abrirWhatsApp()}
          >
            <MessageCircle />
            AGENDE SEU HORÁRIO
          </button>
        </div>
      </section>

      <section
        className="servicos section"
        id="servicos"
      >
        <Titulo>NOSSOS SERVIÇOS</Titulo>

        <div className="servicos-grid">
          {servicosPrincipais.map((servico) => (
            <CardServico
              key={servico.nome}
              servico={servico}
              onReservar={abrirWhatsApp}
            />
          ))}
        </div>

        <div className="ver-todos-container">
          <button
            type="button"
            className="ver-todos"
            onClick={() =>
              setMostrarTodos((mostrar) => !mostrar)
            }
          >
            {mostrarTodos
              ? 'FECHAR SERVIÇOS'
              : 'VER TODOS OS SERVIÇOS'}
          </button>
        </div>

        {mostrarTodos && (
          <div className="catalogo-completo">
            <div className="catalogo-header">
              <div>
                <span>BARBEARIA D'FAEL</span>
                <h2>Todos os serviços</h2>
              </div>

              <button
                type="button"
                onClick={() => setMostrarTodos(false)}
                aria-label="Fechar serviços"
              >
                <X />
              </button>
            </div>

            <div className="catalogo-grid">
              {servicos.map((servico) => (
                <CardCatalogo
                  key={servico.nome}
                  servico={servico}
                  onReservar={abrirWhatsApp}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="sobre" id="sobre">
        <div className="sobre-imagem">
          <img
            src="/images/ambiente-01.jpeg"
            alt="Ambiente da Barbearia D'Fael"
          />
        </div>

        <div className="sobre-content">
          <span className="sobre-subtitle">
            CONHEÇA A D'FAEL
          </span>

          <h2>SOBRE NÓS</h2>

          <span className="linha" />

          <p>
            Um espaço preparado para quem valoriza um
            bom corte, atendimento e estilo.
          </p>

          <p>
            Na Barbearia D'Fael, cada detalhe é pensado
            para proporcionar uma experiência confortável
            e um resultado de qualidade.
          </p>

          <button
            type="button"
            className="cta"
            onClick={() => abrirWhatsApp()}
          >
            <MessageCircle />
            AGENDAR HORÁRIO
          </button>
        </div>
      </section>

      <section
        className="ambiente section"
        id="ambiente"
      >
        <Titulo>NOSSO ESPAÇO</Titulo>

        <p className="ambiente-descricao">
          Conheça um pouco da Barbearia D'Fael.
        </p>

        <div className="galeria">
          <div className="galeria-principal">
            <img
              src="/images/fachada.jpeg"
              alt="Fachada da Barbearia D'Fael"
            />
          </div>

          <div className="galeria-secundaria">
            <img
              src="/images/ambiente-01.jpeg"
              alt="Cadeiras da Barbearia D'Fael"
            />

            <img
              src="/images/ambiente-02.jpeg"
              alt="Produtos da Barbearia D'Fael"
            />
          </div>
        </div>
      </section>

      <section className="comodidades section">
        <Titulo>COMODIDADES</Titulo>

        <div className="comodidades-grid">
          <div className="comodidade">
            <Car />
            <span>Estacionamento</span>
          </div>

          <div className="comodidade">
            <CreditCard />
            <span>Pagamento com cartão</span>
          </div>

          <div className="comodidade">
            <Accessibility />
            <span>Acessibilidade</span>
          </div>

          <div className="comodidade">
            <Wifi />
            <span>Wi-Fi</span>
          </div>
        </div>
      </section>

 <section
  className="contato section"
  id="contato"
>
  <Titulo>VENHA NOS VISITAR</Titulo>

  <div className="contato-grid">
    <div>
      <MapPin />

      <p>
        Rua Maria do Rosário, 76
        <br />
        <span>
          Jardim Ivonete, Poá - SP
          <br />
          CEP 08553-120
        </span>
      </p>
    </div>

    <div>
      <Clock3 />

      <p>
        Barbearia D'Fael
        <br />
        <span>Consulte a disponibilidade</span>
      </p>
    </div>

    <a
      className="contato-instagram"
      href="https://www.instagram.com/barbearia_dfael/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Instagram />

      <p>
        Instagram
        <br />
        <span>@barbearia_dfael</span>
      </p>
    </a>
  </div>

  <button
    type="button"
    className="cta"
    onClick={() => abrirWhatsApp()}
  >
    <MessageCircle />
    AGENDE SEU HORÁRIO
  </button>
</section>

      <footer>
        <img
          src="/images/logo-dfael.jpeg"
          alt="Barbearia D'Fael"
        />

        <p>
          © {new Date().getFullYear()} Barbearia D'Fael.
          Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}

function CardServico({
  servico,
  onReservar,
}: {
  servico: TServico;
  onReservar: (servico: string) => void;
}) {
  return (
    <article className="servico">
      <div className="service-icon">
        <Scissors />
      </div>

      <h3>{servico.nome}</h3>

      <strong>{servico.preco}</strong>

      <p>
        <Clock3 />
        {servico.tempo}
      </p>

      <button
        type="button"
        className="reservar-btn"
        onClick={() => onReservar(servico.nome)}
      >
        RESERVAR
      </button>
    </article>
  );
}

function CardCatalogo({
  servico,
  onReservar,
}: {
  servico: TServico;
  onReservar: (servico: string) => void;
}) {
  return (
    <article className="catalogo-card">
      <div className="catalogo-card-top">
        <h3>{servico.nome}</h3>

        <strong>{servico.preco}</strong>
      </div>

      {servico.descricao && (
        <p className="catalogo-descricao">
          {servico.descricao}
        </p>
      )}

      <div className="catalogo-card-footer">
        <span>
          <Clock3 />
          {servico.tempo}
        </span>

        <button
          type="button"
          onClick={() => onReservar(servico.nome)}
        >
          Reservar
        </button>
      </div>
    </article>
  );
}

function Titulo({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="section-title">
      <span />
      <h2>{children}</h2>
      <span />
    </div>
  );
}