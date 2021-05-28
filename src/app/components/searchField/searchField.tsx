import { Button, IconButton, InputBase, makeStyles, Typography } from "@material-ui/core";
import { Search } from '@material-ui/icons'
import { Autocomplete } from "@material-ui/lab";
import { AxiosResponse } from "axios";
import { useEffect, useRef, useState } from "react";

const useStyles = makeStyles(theme => ({
    inputWrap: {
        borderBottom: "2px solid",
        borderColor: "theme.palette.text.secondary",
        width: 200,
        display: 'flex',
        justifyContent: 'space-between',
        transition: 'border-color 300ms ,width 0.5s',
        '&:hover': {
            borderColor: theme.palette.info.main,
            cursor: 'text'
        },
    },
    active: {
        width: 300
    },
    resultsPanelWrap: {
        position: "relative",
        width: 300
    },
    resultsPanel: {
        position: "absolute",
        width: "inherit",
        maxHeight: 300,
        overflowY: "scroll",
    }
}))


type SelectOption = {
    title: string
    value: any
}

type Props = {
    onChange: (text: string) => void
    searchFunction: () => Promise<SelectOption[]> | SelectOption[]
}

const SearchField: React.FC<Props> = (props) => {
    const { searchFunction, onChange } = props

    const [inFocus, setFocus] = useState(false)
    const [value, setValue] = useState("Tel Aviv")
    const [options, setOptions] = useState<SelectOption[]>()

    const search = () => {
        // Promise.resolve(searchFunction())
        //     .then((options) => {
        //         setOptions(options)
        //     }, (error) => { })
    }

    const inputRef = useRef<HTMLInputElement>()

    const classes = useStyles()

    const handleFocus: React.MouseEventHandler = (e) => {
        if (!inFocus) {
            setFocus(true)
        }
    }

    const handleBlur: React.FocusEventHandler = e => {
        //@ts-ignore
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setFocus(false)
        }
    }

    useEffect(() => {
        if (inFocus) { inputRef.current?.click() }
    }, [inFocus])

    return (

        <>
            <div onClick={handleFocus} onBlur={handleBlur} className={`${classes.inputWrap} ${inFocus && classes.active}`}>

                {
                    inFocus ?
                        < InputBase
                            ref={inputRef}
                            onChange={(e) => { onChange(e.target.value) }}
                        /> : <Typography variant="h4">{value}</Typography>
                }
                <IconButton
                    onClick={() => { search() }} aria-label="search">
                    <Search />
                </IconButton>
            </div>
            <div hidden={!inFocus} className={classes.resultsPanelWrap}>
                <div className={classes.resultsPanel}>
                    {options=> }
                </div>
            </div>
        </>
    )
}

export default SearchField
