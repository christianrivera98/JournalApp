import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/JournalSlice";


export const SideBarItem = ({title='', body, id, date, imageUrls = []}) => {

    const newTitle = useMemo(() => {
        return title.length > 17 ? title.substring(0,17) + '...' : title;
    },[title]) 

    const dispatch = useDispatch();

    const onNote = () => {
        dispatch(setActiveNote({title, body, id, date, imageUrls}));
    }
  return (
    <ListItem   disablePadding>
      <ListItemButton onClick={onNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
