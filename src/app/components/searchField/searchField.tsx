import { IconButton, InputBase, makeStyles, Typography } from "@material-ui/core";
import { Search } from '@material-ui/icons'
import { useEffect, useRef, useState } from "react";

const useStyles = makeStyles(theme => ({
    inputWrap: {
        borderBottom: "2px solid",
        borderColor: "theme.palette.text.secondary",
        width: 200,
        display: 'flex',
        justifyContent: 'space-between',
        transition: 'border-color 300ms ,width 0.5s',
        // borderColor: theme.palette.text.secondary
        '&:hover': {
            borderColor: theme.palette.info.main,
            cursor: 'text'
        },
    },
    active: { width: 300 }
}))

const SearchField = (props: any) => {

    const [inFocus, setFocus] = useState(false)
    const [value, setValue] = useState("Tel Aviv")

    const inputRef = useRef<HTMLInputElement>()

    const classes = useStyles()

    useEffect(() => {
        if (inFocus) {
            inputRef.current?.click()
        }
    }, [inFocus])

    return (
        <div onClick={() => { setFocus(true) }} {...props} className={`${classes.inputWrap} ${inFocus && classes.active}`}>

            {
                inFocus ?
                    <InputBase
                        ref={inputRef}
                        onBlur={() => { setFocus(false) }}
                    /> :
                    <Typography variant="h4">{value}</Typography>

            }
            <IconButton type="submit" aria-label="search">
                <Search />
            </IconButton>
        </div>
    )
}

export default SearchField
