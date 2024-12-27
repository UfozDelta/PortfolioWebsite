import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Header/>
      <div id="About">
        <About />
      </div>
      <div id='Projects'>
        <Projects />
      </div>
      <div id='Contact'>
        <Contact />
      </div>
    </div>
  );
}