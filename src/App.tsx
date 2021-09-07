import Background from "./components/background/Background";
import Container from "./components/container/Container";
import Form from "./components/form/Form";
import NavBar from "./components/navbar/NavBar";



function App() {
  return (

    <div className="h-screen w-screen bg-blue-400 flex">
      <Background />

      <NavBar />

      <Container />
    </div>

  );
}

export default App;
