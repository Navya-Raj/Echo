import { auth } from "../../lib/firebase";
import "./detail.css"

const Detail = () => {
    return (
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Navya</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="info">
                <div className="options">
                    <div className="title">
                        <span>Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="options">
                    <div className="title">
                        <span>Privacy and help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="options">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.unsplash.com/photo-1719258907245-c2bd1a584aef?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <span>photo.jpg</span>
                            </div>
                            <img className="icon" src="./download.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="options">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
                <button className="logout" onClick={() => auth.signOut()}>Logout</button>
            </div>
        </div>
    )
}

export default Detail;