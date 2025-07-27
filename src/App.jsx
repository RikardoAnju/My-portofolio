import DataImage from "./data";

const App = () => {
  return (
    <>
      <div className="hero grid grid-cols-2">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src="/assets/hero-img.webp" alt="Hero Image" className="w-10 rounded-md" />
            <q>Hallo semuanya</q>
          </div>
        </div>
        <img src="/assets/hero-img.webp" alt="Hero Image" className="w-[500px] h-[600px] "
        />
      </div>
    </>
  );
};

export default App;