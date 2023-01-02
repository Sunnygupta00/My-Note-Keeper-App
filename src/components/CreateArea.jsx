import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
function CreateArea(props) {
  //Taking Input from user
  const [area, createArea] = useState({
    title: "",
    content: ""
  });
  function areaChange(event) {
    const { value, name } = event.target;
    // console.log(value);
    // console.log(name);
    // console.log(event.target);
    createArea((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
    // console.log(area);
  }
  return (
    <div>
      <form>
        <input
          onChange={areaChange}
          // value={area}
          name="title"
          value={area.title}
          placeholder="Title"
        />
        <textarea
          onChange={areaChange}
          name="content"
          value={area.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.onAdd(area);
            // After clicking button doing input empty
            createArea({
              title: "",
              content: ""
            });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
