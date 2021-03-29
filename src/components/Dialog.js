let dialogStyles = {
    width: '500px',
    minWidth: '300px',
    maxWidth: '500px',
    height: '500px',
    maxHeight: '85%',
    margin: '0 auto',
    position: 'fixed',
    zIndex: '999',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    border: "solid 1px grey",
    marginLeft: "-1px"
};

function Dialog(props) {
        let dialog = (
                <div>
                    <div>
                    </div>
                    <div style={dialogStyles}>
                        <div>{props.children}</div>
                    </div>
                </div>
        );
        if (!props.isOpen) {
            dialog = null;
        }

        return (
                <div onMouseLeave={() => props.mouseLeft()} onMouseEnter={() => props.mouseOn()}>
                  {dialog}
                </div>
        )
}

export default Dialog;
