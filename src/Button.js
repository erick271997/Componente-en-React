import PropTypes from 'prop-types'

export function Button({text, name}) {

    return <button onClick={function(){
        console.log('Hola')
    }} >
        {text}  - {name}
    </button>
}
