export default function Header (){
    return(
        <div className="header-main-container">
              <div className="">
                        <a href="/">
                            <img className="img-fluid" src="/images/logo.svg" alt="imagen logo" />
                        </a>
                </div>
                <nav>
                    <div className="icon-container">
                        <a href="services">
                        <img src="/images/bt_services.svg" alt="" />
                        </a>
                    </div>
                    <div className="icon-container">
                        <img src="/images/bt_photos.svg" alt="" />
                    </div>
                    <a href="opinions">
                    <div className="icon-container">
                        <img src="/images/bt_opinions.svg" alt="" />
                    </div>
                    </a>
                    <a href="calculator">
                    <div className="icon-container">
                        <img src="/images/bt_calculator.svg" alt="" />
                    </div>
                    </a>
                </nav>
        </div>
    )
}