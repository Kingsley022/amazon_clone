<!-- apiip_key = 1704c6da-72ca-4776-9fba-0f14a1ea1931; -->

import React, { useState, useRef } from "react";
import "./styles.css";

function App() {
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    const newScrollLeft = scrollRef.current.scrollLeft + scrollOffset;
    setScrollLeft(newScrollLeft);
    scrollRef.current.scrollLeft = newScrollLeft;
  };

  return (
    <div className="container">
      <div className="scroll" ref={scrollRef}>
        {/* Your scrollable content */}
      </div>
      <div className="button-container">
        <button onClick={() => handleScroll(-100)}>{"<"}</button>
        <button onClick={() => handleScroll(100)}>{">"}</button>
      </div>
    </div>
  );
}

export default App;
In this example, we create a container div that holds both the scrollable content and the button container. The scrollRef ref is used to reference the scrollable content element in the handleScroll function.

The handleScroll function takes a scrollOffset argument that represents the amount to scroll by. The function updates the scrollLeft state with the new scroll position and sets the scrollLeft property of the scrollRef element to the new position.

Finally, we create a button container with two buttons that call the handleScroll function with either a positive or negative value to scroll the content left or right.

The CSS for this example might look something like this:

css
Copy code
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: scroll;
  width: 100%;
  height: 300px;
}

.scroll {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1000px;
}

.button-container {
  display: flex;
  flex-direction: row;
}

button {
  background-color: transparent;
  border: none;
  font-size: 24px;
  margin: 0 8px;
}
In this CSS, we set the container element to have overflow-x: scroll to create a horizontal scrollbar and set a fixed height. The scroll class is used to hold the scrollable content and has a fixed width. The button-container class is used to hold the two buttons, and the button class styles the buttons.




