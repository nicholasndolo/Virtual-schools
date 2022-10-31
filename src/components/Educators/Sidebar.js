import React from 'react'

const Sidebar = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-auto min-vh-100 bg-dark'>
                <ul>
                    <il>
                        <a className='nav-link px=2' href='/lessons'>
                            <i className='bi bi-book' /> <span className='ms-1 d-none d-sm-inline'>Lessons</span>

                        </a>
                    </il>
                    <il>
                        <a className='nav-link px=2' href='/resources'>
                            <i className='bi bi-laptop' /> <span className='ms-1 d-none d-sm-inline'>Resources</span>

                        </a>
                    </il>
                    <il>
                        <a className='nav-link px=2' href='/attendance'>
                            <i className='bi bi-people' /> <span className='ms-1 d-none d-sm-inline'>Attendance</span>

                        </a>
                    </il>

                    <il>
                        <a className='nav-link px=2' href='/tasks'>
                            <i className='bi bi-calendar-event' /> <span className='ms-1 d-none d-sm-inline'>Tasks</span>

                        </a>
                    </il>
                </ul>

            </div>

        </div>
      
    </div>
  )
}

export default Sidebar;
