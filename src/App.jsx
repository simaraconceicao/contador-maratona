import { useState } from 'react';
import Countdown from 'react-countdown';
import './app.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const targetDate = new Date('2024-02-26T19:00:00-03:00');

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="counter">Ao Vivo: Maratona Seu Projeto no Ar</span>;
    } else {
      return (
        <span className="counter">
          {days} dias, {hours} horas, {minutes} minutos, {seconds} segundos
        </span>
      );
    }
  };

  const cardsData = [
    {
      title: 'Backend vs Frontend',
      description: 'Backend refere-se à parte do servidor de uma aplicação, lidando com operações de banco de dados e lógica de negócios. Frontend é a parte do cliente, responsável pela interface do usuário e experiência do usuário.',
      link: 'https://youtu.be/YG810ZMZAf8?si=rVkuWMwRhZNrXLbH',
    },
    {
      title: 'HTML',
      description: 'HTML (Hypertext Markup Language) é a linguagem de marcação padrão para criar páginas da web. Estrutura o conteúdo usando elementos e atributos.',
      link: 'https://youtu.be/o70mOrRWO9M?si=pnltrRxkQkz0QM0C',
    },
    {
      title: 'CSS',
      description: 'CSS (Cascading Style Sheets) é usado para estilizar páginas da web. Descreve como os elementos devem ser exibidos na tela, especificando layout, cores e fontes.',
      link: 'https://youtu.be/XAYlnBg-XOQ?si=YjIDtyFQ1DlfqWzl',
    },
    {
      title: 'JavaScript',
      description: 'JavaScript é uma linguagem de programação que permite páginas da web interativas. É comumente usado para desenvolvimento tanto no front-end quanto no back-end.',
      link: 'https://youtu.be/odiob83UJMk?si=C4eBEYOHU9gaecvx',
    },
    {
      title: 'Node.js + Tutorial',
      description: 'Node.js é um ambiente de execução JavaScript construído no motor V8 do Chrome. Permite que você execute código JavaScript no lado do servidor.',
      link: 'https://youtu.be/0uSxXV7kNWc?si=hBcteMFt6-hITX0S',
    },
    {
      title: 'React.js',
      description: 'React.js é uma biblioteca JavaScript para construir interfaces de usuário. Permite que os desenvolvedores criem componentes de interface reutilizáveis.',
      link: 'https://youtu.be/bUJ9pPQmTd8?si=k-eYZhS4gNVacdYK',
    },
    {
      title: 'API',
      description: 'API (Interface de Programação de Aplicações) permite que diferentes aplicativos se comuniquem entre si. Define os métodos e formatos de dados que as aplicações podem usar.',
      link: 'https://youtu.be/zRbwW2kki7U?si=RGGqQD1Cg3JxRiM5',
    },
    {
      title: 'CRUD',
      description: 'CRUD significa Create, Read, Update e Delete. Representa as operações básicas realizadas em dados em um banco de dados ou aplicativo.',
      link: 'https://youtu.be/Q2ffsGdd3M8',
    },
    {
      title: 'VSCode  + Tutorial',
      description: 'Visual Studio Code (VSCode) é um editor de código-fonte que inclui suporte para depuração, controle Git embutido, realce de sintaxe e muito mais.',
      link: 'https://youtu.be/i2-xN-5Ud-c',
    },
    {
      title: 'GitHub + Tutorial',
      description: 'GitHub é uma plataforma baseada na web para controle de versão e colaboração usando Git. Fornece hospedagem para projetos de desenvolvimento de software.',
      link: 'https://youtu.be/hQIrO4dlSho',
    },
    {
      title: 'Git + Tutorial',
      description: 'Git é um sistema de controle de versão distribuído que rastreia alterações no código-fonte durante o desenvolvimento de software. Permite colaboração entre desenvolvedores.',
      link: 'https://youtu.be/NlP3LR5SjfU',
    },
    {
      title: 'Terminal + Tutorial',
      description: 'O terminal, ou linha de comando, é uma interface de texto para interagir com seu computador. Permite que você execute comandos para realizar várias tarefas.',
      link: 'https://youtu.be/KxjsFIDhDeo',
    },
    {
      title: 'npm',
      description: 'npm é o gerenciador de pacotes para JavaScript. Ajuda você a descobrir e instalar pacotes de código, gerenciar dependências e executar scripts.',
      link: 'https://www.npmjs.com/',
    },
    {
      title: 'Vite',
      description: 'Vite é uma ferramenta de construção front-end de próxima geração que melhora significativamente a experiência de desenvolvimento. Suporta Vue.js e React.',
      link: 'https://vitejs.dev/',
    },
    {
      title: 'Objeto + Tutorial',
      description: 'Um objeto em JavaScript é uma estrutura de dados que armazena pares de chave e valor. É utilizado para representar e organizar informações em formato de propriedades.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects',
    },
    {
      title: 'Array + Tutorial',
      description: 'Em JavaScript, um array é uma estrutura de dados que armazena elementos de forma ordenada. É uma lista de valores acessíveis por índices numéricos, começando do zero.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
    },
    {
      title: 'JSON + Tutorial',
      description: 'JSON (JavaScript Object Notation) é um formato de dados leve e de fácil leitura utilizado para intercâmbio de informações. Em JavaScript, o JSON é frequentemente utilizado para serializar e transmitir dados.',
      link: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON',
    },
    {
      title: 'Loop + Tutorial',
      description: 'Em JavaScript, um loop é uma estrutura de controle que permite repetir um bloco de código várias vezes. Existem diversos tipos de loops, como o "for" e o "while", que facilitam a iteração sobre dados.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration',
    },
    {
      title: 'Arrow functions + Tutorial',
      description: 'Outra forma de escrever funções em javascript. A principal característica das arrow functions é a omissão da palavra-chave "function" e a introdução de uma seta (=>) entre os parâmetros e o corpo da função. Indicada para exepressões mais curtas.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects',
    },
    {
      title: 'Métodos para Arrays + Tutorial',
      description: 'Os métodos para arrays em JavaScript são funções incorporadas que permitem realizar operações específicas em arrays. Alguns exemplos incluem "map", "filter" e "reduce", oferecendo maneiras eficientes de manipular dados em arrays.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#methods',
    }
  ];
  
  const filteredCards = cardsData.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <header>
        <h1>Faltam {<Countdown date={targetDate} renderer={renderer} />} para Maratona Seu Projeto no Ar</h1>
        
        <input
          type="text"
          placeholder="Busque aqui..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </header>

      <div className="gallery">
        {filteredCards.map((card) => (
          <div className="card" key={card}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <a href={card.link} target="_blank" rel="noopener noreferrer">
              Saiba mais
            </a>
          </div>
        ))}
      </div>
      
      <footer>
        <p className="read-the-docs">
          Criado com amor por Simara Conceição, Quero Ser Dev.
        </p>
      </footer>
    </>
  );
}

export default App;
