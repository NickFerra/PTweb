import "./css/sidebar.css"

function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebar text">
                <a className="sidebutton" href="/home">Home</a>
                <a className="sidebutton" href="/contact">Contact</a>
                <a className="sidebutton" href="/about">About</a>
                <a className="sidebuttontop" href ="/">To Top</a>
            </div>
        </div>
    )
}

export default Sidebar;