// import Toaster from "./components/Helpers/Toaster";
// import Routers from "./Routers";
import Default from "./components/common/Default";
import Layout from "./components/common/layout";
import Saved from "./pages/Saved";


function App() {
  return (
      <Default>
          <>
          <Layout>
            <Saved />
          </Layout>
          </>
      </Default>
  );
}

export default App;
