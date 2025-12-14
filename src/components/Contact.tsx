import { Github, Globe, Mail, MessageSquare, University } from 'lucide-react';
import Title from './Title';

export default function Contact() {
  const contactOptions = [
    {
      icon: Github,
      title: 'Repositórios GitHub',
      description: 'Acesse os repositórios individuais',
      link: 'https://github.com/Grazziano/projetos-siot-ufpel',
      color: 'from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100',
      bgColor: 'from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900',
      borderColor:
        'border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500',
    },
    {
      icon: Globe,
      title: 'Site Oficial UFPel',
      description: 'Conheça mais sobre a universidade',
      link: 'https://ufpel.edu.br',
      color: 'from-blue-500 to-indigo-600',
      bgColor:
        'from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30',
      borderColor:
        'border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600',
    },
    {
      icon: University,
      title: 'Centro de Desenvolvimento Tecnológico',
      description: 'Informações sobre o CDT',
      link: '#',
      color: 'from-indigo-500 to-purple-600',
      bgColor:
        'from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30',
      borderColor:
        'border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-600',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md dark:shadow-lg p-6 md:p-8 mb-8 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
      {/* Efeito de gradiente sutil no fundo */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="relative">
        <Title icon={Mail} title="Contato e Colaboração" />

        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Para informações adicionais ou sugestões de colaboração, entre em
          contato com os pesquisadores responsáveis por cada repositório, ou com
          a coordenação da{' '}
          <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            UFPel
          </span>
          .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            const isLink = option.link !== '#';

            const content = (
              <div
                className={`group relative p-4 rounded-lg border-2 ${
                  option.borderColor
                } bg-gradient-to-br ${
                  option.bgColor
                } transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  isLink ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${option.bgColor} flex items-center justify-center border border-gray-200 dark:border-gray-700 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      className={`w-5 h-5 text-transparent bg-gradient-to-br ${option.color} bg-clip-text`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1 text-sm md:text-base">
                      {option.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                </div>
              </div>
            );

            if (isLink) {
              return (
                <a
                  key={index}
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              );
            }

            return <div key={index}>{content}</div>;
          })}
        </div>

        <div className="flex items-center gap-2 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800">
          <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-medium">Dica:</span> Cada repositório possui
            informações de contato específicas em sua documentação.
          </p>
        </div>
      </div>
    </div>
  );
}
