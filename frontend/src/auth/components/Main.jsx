export default function centeredPageText({children}){
    return (
        <main className="flex h-screen text-5xl items-center justify-center">
            {children}
        </main>
    )
}