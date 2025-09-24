import { CornerDownRight, Folder } from 'lucide-react';

export default function RepositoriesSection() {
  const repositories = [
    {
      href: 'https://github.com/LUPSSIoT',
      title: 'Projeto Geral – LUPS/SIoT',
      description:
        'Repositório institucional do grupo de pesquisa LUPS. Contém documentos de referência, artigos, arquiteturas propostas e outros materiais relacionados aos projetos de pesquisa conduzidos no laboratório.',
    },
    {
      href: 'https://github.com/thalialongaray/iData',
      title: 'iData – Repositório de Arquivos do TCC',
      description:
        'Repositório vinculado ao Trabalho de Conclusão de Curso iData, cujo objetivo é propor uma solução para gerenciamento e modelagem de dados sociais, com ênfase em ambientes de IoT. Inclui códigos, esquemas de dados e resultados experimentais.',
    },
    {
      href: 'https://github.com/guilhermedallm4/SIoT',
      title: 'VISO – Virtual Interactions between Social Objects',
      description:
        'Este projeto aborda técnicas de Extração, Transformação e Carga (ETL) de dados para bancos de dados NoSQL, com foco no MongoDB. A implementação considera o modelo de objetos sociais e suas interações, sendo um componente essencial para estruturação e persistência de dados no contexto SIoT.',
    },
    {
      href: 'https://github.com/vini545/SiotApp',
      title: 'SIoT App – Aplicativo Flutter',
      description:
        'Aplicativo móvel desenvolvido com Flutter, voltado à visualização e interação com dados gerados por objetos sociais. O projeto busca oferecer uma interface acessível para exploração de redes de interação, contribuindo para aplicações em cidades inteligentes, monitoramento ambiental e automação social.',
    },
    {
      href: 'https://github.com/Grazziano/VISO-BASS',
      title: 'VISO-B.A.S.S. - VISO Based API for Structured Storage',
      description:
        'Uma API com foco em armazenamento estruturado, baseada no modelo VISO. API foi desenvolvida em NestJS com persistência de dados em MongoDB, como parte do projeto de mestrado vinculado à proposta de solução estrutural para a persistência de dados na Social IoT. O repositório implementa modelos para entidades como Interações, Objetos, Ambientes e Relacionamentos, com foco em consultas otimizadas e estrutura escalável.',
    },
    {
      href: 'https://github.com/Ryhx/ontologia',
      title: 'Ontologia para representação de relacionamentos em SIoT',
      description: 'Ontologia para representação de relacionamentos em SIoT',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="mr-2">
          <Folder />
        </span>
        Repositórios Vinculados
      </h2>

      <ul className="space-y-6">
        {repositories.map((repo, index) => (
          <li
            key={index}
            className="border-l-4 border-blue-500 pl-4 hover:border-blue-700 transition-colors bg-blue-100 rounded-lg p-4"
          >
            <div className="flex items-start mb-2">
              <span className="text-blue-500 mr-2 mt-1">
                <CornerDownRight />
              </span>
              <a
                href={repo.href}
                className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {repo.title}
              </a>
            </div>
            <p className="text-gray-600 leading-relaxed ml-6">
              {repo.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
