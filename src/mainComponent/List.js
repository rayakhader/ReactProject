import { Link, NavLink} from 'react-router-dom'
function List() {
  return (
    <div className='list'>
      <div>
        <NavLink to="Playing with React.js" >
           <p>Playing with React.js<span className='point'></span></p>
           <p>MAXIME<span className='date'>Jan 07, 2016</span></p>
        </NavLink>
      </div>
      <div>
        <NavLink to="Digest">
           <p>Digest<span className='point'></span></p>
           <p>JOHN<span className='date'>Jan 09, 2016</span></p>
        </NavLink>
      </div>
      <div>
        <NavLink to="Broken PR">
           <p>Broken PR?<span className='point'></span></p>
           <p>EMMA P<span className='date'>Jan 03, 2016</span></p>
        </NavLink>
      </div>
      <div>
        <NavLink to="Join us">
           <p>Join us </p>
           <p>SLACK<span className='date'>Jan 21, 2015</span></p>
        </NavLink>
      </div>
      <div>
        <NavLink to="Concert tickets with sales">
           <p>Concert tikets with sales<span className='point'></span></p>
           <p>ROY GANG<span className='date'>Jan 08, 2016</span></p>
        </NavLink>
      </div>
      <div>
        <NavLink to="Verify your stackOverFlow account">
           <p>Verify your stackOverFlow account</p>
           <p>STACKOVERFLOW<span className='date'>Jan 29, 2016</span></p>
        </NavLink>
      </div>
      <div>
        <NavLink  to="Playing with JS">
           <p>Playing with JS</p>
           <p>JAVASCRIPT<span className='date'>jan 20, 2016</span></p>
        </NavLink>
      </div> 
      <div>
        <NavLink  to="Playing with HTML">
           <p>Playing with HTML</p>
           <p>HYPERTEXT<span className='date'>jan 05, 2016</span></p>
        </NavLink>
      </div>
      <div>
        <NavLink  to="Playing with CSS">
           <p>Playing with CSS</p>
           <p>STYLESHEET<span className='date'>jan 01, 2016</span></p>
        </NavLink>
      </div>
      <div>
        <NavLink  to="Playing with Python">
           <p>Playing with Python</p>
           <p>PYTHON<span className='date'>jan 06, 2016</span></p>
        </NavLink>
      </div>
    </div>
  )
}

export default List