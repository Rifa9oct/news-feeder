import Footer from "../Pages/Footer/Footer";
import Header from "../Pages/Header/Header";
import Navbar from "../Pages/Navbar/Navbar";
import News from "../Pages/News/News";
import useNewsQuery from "../hooks/useNewsQuery";

const Root = () => {
  const { loading } = useNewsQuery()
  return (
    <>
      {
        loading ? <p className="flex justify-center items-center h-screen">loading news data...</p> : (
          <div>
            <div className="border-b border-black py-6 md:py-8">
              <Header />
              <Navbar />
            </div>
            <News />
            <Footer />
          </div>
        )
      }
    </>
  );
};

export default Root;
