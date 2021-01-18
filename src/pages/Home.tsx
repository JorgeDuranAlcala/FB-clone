import React, { ReactElement } from 'react'
import Contacts from '../components/Contacts'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function Home(): ReactElement {
    return (
        <>
         <Header/>
            <div className="app__body">
              {/* Sidebar */}
              <Sidebar/>
              {/* Content */}
              <Feed/>
              {/* Contacts */}
              <Contacts/>
            </div>
        </>
    )
}

export default React.memo( Home )
