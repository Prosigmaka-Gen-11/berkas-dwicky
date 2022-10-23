import React, { Component } from "react";

export default class Lifecycle extends Component {
    listMovie = [
        {
            id: 1,
            poster: "https://source.unsplash.com/random/100×100/?marvel-movie",
            name: "Marvel",
            releaseDate: "20 Oktober 2022",
            genre: "Fantasy",
            rating: 10,
            duration: "2 hours",
        },
        {
            id: 2,
            poster: "https://source.unsplash.com/random/100×100/?orphan-movie",
            name: "orphan",
            releaseDate: "2 September 2022",
            genre: "Horror",
            rating: 8,
            duration: "1 hours 37 minutes",
        },
        {
            id: 3,
            poster: "https://source.unsplash.com/random/100×100/?batman-movie",
            name: "Batman",
            releaseDate: "13 February 2022",
            genre: "Fantasy",
            rating: 6,
            duration: "1 hours 48 minutes",
        },
        {
            id: 4,
            poster: "https://source.unsplash.com/random/100×100/?turning-red-movie",
            name: "Turning Red",
            releaseDate: "5 July 2022",
            genre: "Cartoon",
            rating: 10,
            duration: "1 hours 51 minutes",
        },
        {
            id: 5,
            poster: "https://source.unsplash.com/random/100×100/?Pinocchio-movie",
            name: "Pinocchio",
            releaseDate: "10 August 2022",
            genre: "Cartoon",
            rating: 8,
            duration: "2 hours",
        },
    ];

    constructor() {
        super();

        this.state = {
            movies: [],
            playing: "",
            hasChanged: false,
        };
    }

    componentDidMount() {
        this.setState({
            movies: this.listMovie,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.hasChanged !== this.state.hasChanged) {
            {

                this.setState({
                    playing: `Grab Your Snacks and Enjoy Your Movie`,
                })

            }
        }
    }

    componentWillUnmount() {
        this.setState({
            movies: ""
        })
    }

    render() {
        const { movies } = this.state;
        return (
            <>
                <div>
                    {/*{movies.map((movie) => (
                        <ol key={movie.id} >
                            Full_Name: {movie.name}, {movie.rating}, {movie.duration}
                        </ol>
                    ))}
                     {movies.map((movie) => (
                        <img src={movie.poster} alt="" />
                    ))} */}

                    {movies &&
                        movies
                            .filter((movie) => movie.id === 1)
                            .map((movie) => (
                                <>
                                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <img className="rounded-t-lg" src={movie.poster} alt="" />
                                        </a>
                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                    {movie.name}
                                                </h5>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                Here are the biggest enterprise technology acquisitions
                                                of 2021 so far, in reverse chronological order.
                                            </p>
                                            {/* Show or Hide Playing */}
                                            <button
                                                type="button" data-drawer-target="drawer-top-example" data-drawer-show="drawer-top-example" data-drawer-placement="top" aria-controls="drawer-top-example"
                                                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                                onClick={() => {
                                                    this.state.hasChanged
                                                        ? this.setState({ hasChanged: false })
                                                        : this.setState({ hasChanged: true });
                                                }}
                                            >
                                                Play Movie
                                            </button>

                                            {this.state.hasChanged ? (
                                                <>


                                                    <div id="drawer-top-example" className="fixed z-40 p-4 bg-black  bottom-10 right-10" tabIndex={-1} aria-labelledby="drawer-top-label">
                                                        <h5 id="drawer-top-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                                                        </svg>
                                                            Play Movie</h5>
                                                        <p className="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400">{this.state.playing}</p>

                                                    </div>


                                                </>
                                            ) : null}

                                        </div>
                                    </div>
                                </>
                            ))}


                </div>
            </>
        );
    }
}
