import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <header >
                <div className="w-full h-screen bg-center bg-cover" style={{ backgroundImage: 'url(https://images.pexels.com/photos/5852135/pexels-photo-5852135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                    <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
                        <div className="text-center">
                            <div className="container px-4 mx-auto">
                                <div className="max-w-4xl mx-auto text-center">
                                    <span className="text-gray-200 font-semibold uppercase tracking-widest">Prodemy - Dwicky Darmawan</span>
                                    <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">enjoy your day with movies and chill</h2>
                                    <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                                        Come on guys, let's watching movie together. We provide all genres of movie. See you at theatre
                                    </p>
                                    <Link to="movies/form" className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200">
                                        Fill Form Movies
                                    </Link>
                                    <Link to="movies/list" className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200">
                                        See Movies List
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>)
}