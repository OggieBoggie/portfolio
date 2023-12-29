
export default function HomeHero() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-custom-blue" style={{ backgroundImage: 'url(/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
            <h1 className="text-white text-6xl font-bold tracking-tight shadow-lg">
                My name is Tommy Nguyen
            </h1>
            <h2 className="text-white text-xl font-semibold tracking-tight p-2">I am an aspiring full-stack developer and cloud engineer</h2>
        </div>
    );
}