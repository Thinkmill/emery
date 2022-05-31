export default function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1 className="page-not-found-title">404</h1>
      <h2 className="page-not-found-subtitle">This page could not be found.</h2>
      <style jsx>{`
        .page-not-found {
          align-items: center;
          justify-content: center;
          display: flex;
          height: calc(100vh - var(--header-height));
        }
        .page-not-found-subtitle {
          color: var(--text-muted);
          font-size: var(--fs-medium);
          font-weight: var(--fw-normal);
        }
        @media screen and (max-width: 600px) {
          .page-not-found {
            flex-direction: column;
          }
        }
        @media screen and (min-width: 601px) {
          .page-not-found-title {
            border-right: 1px solid var(--border);
            margin-right: var(--gutter-small);
            padding-right: var(--gutter-small);
          }
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  return { props: { is404: true } };
}
