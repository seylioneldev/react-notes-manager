import { TextCard } from 'components/TextCard/TextCard'
import s from './style.module.css'

export function NoteBrowse({}){
    return(
        <>
        <TextCard 
        title= "test"
        subtitle= "test"
        content= 'qfsqdef'
        onClickTrash= {()=>{alert("click trash")}}
        onClick={()=>{alert("click note")}}
        ></TextCard>
        </>
        )}