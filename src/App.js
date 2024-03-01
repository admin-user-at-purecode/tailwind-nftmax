// import Toaster from "./components/Helpers/Toaster";
// import Routers from "./Routers";
import Default from "./components/common/Default";
import Layout from "./components/common/layout";
import Settings from "./pages/Settings";


function App() {
  return (
      <Default>
          <>
            <Layout>
              <Settings />
            </Layout>
          </>
      </Default>
  );
}

export default App;
