import type { NextPage } from "next";
import Link from "next/link";
import Loader from "../components/Loader/Loader.component";

const Home: NextPage = () => {
  return (
    <div>
      <Link href={{
        pathname: "/[username]",
        query: { username: "pat234" }
      }}>
        <a>Pat's profile</a>
      </Link>
      <Loader show />
    </div>
  )
}

export default Home;
