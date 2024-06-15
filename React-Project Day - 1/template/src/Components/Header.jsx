
function Header(){
    return(
        <div className='header'>
            <div className='menu-bar' style={{display:"flex"}}>

                <h3 className='heading'>(:G.P:)</h3>

            <ul>
                <li className='active'><a href="Home">Home</a></li>
                <li><a href="About">About</a>
                    <div className='sub-menu-1'>
                    <ul>
                        <li><a href="Mission">Mission</a></li>
                        <li><a href="Vision">Vision</a></li>
                        <li><a href="Team">Team</a></li>
                    </ul>
                    </div>
                </li>
                <li><a href="Services">Services</a>
                <div className='sub-menu-1'>
                    <ul>
                        <li><a href="Web Designing">Web Designing</a></li>
                        <li><a href="Marketing">Marketing</a></li>
                        <li><a href="Mobile App">Mobile App</a></li>
                    </ul>
                    </div>
                </li>
                <li><a href="Clients">Clients</a>
                <div className='sub-menu-1'>
                    <ul>
                        <li><a href="Indians">Indians</a></li>
                        <li><a href="Foreigner">Foreigner</a></li>
                    </ul>
                    </div>
                </li>
                <li><a href="Investers">Investers</a>
                <div className='sub-menu-1'>
                    <ul>
                        <li><a href="High Invester">High Invester</a></li>
                        <li><a href="low Invester">low Invester</a></li>
                    </ul>
                    </div>
                </li>
                <li><a href="Pricing">Pricing</a>
                <div className='sub-menu-1'>
                    <ul>
                        <li><a href="High">High</a></li>
                        <li><a href="low">low</a></li>
                    </ul>
                    </div>
                </li>
                <li><a href="Training">Training</a>
                <div className='sub-menu-1'>
                    <ul>
                        <li><a href="Beginer">Beginer</a></li>
                        <li><a href="Employee">Employee</a></li>
                    </ul>
                    </div></li>
                
            </ul> 
            </div>
        </div>
    )
}
export default Header