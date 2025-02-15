import Header from "./components/header";
import Hero from "./components/hero";
import Info from "./components/info";
import ApplicationForm from "./components/application.form";
import ParticipantsTable from "./components/participants.table";
import Footer from "./components/footer";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const fetchingData = async () => {
      try {
        const promise1 = fetch(
          "https://python-api-task.onrender.com/categories"
        );
        const promise2 = fetch("https://python-api-task.onrender.com/users");
        const promise3 = fetch("https://python-api-task.onrender.com/counts");

        const [response1, response2, response3] = await Promise.all([
          promise1,
          promise2,
          promise3,
        ]);

        const [data1, data2, data3] = await Promise.all([
          response1.json(),
          response2.json(),
          response3.json(),
        ]);

        // Use the data
        console.log("Data from endpoint1:", data1);
        console.log("Data from endpoint2:", data2);
        console.log("Data from endpoint3:", data3);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchingData();
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <div className="mt-20 mb-20">
        <Info />
      </div>
      <div className="mb-10">
        <ApplicationForm />
      </div>
      <div className="mt-10">
        <ParticipantsTable />
      </div>
      <Footer />
    </>
  );
};

export default App;
