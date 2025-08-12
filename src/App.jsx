import { Toaster } from "react-hot-toast";

import { Header, Footer, ThemeSwitch } from "@/components";
import {
  About,
  Contact,
  Experience,
  Intro,
  Projects,
  SectionDivider,
  Skills,
} from "@/components";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 text-gray-950 relative pt-28 sm:pt-36">
      {/* bg blur effect */}
      <div className="bg-[#fbe2e3] dark:bg-[#946263] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
      <div className="bg-[#dbd7fb] dark:bg-[#676394] absolute top-[-1rem] -z-10 left-[-35rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />

      {/* theme context provider */}
      <ThemeContextProvider>
        {/* active section context provider */}
        <ActiveSectionContextProvider>
          {/* header */}
          <Header />
          
          {/* main content */}
          <main className="flex flex-col items-center px-4">
            <Intro />
            <SectionDivider />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </main>

          {/* footer */}
          <Footer />

          {/* toaster */}
          <aside>
            <Toaster
              position="top-right"
              toastOptions={{
                className: "dark:bg-white/10 dark:text-white/80",
              }}
            />
          </aside>

          {/* theme switcher */}
          <aside>
            <ThemeSwitch />
          </aside>
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;