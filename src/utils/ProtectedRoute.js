const ProtectedRoute = ({ children }) => {
    const auth = false;
    console.log(13);
    if (true) {
        return (
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">You are not authorized to view this page</h1>
                <Link href="/">
                    <a className="text-blue-500">Go back to home</a>
                </Link>
            </div>
        )
    }


    return (
        <>{children}</>
    )
}

export default ProtectedRoute