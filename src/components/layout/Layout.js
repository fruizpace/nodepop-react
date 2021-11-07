import Header from "./Header";

function Layout({ children, title, ...props }) {
  return (
    <div className="layout">
      <Header className="layout-header" {...props} />
      <main className="layout-main">
        <h2 className="layout-title">{title}</h2>
        <section className="layout-content">{children}</section>
      </main>
      <footer className="footer"> KeepCoding - 2021</footer>
    </div>
  );
}

export default Layout;
