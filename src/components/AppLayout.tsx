import Navigation from "./Navigation";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <h1 className="text-2xl font-bold mb-4 text-left">Welcome to Friendly</h1>
        <p className="text-left">Start managing your connections today!</p>
      </main>
    </div>
  );
};

export default AppLayout;