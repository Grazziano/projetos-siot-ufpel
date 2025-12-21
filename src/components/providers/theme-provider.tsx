import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  // Safe lazy initializer (SSR-friendly)
  const getInitialTheme = (): Theme => {
    if (typeof window === 'undefined') return defaultTheme;
    try {
      const stored = localStorage.getItem(storageKey) as Theme | null;
      if (stored) return stored;
      return defaultTheme;
    } catch {
      return defaultTheme;
    }
  };

  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = (t: Theme) => {
      root.classList.remove('light', 'dark');
      if (t === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
          .matches
          ? 'dark'
          : 'light';
        root.classList.add(systemTheme);
      } else {
        root.classList.add(t);
      }
    };

    applyTheme(theme);

    // If using system, listen to changes in prefers-color-scheme
    let mq: MediaQueryList | null = null;
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (theme !== 'system') return;
      const newSystem = e.matches ? 'dark' : 'light';
      root.classList.remove('light', 'dark');
      root.classList.add(newSystem);
    };

    if (theme === 'system' && typeof window !== 'undefined') {
      mq = window.matchMedia('(prefers-color-scheme: dark)');
      if ((mq as any).addEventListener) {
        (mq as any).addEventListener('change', handleSystemChange);
      } else {
        // legacy
        (mq as any).addListener(handleSystemChange);
      }
    }

    return () => {
      if (mq) {
        if ((mq as any).removeEventListener) {
          (mq as any).removeEventListener('change', handleSystemChange);
        } else {
          (mq as any).removeListener(handleSystemChange);
        }
      }
    };
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    try {
      if (typeof window !== 'undefined')
        localStorage.setItem(storageKey, newTheme);
    } catch {}
    setThemeState(newTheme);
  };

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
