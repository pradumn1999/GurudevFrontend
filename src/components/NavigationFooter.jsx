import React from 'react';
import "./navigationfooter.css"
const NavigationFooter = () => {
    return (
        <div className="bg-warning text-dark py-4">
            <div className="container">
                <div className="row">
                    {/* <div className="col-md-6">
                        <h5>Navigation</h5>
                        <ul className="list-unstyled">
                            <li><a href="#life" className="text-dark">Life</a></li>
                            <li><a href="#work" className="text-dark">Work</a></li>
                            <li><a href="#wisdom" className="text-dark">Wisdom</a></li>
                            <li><a href="#videos" className="text-dark">Videos</a></li>
                            <li><a href="#blog" className="text-dark">Blog</a></li>
                            <li><a href="#contact" className="text-dark">Contact</a></li>
                        </ul>
                    </div> */}
                    <div className="col-md-6">
                        <h5>Join the mailing list</h5>
                        <form>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            {/* <button type="submit" className="btn btn-dark">Join</button> */}
                            {/* <button type="submit"><a>Join</a></button> */}
                        </form>

<div className='but'>
  <a>Join</a>
</div>


{/* <button className="buttond">
      Button
    </button> */}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavigationFooter;
