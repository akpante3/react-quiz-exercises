import { useState } from "react";
import "./App.css";



/** QUESTION: Implement the ImageGallery component that accepts a links prop and renders the gallery 
 * described above so that the first item in the links prop is the src attribute of the first image in the gallery. 
 * It should also implement the following logic: When the button is clicked, the image 
 * that is in the same div as the button should be removed from the gallery. */




const ImageGallery = ({ links, handleButtonClick }) => {
  return links.map((link) => (
    <div key={link}>
      <div className="image">
        <img alt="link" src={link} />
        <button onClick={() => handleButtonClick(link)} class="remove">
          X
        </button>
      </div>
    </div>
  ));
};

function App() {
  let links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj"];
  const [linksUrl, setlinksUrl] = useState(links);

  const removeLink = (link) => {
    let updatedList = linksUrl.filter((image) => link !== image);
    setlinksUrl(updatedList);
  };

  return (
    <div className="App">
      <ImageGallery links={linksUrl} handleButtonClick={removeLink} />
    </div>
  );
}

export default App;
