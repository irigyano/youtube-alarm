import Clock from "./components/Clock";
import YoutubeFrame from "./components/YoutubeFrame";

function youtubeRedirect(url: string) {
  window.location.replace(url);
}

function App() {
  return (
    <div className="bg-zinc-800 min-h-screen flex flex-col px-[10%] lg:px-[30%] py-10">
      <YoutubeFrame />
      <Clock />
    </div>
  );
}

export default App;
