import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "../components/TabButton.jsx";
import TabContent from "../components/TabContent.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <Section id="examples" title="Examples">
      <menu>
        {EXAMPLES.map((example, index) => (
          <TabButton
            isSelected={selectedTopic.title === example.title}
            key={index}
            onClick={() => handleSelect(example)}
          >
            {example.title}
          </TabButton>
        ))}
      </menu>
      <Tabs>
        {selectedTopic ? (
          <TabContent
            title={selectedTopic.title}
            description={selectedTopic.description}
            code={selectedTopic.code}
          />
        ) : (
          <p>Please select a topic.</p>
        )}
      </Tabs>
    </Section>
  );
}
