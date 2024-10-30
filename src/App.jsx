import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import TabContent from "./components/ad.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
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
          {selectedTopic ? (
            <TabContent
              title={selectedTopic.title}
              description={selectedTopic.description}
              code={selectedTopic.code}
              testProp="DASStestPropDD"
            />
          ) : (
            <p>Please select a topic.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
