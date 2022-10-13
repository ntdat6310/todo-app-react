import Control from "../components/Control";
import Header from "../components/Header";
import Table from "../components/Table";
import "../styles/home.css";

function Home() {
  return (
    <div className="page-container">
      <div className="page-content">
        <Header />
        <Control />
        <Table />
      </div>
    </div>
  );
}
export default Home;
