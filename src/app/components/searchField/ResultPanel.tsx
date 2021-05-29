import { ClickAwayListener, Collapse, List, ListItem, ListItemText, makeStyles } from "@material-ui/core"
import React, { useEffect, useRef, useState } from "react"

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
    },
}))

type SelectOption = {
    title: string
    value: any
}

type Props = {
    options: SelectOption[]
    setValue: (newValue: SelectOption) => void
    clickAwayHandler: (e: React.MouseEvent<Document, MouseEvent>) => void
}

const ResultPanel: React.FC<Props> = (props) => {

    const { options, setValue, clickAwayHandler } = props

    const classes = useStyles()
    const [selected, setSelected] = useState<number | null>(null)
    const optionRef = useRef<HTMLLIElement[] | null[]>([])

    const handleKeyDown = (e: KeyboardEvent, selectedRef: any) => {
        switch (e.key) {
            case "ArrowDown":
                setSelected((state) => (
                    (state !== null && !(state > options.length - 2))
                        ? (state + 1)
                        : 0
                ))
                break;
            case "ArrowUp":
                setSelected((state) => (
                    (state !== null && !(state < 1))
                        ? (state - 1)
                        : options.length - 1
                ))
                break;
            case "Enter":
                setValue(options[selectedRef])
                break;
        }
    }

    useEffect(() => {
        window.onkeydown = (e: KeyboardEvent) => { handleKeyDown(e, selected) }
        return () => { window.onkeydown = null }
    }, [selected])

    useEffect(() => {
        if (selected != null) {
            const selectedElRef = optionRef.current[selected]
            selectedElRef?.focus({ preventScroll: false })
            selectedElRef?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }, [selected])

    return (
        <div className={classes.resultsPanelWrap}>
            <ClickAwayListener onClickAway={clickAwayHandler}>
                <Collapse in={Boolean(options.length)} className={classes.resultsPanel}>
                    <List className={classes.resultsList} onMouseLeave={() => { setSelected(null) }}>
                        {options?.map((o, i) => (
                            <ListItem
                                selected={selected == i}
                                key={i}
                                ref={el => optionRef.current[i] = el}
                                onMouseEnter={() => { setSelected(i) }}
                                onClick={() => { setValue(o) }}>
                                <ListItemText primary={o.title} />
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
            </ClickAwayListener>
        </div>
    )
}

export default ResultPanel