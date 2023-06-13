import { Navbar, Welcome, Footer, Services, News } from "./components";


const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <News />
    <Footer />
  </div>
);

export default App
