export function TechIcon({ name, className = 'w-4 h-4' }) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '')

  switch (normalized) {
    case 'javascript':
    case 'js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm13.7 13.9c-.8 0-1.4-.4-1.8-1.1l1.4-.9c.2.4.5.6.8.6.4 0 .7-.2.7-.6v-4.4h1.7v4.5c0 1.2-.8 1.9-2.8 1.9zm-4.7-.2c-.7.7-1.7 1-2.7 1-1.9 0-3-1.1-3-2.9 0-1.7 1-2.8 2.8-2.8.6 0 1.1.1 1.5.3v-1.4c0-.7-.4-1.1-1.3-1.1-.6 0-1.2.2-1.6.6l-1-.9c.7-.7 1.6-1.1 2.8-1.1 1.9 0 2.8 1 2.8 2.7v5.6zm-1.4-1.2v-1.7c-.4-.2-.8-.3-1.2-.3-.9 0-1.4.5-1.4 1.3 0 .8.5 1.4 1.3 1.4.5 0 1-.3 1.3-.7z" />
        </svg>
      )

    case 'react':
    case 'reactjs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        </svg>
      )

    case 'tailwindcss':
    case 'tailwind':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      )

    case 'html5':
    case 'html':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 2l1.8 18.2L12 22l7.2-1.8L21 2H3zm14.8 6.4h-7.8l.2 2.4h7.4l-.6 6.3-4.8 1.3-4.8-1.3-.3-3.6h2.2l.2 1.8 2.7.7 2.7-.7.3-3.1H7.8L7.2 4.6h11l-.4 3.8z" />
        </svg>
      )

    case 'css3':
    case 'css':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 2l1.8 18.2L12 22l7.2-1.8L21 2H3zm14.7 4.6l-.3 3.6h-7.6l.2 2.4h7.2l-.6 6.3-4.6 1.3-4.6-1.3-.3-3.6h2.2l.2 1.8 2.5.7 2.5-.7.3-3.1H7.4L6.8 4.6h10.9z" />
        </svg>
      )

    case 'nodejs':
    case 'node':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2zm6.7 13.8L12 19.6l-6.7-3.8V8.2L12 4.4l6.7 3.8v7.6z" />
          <path d="M11 8h2v8h-2z" />
        </svg>
      )

    case 'expressjs':
    case 'express':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 7h4v2H6v2h2v2H6v2h2v2H4V7zm6 0h2.5l1.5 3 1.5-3H18l-2.5 5 2.5 5h-2.5l-1.5-3-1.5 3H10l2.5-5L10 7zm9 0h1.8v10H19V7z" />
        </svg>
      )

    case 'mysql':
    case 'mariadb':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </svg>
      )

    case 'git':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.6 4.8l2.7 2.7c.6-.2 1.4 0 1.9.5.5.5.7 1.3.5 1.9l2.6 2.6c.6-.2 1.4 0 1.9.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.6-.6-.7-1.5-.4-2.1l-2.4-2.4v5.3c.3.2.5.5.6.8.4.8.1 1.8-.7 2.3-.8.4-1.8.1-2.3-.7-.4-.8-.1-1.8.7-2.3.3-.2.7-.3 1.1-.3V8.8c-.4 0-.8-.2-1.1-.3-.6-.3-1-.9-1-1.6l-2.6-2.6L2.4 10.9c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.5-8.5c.6-.6.6-1.5.1-2.1z" />
        </svg>
      )

    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3" />
        </svg>
      )

    case 'vscode':
    case 'visualstudiocode':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.6 2.1L8.3 10.4 3.7 7l-2.2 1.2v7.6L3.7 17l4.6-3.4 9.3 8.3 4.9-2.3V4.4l-4.9-2.3zm0 4.4v11l-7.3-5.5 7.3-5.5z" />
        </svg>
      )

    case 'postman':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V15h-2v1.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 11.93V13h2v-1.07l4.79-4.79c.58.13 1.17.21 1.79.21 4.08 0 7.44 3.05 7.93 7h-1.93v2h1.93c-.49 4.08-3.85 7.44-7.93 7.93z" />
        </svg>
      )

    case 'vercel':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 20h20L12 2z" />
        </svg>
      )

    case 'restapi':
    case 'api':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="6" rx="2" />
          <rect x="2" y="14" width="20" height="6" rx="2" />
          <path d="M6 7h.01M6 17h.01" />
        </svg>
      )

    case 'typescript':
    case 'ts':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm8.5 7.8H8.8v7.4H7.2v-7.4H4.5V9.4h7v1.4zm7.7 4.9c-.4.5-1.1.9-2.1.9-1.3 0-2.3-.7-2.3-2.1 0-1.4 1-2 2.2-2.3l.8-.2c.6-.1.9-.3.9-.7 0-.5-.4-.8-1.1-.8-.8 0-1.2.3-1.4.8l-1.3-.6c.4-.9 1.3-1.5 2.7-1.5 1.5 0 2.5.8 2.5 2.1 0 1.1-.7 1.8-2 2.1l-.8.2c-.6.2-.9.4-.9.8 0 .5.4.8 1.1.8.8 0 1.3-.4 1.6-.9l1.2.6z" />
        </svg>
      )

    case 'python':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.9 2c-3.5 0-3.3 1.5-3.3 1.5v1.6h6.7v1H5.4S2 5.8 2 9.3c0 3.6 3 3.4 3 3.4h1.8v-2.5s-.1-3 3-3h5.1s2.9-.1 2.9-2.9c0-2.8-2.5-2.3-5.9-2.3zm-1.8 1.4a.8.8 0 110 1.6.8.8 0 010-1.6zm2 18.6c3.5 0 3.3-1.5 3.3-1.5v-1.6H8.7v-1h9.9s3.4.3 3.4-3.2c0-3.6-3-3.4-3-3.4h-1.8v2.5s.1 3-3 3H9.1s-2.9.1-2.9 2.9c0 2.8 2.5 2.3 5.9 2.3zm1.8-1.4a.8.8 0 110-1.6.8.8 0 010 1.6z" />
        </svg>
      )

    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
  }
}

