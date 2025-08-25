/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", // gray-700
        input: "var(--color-input)", // gray-700
        ring: "var(--color-ring)", // cyan-400
        background: "var(--color-background)", // gray-800
        foreground: "var(--color-foreground)", // white
        primary: {
          DEFAULT: "var(--color-primary)", // indigo-950
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // violet-700
          foreground: "var(--color-secondary-foreground)", // white
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // red-500
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // gray-600
          foreground: "var(--color-muted-foreground)", // gray-400
        },
        accent: {
          DEFAULT: "var(--color-accent)", // cyan-400
          foreground: "var(--color-accent-foreground)", // indigo-950
        },
        popover: {
          DEFAULT: "var(--color-popover)", // gray-700
          foreground: "var(--color-popover-foreground)", // white
        },
        card: {
          DEFAULT: "var(--color-card)", // gray-700
          foreground: "var(--color-card-foreground)", // white
        },
        success: {
          DEFAULT: "var(--color-success)", // green-500
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // orange-500
          foreground: "var(--color-warning-foreground)", // white
        },
        error: {
          DEFAULT: "var(--color-error)", // red-500
          foreground: "var(--color-error-foreground)", // white
        },
        // Cyberpunk Brand Colors
        'neon-cyan': "var(--color-neon-cyan)", // cyan-400
        'neon-purple': "var(--color-neon-purple)", // violet-700
        'neon-orange': "var(--color-neon-orange)", // orange-500
        'matrix-green': "var(--color-matrix-green)", // green-400
        'deep-space': "var(--color-deep-space)", // indigo-950
        'charcoal': "var(--color-charcoal)", // gray-800
        'surface-elevated': "var(--color-surface-elevated)", // gray-700
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
        'orbitron': ['Orbitron', 'monospace'],
        'space-mono': ['Space Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 245, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(107, 70, 193, 0.3)',
        'glow-orange': '0 0 20px rgba(255, 107, 53, 0.3)',
        'glow-intense-cyan': '0 0 5px rgba(0, 245, 255, 0.5), 0 0 10px rgba(0, 245, 255, 0.3), 0 0 15px rgba(0, 245, 255, 0.2)',
        'glow-intense-purple': '0 0 5px rgba(107, 70, 193, 0.5), 0 0 10px rgba(107, 70, 193, 0.3), 0 0 15px rgba(107, 70, 193, 0.2)',
        'holographic': '0 0 20px rgba(0, 245, 255, 0.2)',
      },
      animation: {
        'typing': 'typing 3s steps(40, end), blink-caret 0.75s step-end infinite',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
        'glitch-1': 'glitch-1 0.3s infinite',
        'glitch-2': 'glitch-2 0.3s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'scan': 'scan 2s linear infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'var(--color-accent)' }
        },
        'glitch-1': {
          '0%, 14%, 15%, 49%, 50%, 99%, 100%': { transform: 'skew(0deg)' },
          '15%, 49%': { transform: 'skew(-2deg)' }
        },
        'glitch-2': {
          '0%, 20%, 21%, 62%, 63%, 99%, 100%': { transform: 'skew(0deg)' },
          '21%, 62%': { transform: 'skew(2deg)' }
        },
        'pulse-glow': {
          'from': { 'box-shadow': '0 0 5px rgba(0, 245, 255, 0.2)' },
          'to': { 'box-shadow': '0 0 20px rgba(0, 245, 255, 0.4)' }
        },
        scan: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' }
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0%)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      backdropBlur: {
        'cyberpunk': '10px',
      },
      transitionTimingFunction: {
        'cyberpunk': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}