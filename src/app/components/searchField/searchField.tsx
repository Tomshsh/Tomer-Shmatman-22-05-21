import { Button, CircularProgress, Collapse, IconButton, InputBase, List, ListItem, ListItemText, makeStyles, Typography } from "@material-ui/core";
import { Search } from '@material-ui/icons'
import { Autocomplete } from "@material-ui/lab";
import { AxiosResponse } from "axios";
import { useEffect, useRef, useState } from "react";
import ResultPanel from "./ResultPanel";

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
    const [value, setValue] = useState<SelectOption>({title:"Tel Aviv", value:{}})
    const [options, setOptions] = useState<SelectOption[]>([])
    const [loading, setLoading] = useState(false)

    const search = () => {
        setLoading(true)
        Promise.resolve(searchFunction())
            .then((options) => {
                setOptions(options)
                setLoading(false)
            }, (error) => { })
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
                        /> : <Typography variant="h4">{value.title}</Typography>
                }
                {
                    !loading ?
                        <IconButton
                            onClick={() => { search() }} aria-label="search">
                            <Search />
                        </IconButton> : <CircularProgress />
                }
            </div>
            <ResultPanel options={options} setValue={setValue}/>
            
        </>
    )
}

export default SearchField
