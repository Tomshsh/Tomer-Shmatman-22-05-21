import { Dialog, DialogActions, DialogTitle } from '@material-ui/core'
import React from 'react'

type Props = {
    title: string,
    open: boolean,
    actions: React.ReactNode,
    onClose: () => void
}

const ConfirmDialog: React.FC<Props> = (props) => {

    const { title, open, actions, onClose } = props



    return (
        <Dialog
            aria-labelledby="confirm-dial-title"
            maxWidth="xs"
            open={open}
            onClose={onClose}
        >
            <DialogTitle id="confirm-dial-title">{title}</DialogTitle>
            <DialogActions>
                {actions}
            </DialogActions>

        </Dialog>
    )
}

export default ConfirmDialog