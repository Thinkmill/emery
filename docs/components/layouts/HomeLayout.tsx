import { LayoutProps } from './types';

export const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <div className="home">
      {children}
      <style jsx>{`
        .home :global(article) {
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
};
