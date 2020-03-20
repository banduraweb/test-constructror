import React from 'react';
import Header from './components/Header'
import './App.css';
import AsideNavigator from "./components/AsideNavigator/AsideNavigator";


function App() {
    return (
        <div>

           <Header/>

            <AsideNavigator/>


            <div id="propwrap">
                <div id="properties">
                    <div id="close">
                        <img src="assets/close.svg"/>
                    </div>
                    <p id="header2">Properties</p>
                    <div id="propswitch">
                        <div id="dataprop">Data</div>
                        <div id="alertprop">Alerts</div>
                        <div id="logsprop">Logs</div>
                    </div>
                    <p className="inputlabel">Select database</p>
                    <div className="dropme">Database 1 <img src="assets/dropdown.svg/"/></div>
                    <p className="inputlabel">Check properties</p>
                    <div className="dropme">All<img src="assets/dropdown.svg"/></div>
                    <div className="checkus"><img src="assets/checkon.svg"/><p>Log on successful performance</p></div>
                    <div className="checkus"><img src="assets/checkoff.svg"/><p>Give priority to this block</p></div>
                </div>
                <div id="divisionthing"></div>
                <div id="removeblock">Delete blocks</div>
            </div>

        </div>
    );
}

export default App;
