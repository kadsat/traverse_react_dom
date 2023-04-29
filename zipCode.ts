function traverseComponent(component) {
  // Base case: if the component has no children, return an empty object
  if (!component.props.children) {
    return {};
  }

  // Recursive case: traverse the child components and construct the output object
  let outputObject = {};

  React.Children.forEach(component.props.children, child => {
    if (typeof child.type === "string") {
      // If the child is an HTML element, skip it
      return;
    }

    // Traverse the child component and add its state to the output object
    const childOutput = traverseComponent(child);
    outputObject[child.type.name] = childOutput;
  });

  // Add the component's own state to the output object
  if (component.state) {
    outputObject.state = component.state;
  }

  return outputObject;
}


function ParentComponent() {
  const [parentState, setParentState] = useState("");

  function handleInputChange(event) {
    setParentState(event.target.value);
  }

  return (
    <div>
      <ChildComponent />
      <input type="text" value={parentState} onChange={handleInputChange} />
      <pre>{JSON.stringify(traverseComponent(this), null, 2)}</pre>
    </div>
  );
}
