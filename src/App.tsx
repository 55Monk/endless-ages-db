import WebsiteContent from "./components/WebsiteContent";
import WebsiteHeader from "./components/WebsiteHeader/WebsiteHeader";

function App() {
  return (
    <div className="flex h-full w-full flex-col">
      <WebsiteHeader />
      <WebsiteContent />
    </div>
  );
}

export default App;
