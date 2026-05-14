const FullScreenLoader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-accent" />
  </div>
);

export default FullScreenLoader;
