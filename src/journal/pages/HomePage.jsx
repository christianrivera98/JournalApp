import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views/NothingSelectedView'
import { NoteView } from '../views/NoteView'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal/JournalThunks'

export const HomePage = () => {
  
  const dispatch = useDispatch();

  const { isSaving, active } = useSelector( state => state.journal );



  const  onNewNote  = () =>{
    dispatch(startNewNote());
  }
  
  return (


    <>
    <JournalLayout>
    {
        (!!active)
          ? <NoteView />
          : <NothingSelectedView />
      }

    <IconButton
    onClick={onNewNote}
    disabled = {isSaving}
      size='large'
      sx={{
        color: '#84b6f4',
        backgroundColor: 'white',
        ':hover':{backgroundColor: 'white', opacity: 0.9},
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
    >
      <AddOutlined sx={{fontSize: 30}}/>

    </IconButton>

    </JournalLayout>
      
    </>
  )
}
