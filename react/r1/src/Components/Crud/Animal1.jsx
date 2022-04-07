function Animal1({animal}) {


    return (
        <li>
            <div className="content">
            <span>{animal.type}</span>
            <i>{animal.color}</i>
            {
                animal.isalive ? <div className="isalive"></div> : null
            }
            </div>
            <div className="buttons">
                <button className="edit">edit</button>  {/* mygtuko edit kūrimas */}
                <button className="delete">delete</button> {/* mygtuko delete kūrimas */}
            </div>
        </li>
    )
}

export default Animal1;