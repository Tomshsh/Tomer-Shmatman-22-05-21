import { Collapse, List, ListItem, ListItemText, makeStyles } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles(theme => ({
    resultsPanelWrap: {
        position: "relative",
        width: 300
    },
    resultsPanel: {
        position: "absolute",
        border: "1px solid",
        borderRadius: 3,
        overflow: "hidden"
    },
    resultsList: {
        width: 300,
        maxHeight: 300,
        overflowY: "scroll",
        backgroundColor: theme.palette.background.paper,
    }
}))

type SelectOption = {
    title: string
    value: any
}

type Props = {
    options: SelectOption[]
    setValue: (option: SelectOption) => void
}

const ResultPanel: React.FC<Props> = (props) => {

    const {options, setValue} = props

    const classes = useStyles()

    return (
        <div className={classes.resultsPanelWrap}>
            <Collapse in={Boolean(options.length)} className={classes.resultsPanel}>
                <List className={classes.resultsList}>
                    {options?.map((o, i) => (
                        <ListItem button key={i} onClick={() => { setValue(o) }}>
                            <ListItemText primary={o.title} />
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </div>
    )
}

export default ResultPanel