import SideBar from "./components/sideBar/sideBar";
import ViewsPage from "./pages/views";

function App() {
  return (
    <div className="grid grid-cols-[64px_1fr] grid-rows-1 h-screen w-screen">
      <SideBar />
      <ViewsPage />
    </div>
  );
}

export default App;
