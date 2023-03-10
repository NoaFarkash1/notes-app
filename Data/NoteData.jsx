
import React, { createContext } from "react";
import { useState } from "react";

export const NotesContext = createContext();
export default function NoteContextProvider({ children }) {

  const InitNotesContext = [ 
    {
        "id": 1,
        "title": "Note 1",
        "description":"Do presentation",
        "category":"Work"
      },
      {
        "id": 2,
        "title": "Note 2",
        "description":"Call Noa",
        "category":"Work"

      }, 
     {
        "id": 3,
        "title": "Note 3",
        "description":"Call Yarden",
        "category":"Work"

      },
      {
        "id": 4,
        "title": "Note 4",
        "description":"Send Email",
        "category":"Personal"

      }
]


  const [notesArrContext, SetNotesArrContext] = useState(InitNotesContext);
  const InitCategoryArrContext = [ "Work", "Personal", "Ideas","Lists"]
  const [CategoryArrContext, SetCategoryArrContext] = useState(InitCategoryArrContext)
  const [currentCat, setCurrentCat] = useState("")

  const values = {
    CategoryArrContext,
    notesArrContext,
    SetCategoryArrContext,
    SetNotesArrContext,
    currentCat,
    setCurrentCat
  }

  return (
      <NotesContext.Provider value={values}>
          {children}
      </NotesContext.Provider>
  )

}


