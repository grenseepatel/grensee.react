
function Footer(){
    return(
        <footer>
            <div className='main-content'>
                <div className="left box">
                    <h2>About Us</h2>
                    <div className="content">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam exercitationem facere similique, suscipit aperiam? Quasi obcaecati repellat adipisci tenetur a, repudiandae perspiciatis at voluptatum earum exercitationem sequi, ipsam aut!
                        Ipsam reprehenderit porro itaque ipsa repudiandae, natus quisquam at, tempora vero nihil quos beatae fuga ullam voluptas qui enim ut excepturi. Velit sapiente praesentium nihil cupiditate quasi itaque inventore ratione?</p>
                    </div>
                    <div className="social">
                        <img src="https://cdn-icons-png.freepik.com/256/5968/5968764.png?semt=ais_hybrid"  height={"30px"} width={"30px"} alt="" />
                        <img src="https://cdn-icons-png.freepik.com/256/3955/3955031.png?semt=ais_hybrid"  height={"30px"} width={"30px"} alt="" />
                        <img src="https://cdn-icons-png.freepik.com/256/15707/15707749.png?semt=ais_hybrid"  height={"30px"} width={"30px"} alt="" />
                        <img src="https://cdn-icons-png.freepik.com/256/1384/1384060.png?semt=ais_hybrid" height={"30px"} width={"30px"}alt="" />
                    </div>
                </div>
            
            <div className="center box">
                <h2>Address</h2>
                <div className="content">
                    <div className="place">
                        <span className="text">Dindoli, Surat</span>
                    </div>
                    <div className="phone">
                        <span className="text">+91 9328992509</span>
                    </div>
                    <div className="email">
                        <span className="text">grenseepatel@gmail.com</span>
                    </div>
                </div>
            </div>

            <div className="right box">
                <h2>Contact Us</h2>
                <div className="content">
                    <form action="#">
                        <div className="email">
                            <div className="text">Email *</div>
                            <input type="email" required />
                        </div>
                        <div className="msg">
                            <div className="text">Message *</div>
                            <textarea cols="25" rows="2" required></textarea>
                        </div>
                        <div className="btn">
                            <button type='Submit'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            </footer>
    )
}
export default Footer