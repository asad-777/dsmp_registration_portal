export default function NavBar(){
    return(
        <>
        <div className={`navbar
            max-w-[95%] mx-auto
            lg:mt-8 mt-4 lg:px-8 lg:border-4
            rounded-xl text-white bg-primary shadow-xl border-2 border-secondary/30`}>
        <div className="navbar-start"><img src="./idk.png" className="max-h-20 object-contain" alt="dsmp_logo"></img></div>
        <div className="navbar-center lg:text-4xl text-lg underline underline-offset-2"><h1>DSMP Registration Portal</h1></div>
        <div className="navbar-end"><img src="./gcu_logo.png" className="max-h-20 object-contain" alt="GCU_logo"></img></div>
        </div>
        </>
    )
}