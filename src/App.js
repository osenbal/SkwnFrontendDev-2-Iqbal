import Home from "./pages";
import MainLayout from "./layout/main.layout";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
}

export default App;
