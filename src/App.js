// import Toaster from "./components/Helpers/Toaster";
// import Routers from "./Routers";
import Default from "./components/common/Default";
import Layout from "./components/common/layout";
import History from "./pages/History";


function App() {
  return (
      <Default>
          <>
          <Layout>
            <History/>
          </Layout>
          </>
      </Default>
  );
}

export default App;
