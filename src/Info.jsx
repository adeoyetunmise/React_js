import './Info.css'

function Info({user}){
    return <>
    <p 
    style={{
        fontSize: '24px',
        color: 'red',
        fontFamily: 'cursive'
    }}
    >
        
        This is Informative </p>

    <h2>Welcome {user}</h2>
    </>
}

export default Info