const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="bg-slate-900 w-full p-5 text-center text-white">
        هدر تست
      </header>
      <main className="my-10">{children}</main>
      <footer className="bg-slate-600 w-full p-5 text-center text-white absolute bottom-0 left-0">
        فوتر تست
      </footer>
    </>
  );
};

export default Layout;
