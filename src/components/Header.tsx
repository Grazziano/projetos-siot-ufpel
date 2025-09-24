import { memo } from 'react';
import logo from '../assets/imgs/Escudo Colorido UFPEL_10042014.png';
import ToggleButton from './ToggleButton';

interface HeaderProps {
  className?: string;
  showDescription?: boolean;
}

function Header({ className = '', showDescription = true }: HeaderProps) {
  return (
    <header
      className={`bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 ${className}`}
    >
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-6">
          {/* Logo com loading otimizado */}
          <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 transition-transform hover:scale-105 duration-300">
            <img
              src={logo}
              alt="Escudo da Universidade Federal de Pelotas - UFPel"
              className="w-full h-full object-contain drop-shadow-sm"
              loading="eager"
              width={96}
              height={96}
            />
          </div>

          {/* Conteúdo de texto */}
          <div className="text-center md:text-left space-y-1 md:space-y-2">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-blue-400 leading-tight">
              Repositórios de Pesquisa - UFPel
            </h1>

            {showDescription && (
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-400 font-medium max-w-2xl leading-relaxed">
                Laboratório de Sistemas Ubíquos e Paralelos (LUPS)
              </p>
            )}
          </div>
          <div className="ml-auto">
            <ToggleButton />
          </div>
        </div>
      </div>

      {/* Elemento decorativo sutil */}
      <div className="h-1 bg-gradient-to-r from-blue-600 to-green-600 opacity-80" />
    </header>
  );
}

export default memo(Header);
