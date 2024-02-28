// import Toaster from "./components/Helpers/Toaster";
// import Routers from "./Routers";
import Default from "./components/common/Default";
import Layout from "./components/common/layout";
import MarketPlace from "./pages/MarketPlace"


function App() {
  return (
      <Default>
          <>
          <Layout>
            <MarketPlace />
          </Layout>
          </>
      </Default>
  );
}

export default App;
