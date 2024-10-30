const TabContent = (...props) => {
  const {title, code, description} = props[0]
  
  return (
    <div id="tab-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default TabContent;
