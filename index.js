import React from 'react';
import ReactDOM from 'react-dom';
import Static from './homework-submission/staticList'
import Dynamic from './homework-submission/dynamicList'

const App =()=>{
    return(
        <div>
            <Static description="Get out of bed" detail="Wed Sep 13 2017" />
            <Static description="Brush teeth" detail="Thu Sep 14 2017" />
            <Static description="Eat breakfast" detail="Fri Sep 15 2017" />
            <Dynamic />

        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('thisIsWhereReactIsInjected'));


