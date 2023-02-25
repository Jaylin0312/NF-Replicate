import JobCardContainer from "./components/JobCard/JobCardContainer";
import Desc from "./components/JobDesc/JobDescContainer";

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <div className="lg:flex">
          <JobCardContainer />
          <div className="hidden lg:block px-[10px] py-[5px] sticky grow">
            <Desc />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
