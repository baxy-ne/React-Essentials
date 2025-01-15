import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {CORE_CONCEPTS.map((core__concept, index) => (
          <CoreConcept {...core__concept} key={index} />
        ))}
      </ul>
    </section>
  );
}
