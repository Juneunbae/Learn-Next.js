import "@/styles/globals.css";
import Link from "next/link";
import Layout from "@/layouts/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // <div>
    //   <div>
    //     <nav>
    //       <Link href={"/home"}>Home</Link> | <Link href={"/login"}>Login</Link>
    //     </nav>
    //   </div>
    //   <Component {...pageProps} />
    // </div>
  );
}
