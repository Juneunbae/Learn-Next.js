import "@/styles/globals.css";
import Link from "next/dist/client/link";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <div>
        <nav>
          <Link href={"/home"}>Home</Link>|<Link href={"/login"}>Login</Link>
        </nav>
      </div>
      <Component {...pageProps} />
    </div>
  );
}
