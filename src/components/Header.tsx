import { memo } from 'react';
import { GraduationCap } from 'lucide-react';
import logo from '../assets/imgs/Escudo Colorido UFPEL_10042014.png';
import ToggleButton from './ToggleButton';

interface HeaderProps {
  className?: string;
  showDescription?: boolean;
}

function Header({ className = '', showDescription = true }: HeaderProps) {
  return (
    <header
      className={`bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200/50 dark:border-gray-700/50 ${className}`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 md:gap-4">
          {/* Logo e conteúdo principal */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 flex-1">
            {/* Logo com loading otimizado */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 dark:from-blue-600/30 dark:to-indigo-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={logo}
                  alt="Escudo da Universidade Federal de Pelotas - UFPel"
                  className="relative w-full h-full object-contain drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
                  loading="eager"
                  width={80}
                  height={80}
                />
              </div>
            </div>

            {/* Conteúdo de texto */}
            <div className="text-center md:text-left space-y-1 md:space-y-1.5 flex-1">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" />
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-blue-300 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
                  Repositórios de Pesquisa - UFPel
                </h1>
              </div>

              {showDescription && (
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <div className="hidden md:block w-6 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                  <p className="text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-300 font-medium max-w-2xl leading-relaxed">
                    Laboratório de Sistemas Ubíquos e Paralelos (LUPS)
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Toggle button */}
          <div className="md:ml-4">
            <ToggleButton />
          </div>
        </div>
      </div>

      {/* Elemento decorativo melhorado */}
      <div className="relative h-1.5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-green-600 opacity-90 animate-gradient-x" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>
    </header>
  );
}

export default memo(Header);
