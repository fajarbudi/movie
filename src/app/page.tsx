import Navbar from "./component/navbar";
import Popular from "./component/popular";
import TopRated from "./component/topRated";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <Navbar bg="backdrop-blur-sm bg-primary/80" position="sticky" />
        <section id="Popular">
          <Link href="/Popular/1">
            <h1
              data-aos="fade-left"
              data-aos-anchor-placement="bottom-bottom"
              className="bg-primary ml-auto mr-20 text-center w-24 mt-10 rounded-lg shadow-md hover:bg-indigo-500"
            >
              Popular {">>"}
            </h1>
          </Link>
          <div className="mt-2 flex flex-wrap justify-center gap-5 ">
            <Popular />
          </div>
        </section>
        <section id="TopRated">
          <Link href="TopRated/1">
            <h1
              data-aos="fade-left"
              data-aos-anchor-placement="bottom-bottom"
              className="ml-auto mr-20 text-center mt-10 bg-primary w-24 rounded-lg shadow-md hover:bg-indigo-500"
            >
              Top Rated {">>"}
            </h1>
          </Link>
          <div className=" mt-2 flex flex-wrap justify-center gap-5 mb-4">
            <TopRated />
          </div>
        </section>
      </main>
    </>
  );
}
