import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Link href={{
        pathname: "/[username]",
        query: { username: "pat234" }
      }}>
        <a>Pat's profile</a>
      </Link>
    </div>
  )
}

export default Home;
