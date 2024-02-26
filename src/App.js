// import Toaster from "./components/Helpers/Toaster";
// import Routers from "./Routers";
import Default from "./components/common/Default";
import Layout from "./components/common/layout";
import Home from "./pages/Home";


function App() {
  return (
      <Default>
          <>
          <Layout>
            <Home />
          </Layout>
          </>
      </Default>
  );
}

export default App;
