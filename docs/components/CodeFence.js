import { useEffect, useRef, useState } from 'react';
import copy from 'copy-to-clipboard';
import PrismHighlight, { Prism } from 'prism-react-renderer';
// import theme from 'prism-react-renderer/themes/dracula';

import { Icon } from './Icon';

export const CodeFence = ({ children, language }) => {
  return (
    <Wrapper>
      {preRef => (
        <PrismHighlight Prism={Prism} code={removeEmptyLine(children)} language={language}>
          {({ className, tokens, getLineProps, getTokenProps }) => (
            <pre ref={preRef} className={className}>
              <code>
                {tokens.map((line, key) => {
                  return (
                    <div {...getLineProps({ line, key })}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  );
                })}
              </code>
            </pre>
          )}
        </PrismHighlight>
      )}
    </Wrapper>
  );
};

const Wrapper = ({ children }) => {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const preEl = ref.current;

    if (preEl && copied) {
      copy(preEl.innerText);
      const to = setTimeout(setCopied, 1000, false);
      return () => clearTimeout(to);
    }
  }, [copied]);

  return (
    <div className="code-block" aria-live="polite">
      {children(ref)}
      <button
        className="copy-btn"
        onClick={() => setCopied(true)}
        aria-label={copied ? 'copied' : 'copy'}
      >
        <Icon icon={copied ? 'copied' : 'copy'} />
      </button>
      <style jsx>{`
        .code-block {
          margin-block: var(--vertical-rhythm-prominent);
          min-width: 0;
          position: relative;
        }
        .copy-btn {
          align-items: center;
          background: var(--surface);
          border-radius: var(--radii-small);
          color: var(--text-muted);
          display: flex;
          font-size: 0.9rem;
          height: 1.5rem;
          justify-content: center;
          opacity: 0;
          position: absolute;
          right: 0.75rem;
          top: 0.75rem;
          transition: opacity 100ms linear;
        }
        .code-block:hover .copy-btn {
          opacity: 1;
        }
        .copy-btn:hover {
          color: var(--text);
        }
        .copy-btn:active {
          background: var(--surface-prominent);
        }

        /* join callouts */
        :global(.callout) + .code-block::before {
          content: '';
          height: 0.8rem;
          width: 1px;
          background: var(--border-prominent);
          position: absolute;
          top: -1rem;
          left: calc(0.8rem - 1px);
        }
      `}</style>
    </div>
  );
};

// Prism or Markdoc is adding an empty line at the end of each snippet...
function removeEmptyLine(str) {
  return str.replace(/\n$/, '');
}
