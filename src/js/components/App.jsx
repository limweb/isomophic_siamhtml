'use strict';
import React from 'react';
 
// โหลดความสามารถของ react-router มาใช้งาน
import { Link } from 'react-router';
 
class App extends React.Component {
 
    // ใส่ link ไปยังหน้า Home และ About
    render() {
        return (
            <div>
                <header>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><Link to='/'>Link Home</Link></li>
    					<li><Link to='/about'>Link About</Link></li>
                    </ul>
                </header>
                {this.props.children}
            </div>
        );
   }
}
 
export default App;

//=============== old ====================
// import React from 'react';
 
// class App extends React.Component {
 
//     render() {
//         return (
//             <div>
//                 Hello, SiamHTML ES6 /component/App.jsx!
//             </div>
//         );
//    }
// }
 
// export default App;
