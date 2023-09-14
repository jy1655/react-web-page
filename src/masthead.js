function masthead() {
    return (
        <header className="header-paddle">
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    {/* <div className="col-lg-8 align-self-end"> */}
                        <h1 className="text-white font-weight-bold">Road navigation for your surroundings</h1>
                        <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 mb-5">우리들은 시각장애인들을 돕기위한 인공지능 흰지팡이를 만들고 있습니다!</p>
                        <a className="btn btn-primary btn-xl" href="#about">Find Out More</a>
                    {/* </div> */}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default masthead;