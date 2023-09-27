import Navbar from "./components/Navbar";
import StatsTotal from "./components/StatsTotal";
import StatsToday from "./components/StatsToday";
import StatsProvider from "./context/StatsProvider";

function App() {
  return (
    <StatsProvider>
      <div className="min-h-screen bg-neutral-lightTheme-white dark:bg-neutral-darkTheme-veryDarkBlueBg">
        <Navbar />
        <StatsTotal />
        <StatsToday />
      </div>
    </StatsProvider>
  );
}

export default App;
