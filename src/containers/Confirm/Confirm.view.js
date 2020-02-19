import * as React from "react"
import { Dialog } from "@reach/dialog"
import Button from '@material-ui/core/Button'

export default class Confirm extends React.Component {
    state = {
        open: false,
        callback: null
    }

    show = callback => event => {
        event.preventDefault()

        event = {
            ...event,
            target: { ...event.target, value: event.target.value }
        }

        this.setState({
            open: true,
            callback: () => callback(event)
        })
    }

    hide = () => this.setState({ open: false, callback: null })

    confirm = () => {
        this.state.callback()
        this.hide()
    }

    render() {
        return (
            <React.Fragment>
                {this.props.children(this.show)}

                {this.state.open && (
                    <Dialog>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>

                        <Button variant="contained" color="primary" className={classes.button} onClick={this.hide}>
                            Cancel
                        </Button>
                        <Button variant="contained" color="primary" className={classes.button} onClick={this.confirm}>
                            OK
                        </Button>
                    </Dialog>
                )}
            </React.Fragment>
        )
    }
}
