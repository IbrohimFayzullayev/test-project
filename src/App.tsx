import Header from "./components/header";
import Hero from "./components/hero";
import Info from "./components/info";
import ApplicationForm from "./components/application.form";
import ParticipantsTable from "./components/participants.table";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [counts, setCounts] = useState<CountProps[]>([]);

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
        setCategories(data1);
        setUsers(data2);
        setCounts(data3);
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
      <div className="mt-10 md:mt-20 mb-10 md:mb-20">
        <Info />
      </div>
      <div className="mb-10">
        <ApplicationForm
          categories={categories}
          counts={counts}
          users={users}
          setCounts={setCounts}
        />
      </div>
      <div className="pb-16">
        <ParticipantsTable
          categories={categories}
          counts={counts}
          users={users}
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
