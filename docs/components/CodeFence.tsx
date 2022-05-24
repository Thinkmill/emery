import { useEffect, useRef, useState } from 'react';
import copy from 'copy-to-clipboard';
import PrismHighlight, { Prism, Language } from 'prism-react-renderer';
// import theme from 'prism-react-renderer/themes/dracula';

import { Icon } from './Icon';

type CodeFenceProps = { children: string; language: Language };

export const CodeFence = ({ children, language }: CodeFenceProps) => {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLPreElement>(null);

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
      <PrismHighlight Prism={Prism} code={removeEmptyLine(children)} language={language}>
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <pre ref={ref} className={className}>
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
      <button onClick={() => setCopied(true)} aria-label="Copy snippet">
        <Icon icon={copied ? 'copied' : 'copy'} />
      </button>
    </div>
  );
};

// Prism or Markdoc is adding an empty line at the end of each snippet...
function removeEmptyLine(str: string) {
  return str.replace(/\n$/, '');
}
