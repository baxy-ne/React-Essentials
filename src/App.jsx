import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{selectedTopic.title}</h3>
        <p>{selectedTopic.description}</p>
        <pre>
          <code>{selectedTopic.code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((core__concept, index) => (
              <CoreConcept {...core__concept} key={index} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {EXAMPLES.map((example, index) => (
              <TabButton key={index} onSelect={() => handleSelect(example)}>
                {example.title}
              </TabButton>
            ))}
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
