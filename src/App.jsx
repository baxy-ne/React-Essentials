import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  useState("Please click a Button");

  let tabContent = "Please click a Button";

  function handleSelect(selectedButton) {
    tabContent = selectedButton;
    console.log(tabContent);
  }

  console.log("aoo components loaded");

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
