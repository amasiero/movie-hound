export default interface Movie {
  title: string;
  year: string;
  imdbId: string;
  type: string;
  poster: string;
  plot?: string;
  genre?: string;
  director?: string;
  actors?: string;
  released?: string;
  runtime?: string;
  imdbRating?: string;
}

export const movies: Movie[] = [
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: '1977',
    imdbId: 'tt0076759',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg',
    plot: 'The Imperial Forces, under orders from cruel Darth Vader, hold Princess Leia hostage in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker and Han Solo, captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 and C-3PO to rescue the beautiful princess, help the Rebel Alliance and restore freedom and justice to the Galaxy.',
    genre: 'Action, Adventure, Fantasy',
    director: 'George Lucas',
    actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
    released: '25 May 1977',
    runtime: '121 min',
    imdbRating: '8.6',
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: '1980',
    imdbId: 'tt0080684',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    plot: "Luke Skywalker, Han Solo, Princess Leia and Chewbacca face attack by the Imperial forces and its AT-AT walkers on the ice planet Hoth. While Han and Leia escape in the Millennium Falcon, Luke travels to Dagobah in search of Yoda. Only with the Jedi Master's help will Luke survive when the Dark Side of the Force beckons him into the ultimate duel with Darth Vader.",
    genre: 'Action, Adventure, Fantasy',
    director: 'Irvin Kershner',
    actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams',
    released: '18 Jun 1980',
    runtime: '124 min',
    imdbRating: '8.7',
  },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: '1983',
    imdbId: 'tt0086190',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    plot: 'Luke Skywalker battles Jabba the Hutt and Darth Vader to save his comrades in the Rebel Alliance and triumph over the Galactic Empire. Han Solo and Princess Leia reaffirm their love, and team with Chewbacca, Lando Calrissian, the Ewoks, and droids C-3PO and R2-D2 to aid in the disruption of the Dark Side, and the defeat of the evil emperor.',
    genre: 'Action, Adventure, Fantasy',
    director: 'Richard Marquand',
    actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams',
    released: '25 May 1983',
    runtime: '131 min',
    imdbRating: '8.3',
  },
  {
    title: 'Star Wars: Episode VII - The Force Awakens',
    year: '2015',
    imdbId: 'tt2488496',
    type: 'movie',
    poster: 'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg',
    plot: '30 years after the defeat of Darth Vader and the Empire, Rey, a scavenger from the planet Jakku, finds a BB-8 droid that knows the whereabouts of the long lost Luke Skywalker. Rey, as well as a rogue stormtrooper and two smugglers, are thrown into the middle of a battle between the Resistance and the daunting legions of the First Order.',
    genre: 'Action, Adventure, Sci-Fi',
    director: 'J.J. Abrams',
    actors: 'Daisy Ridley, John Boyega, Oscar Isaac, Domhnall Gleeson',
    released: '18 Dec 2015',
    runtime: '138 min',
    imdbRating: '7.8',
  },
  {
    title: 'Star Wars: Episode I - The Phantom Menace',
    year: '1999',
    imdbId: 'tt0120915',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    plot: "The evil Trade Federation, led by Nute Gunray is planning to take over the peaceful world of Naboo. Jedi Knights Qui-Gon Jinn and Obi-Wan Kenobi are sent to confront the leaders. But not everything goes to plan. The two Jedi escape, and along with their new Gungan friend, Jar Jar Binks head to Naboo to warn Queen Amidala, but droids have already started to capture Naboo and the Queen is not safe there. Eventually, they land on Tatooine, where they become friends with a young boy known as Anakin Skywalker. Qui-Gon is curious about the boy, and sees a bright future for him. The group must now find a way of getting to Coruscant and to finally solve this trade dispute, but there is someone else hiding in the shadows. Are the Sith really extinct? Is the Queen really who she says she is? And what's so special about this young boy?",
    genre: 'Action, Adventure, Fantasy',
    director: 'George Lucas',
    actors: 'Ewan McGregor, Liam Neeson, Natalie Portman',
    released: '19 May 1999',
    runtime: '136 min',
    imdbRating: '6.5',
  },
  {
    title: 'Star Wars: Episode III - Revenge of the Sith',
    year: '2005',
    imdbId: 'tt0121766',
    type: 'movie',
    poster: 'https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg',
    plot: "Nearly three years have passed since the beginning of the Clone Wars. The Republic, with the help of the Jedi, take on Count Dooku and the Separatists. With a new threat rising, the Jedi Council sends Obi-Wan Kenobi and Anakin Skywalker to aid the captured Chancellor. Anakin feels he is ready to be promoted to Jedi Master. Obi-Wan is hunting down the Separatist General, Grievous. When Anakin has future visions of pain and suffering coming Padmé's way, he sees Master Yoda for counsel. When Darth Sidious executes Order 66, it destroys most of all the Jedi have built. Experience the birth of Darth Vader. Feel the betrayal that leads to hatred between two brothers. And witness the power of hope.",
    genre: 'Action, Adventure, Fantasy',
    director: 'George Lucas',
    actors: 'Hayden Christensen, Natalie Portman, Ewan McGregor',
    released: '19 May 2005',
    runtime: '140 min',
    imdbRating: '7.6',
  },
  {
    title: 'Star Wars: Episode II - Attack of the Clones',
    year: '2002',
    imdbId: 'tt0121765',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg',
    plot: "Ten years after the invasion of Naboo, the Galactic Republic is facing a Separatist movement and the former queen and now Senator Padmé Amidala travels to Coruscant to vote on a project to create an army to help the Jedi to protect the Republic. Upon arrival, she escapes from an attempt to kill her, and Obi-Wan Kenobi and his Padawan Anakin Skywalker are assigned to protect her. They chase the shape-shifter Zam Wessell but she is killed by a poisoned dart before revealing who hired her. The Jedi Council assigns Obi-Wan Kenobi to discover who has tried to kill Amidala and Anakin to protect her in Naboo. Obi-Wan discovers that the dart is from the planet Kamino, and he heads to the remote planet. He finds an army of clones that has been under production for years for the Republic and that the bounty hunter Jango Fett was the matrix for the clones. Meanwhile Anakin and Amidala fall in love with each other, and he has nightmarish visions of his mother. They travel to his home planet, Tatooine, to see his mother, and he discovers that she has been abducted by Tusken Raiders. Anakin finds his mother dying, and he kills all the Tusken tribe, including the women and children. Obi-Wan follows Jango Fett to the planet Geonosis where he discovers who is behind the Separatist movement. He transmits his discoveries to Anakin since he cannot reach the Jedi Council. Who is the leader of the Separatist movement? Will Anakin receive Obi-Wan's message? And will the secret love between Anakin and Amidala succeed?",
    genre: 'Action, Adventure, Fantasy',
    director: 'George Lucas',
    actors: 'Hayden Christensen, Natalie Portman, Ewan McGregor',
    released: '16 May 2002',
    runtime: '142 min',
    imdbRating: '6.6',
  },
  {
    title: 'Rogue One: A Star Wars Story',
    year: '2016',
    imdbId: 'tt3748528',
    type: 'movie',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg',
    plot: 'All looks lost for the Rebellion against the Empire as they learn of the existence of a new super weapon, the Death Star. Once a possible weakness in its construction is uncovered, the Rebel Alliance must set out on a desperate mission to steal the plans for the Death Star. The future of the entire galaxy now rests upon its success.',
    genre: 'Action, Adventure, Sci-Fi',
    director: 'Gareth Edwards',
    actors: 'Felicity Jones, Diego Luna, Alan Tudyk',
    released: '16 Dec 2016',
    runtime: '133 min',
    imdbRating: '7.8',
  },
  {
    title: 'Star Wars: Episode VIII - The Last Jedi',
    year: '2017',
    imdbId: 'tt2527336',
    type: 'movie',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg',
    plot: 'Jedi Master-in-hiding Luke Skywalker unwillingly attempts to guide young hopeful Rey in the ways of the force, while Leia, former princess turned general, attempts to lead what is left of the Resistance away from the ruthless tyrannical grip of the First Order.',
    genre: 'Action, Adventure, Fantasy',
    director: 'Rian Johnson',
    actors: 'Daisy Ridley, John Boyega, Mark Hamill',
    released: '15 Dec 2017',
    runtime: '152 min',
    imdbRating: '6.9',
  },
  {
    title: 'Star Wars: Episode IX - The Rise of Skywalker',
    year: '2019',
    imdbId: 'tt2527338',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg',
    plot: 'While the First Order continues to ravage the galaxy, Rey finalizes her training as a Jedi. But danger suddenly rises from the ashes as the evil Emperor Palpatine mysteriously returns from the dead. While working with Finn and Poe Dameron to fulfill a new mission, Rey will not only face Kylo Ren once more, but she will also finally discover the truth about her parents as well as a deadly secret that could determine her future and the fate of the ultimate final showdown that is to come.',
    genre: 'Action, Adventure, Fantasy',
    director: 'J.J. Abrams',
    actors: 'Daisy Ridley, John Boyega, Oscar Isaac',
    released: '20 Dec 2019',
    runtime: '141 min',
    imdbRating: '6.4',
  },
];
