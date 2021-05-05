import "./css/sidebar.css"

function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebar text">
                <button className="sidebutton" href="/home">Home</button>
                <button className="sidebutton" href="/contact">Contact</button>
                <button className="sidebutton" href="/about">About</button>
                <button className="sidebuttontop" href ="/">To Top</button>
            </div>
        </div>
    )
}

export default Sidebar;