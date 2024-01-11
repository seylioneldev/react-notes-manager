
import { useEffect } from "react";
import {Header} from "./components/Header/Header"

import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNoteList } from "store/note/note-slice";
import { NoteAPI } from "api/note-api";

export function App() {

  const dispatch = useDispatch()


  async function fetchAllNotes(){
    const noteList = await NoteAPI.fetchAll()
    dispatch(setNoteList(noteList))
  }

  useEffect(()=>{
    fetchAllNotes()
  }, [])


  return(
    <div>
    <Header></Header>
    <Outlet/>
    </div>
  )
}
