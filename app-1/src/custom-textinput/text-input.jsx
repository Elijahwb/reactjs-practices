import React from "react"

class TextInput extends React.Component {
    constructor( props ) {
        super( props )

        this.textInput = React.createRef()
    }
    render () {
        return (
            <input type="text" ref={this.textInput} />
        )
    }
}

export default TextInput