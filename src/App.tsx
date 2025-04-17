import { react } from "./assets";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="pt-5">
        <h1 className="text-3xl text-shadow text-center text-primary font-[poppins] font-extrabold ">
          Hello world!
        </h1>
        <img src={react} alt="" />
      </div>
    </main>
  );
}

export default App;
