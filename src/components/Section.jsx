import { useState } from "react";

export default function Section( { sectionname, editing, onClose, onShow } ) {
  const [text, setText] = useState("");

  // Return an "editing mode" or "normal mode" based on editing prop
  if (!editing) {
    return (
    <>
        <p>{sectionname}</p>
        <p>{text}</p>
        <button type="button" onClick={onShow}>Edit</button>
    </>
    )
  }
  return (
    <>
      <label for="">{sectionname}</label>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="button" onClick={onClose}>Done</button>
    </>
  )
}
