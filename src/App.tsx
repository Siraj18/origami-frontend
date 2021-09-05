import Background from "./components/background/Background";
import Form from "./components/form/Form";
import NavBar from "./components/navbar/NavBar";



function App() {
  return (

    <div className="h-screen w-screen bg-blue-400 flex">
      <Background />

      <NavBar />
      <Form />
    </div>

  );
}

export default App;
