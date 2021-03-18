let dialogStyles = {
    width: '1000px',
    maxWidth: '100%',
    height: 'auto',
    maxHeight: '85%',
    margin: '0 auto',
    position: 'fixed',
    zIndex: '999',
    backgroundColor: 'white',
    padding: '10px 20px 40px',
    display: 'flex',
    flexDirection: 'column',
    border: "solid 1px grey"
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
                <div>
                  {dialog}
                </div>
        )
}

export default Dialog;