import React from 'react';
import { Link } from 'react-router-dom';

const TeamInfo = () => {
    return (
        <div>
            <header>
                <h1>Software Engineering at SFSU</h1>
                <h2>Fall 2023</h2>
                <h3>CSC648 - 848 - 05 </h3>
                <h4>Team 03 or Neon Gators </h4>
            </header>
            <main>
                <p id="p1">About the Team Members:</p>
                <ol>
                    <li><Link to="Site Link"><button>Mozhgan Ahsant</button></Link></li>
                    <li><Link to="/geovanni-valadez"><button>Geovanni Valadez</button></Link></li>
                    <li><Link to="/anthony-silva"><button>Anthony Silva</button></Link></li>
                    <li><Link to="Site Link"><button>Aman Khera</button></Link></li>
                    <li><Link to="Site Link"><button>Ivan</button></Link></li>
                    <li><Link to="/jeremy-tran"><button>Jeremy Tran</button></Link></li>
                </ol>
            </main>
        </div>
    );
}

export default TeamInfo;