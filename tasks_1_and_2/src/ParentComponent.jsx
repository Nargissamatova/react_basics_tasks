import BasicComponent from "./BasicComponent";

function ParentComponent() {
  return (
    <div>
      <h2>This is a parent component</h2>
      <BasicComponent />
    </div>
  );
}

export default ParentComponent;
