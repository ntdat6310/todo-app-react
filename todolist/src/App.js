import Control from "./components/Control";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  return (
    <div className="page-container">
      <div className="page-content">
        <Header />
        <Control />
        <Table />
        {/* POPUP: START */}
        {/* POPUP: END */}
      </div>
    </div>
  );
}

export default App;
