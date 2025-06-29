const lessons = [
    {
        "title": "She Will Be Loved (Maroon 5)",
        "genre": "Pop Rock, Soft Rock",
        "description": "Released by Maroon 5 in 2004. This song was the third single from their debut studio album, 'Songs About Jane'. Known for its catchy melody and heartfelt lyrics, it became one of the band's signature songs.",
        "patreonLink": "https://www.patreon.com/posts/44109078",
        "videoId": "BgBRn4c7TUE",
        "publishedDate": "2020-11-20",
        "viewCount": 57000,
        "decade": "00s",
        "difficulty": 2
    },
    {
        "title": "Memories (Maroon 5)",
        "genre": "Pop, Soft Rock",
        "description": "Released by Maroon 5 in 2019. This nostalgic pop song samples the melody from Pachelbel's Canon in D. It's a tribute to lost loved ones and has a more stripped-back sound compared to their usual style.",
        "patreonLink": "https://www.patreon.com/posts/memories-maroon-44478489",
        "videoId": "2UiXi_N8IwM",
        "publishedDate": "2020-12-04",
        "viewCount": 52000,
        "decade": "After 2010",
        "difficulty": 1
    },
    {
        "title": "Don't Stop Me Now (Queen)",
        "genre": "Rock, Power Pop",
        "description": "Released by Queen in 1979. This upbeat rock song has become one of Queen's most popular tracks. Known for its energetic piano riffs and Freddie Mercury's dynamic vocal performance, it's a feel-good anthem that has stood the test of time.",
        "patreonLink": "https://www.patreon.com/posts/dont-stop-me-now-46523753",
        "videoId": "EZKp-qfoSOY",
        "publishedDate": "2021-01-22",
        "viewCount": 105000,
        "decade": "70s",
        "difficulty": 3
    },
    {
        "title": "Afterglow (Ed Sheeran)",
        "genre": "Pop, Folk Pop",
        "description": "Released by Ed Sheeran in 2020. This song was a surprise release after Sheeran's announced break from music. It features Sheeran's signature heartfelt lyrics and acoustic guitar-driven melody, showcasing his storytelling abilities.",
        "patreonLink": "https://www.patreon.com/posts/afterglow-ed-46771291",
        "videoId": "_UwDQ5oc9Qg",
        "publishedDate": "2021-01-29",
        "viewCount": 34000,
        "decade": "After 2010",
        "difficulty": 1
    },
    {
        "title": "Driver's License (Olivia Rodrigo)",
        "genre": "Pop, Indie Pop",
        "description": "Released by Olivia Rodrigo in 2021. This debut single broke Spotify's record for most streams of a song in a single week. It's a power ballad that showcases Rodrigo's emotive vocals and relatable storytelling, resonating strongly with a young audience.",
        "patreonLink": "https://www.patreon.com/posts/drivers-license-47746579",
        "videoId": "BhCXkKfzxlY",
        "publishedDate": "2021-02-19",
        "viewCount": 29000,
        "decade": "After 2010",
        "difficulty": 3
    },
    {
        "title": "Careless Whisper (George Michael)",
        "genre": "Pop, Soft Rock",
        "description": "Released in 1984, 'Careless Whisper' is one of George Michael's most iconic solo tracks. Known for its memorable saxophone riff and emotional lyrics, it became a worldwide hit and remains a popular choice for cover versions.",
        "patreonLink": "https://www.patreon.com/posts/careless-whisper-48661204",
        "videoId": "EwaTAAbmmAo",
        "publishedDate": "2021-03-12",
        "viewCount": 74000,
        "decade": "80s",
        "difficulty": 2
    },
    {
        "title": "Billie Jean (Michael Jackson)",
        "genre": "Pop, Funk",
        "description": "Released in 1983, 'Billie Jean' is one of Michael Jackson's most famous songs. Known for its distinctive bassline and Jackson's iconic dance moves in the music video, it became a cornerstone of 80s pop music.",
        "patreonLink": "https://www.patreon.com/posts/billie-jean-50098189",
        "videoId": "VY0EWCNOQbg",
        "publishedDate": "2021-04-16",
        "viewCount": 558000,
        "decade": "80s",
        "difficulty": 3
    },
    {
        "title": "No Surprises (Radiohead)",
        "genre": "Alternative Rock, Art Rock",
        "description": "Released in 1997, 'No Surprises' is a melancholic and introspective track from Radiohead's acclaimed album 'OK Computer'. Its gentle melody contrasts with its darker lyrical themes, creating a hauntingly beautiful song.",
        "patreonLink": "https://www.patreon.com/posts/no-surprises-50794621",
        "videoId": "XeD4XFc71Z0",
        "publishedDate": "2021-05-03",
        "viewCount": 33000,
        "decade": "90s",
        "difficulty": 3
    },
    {
        "title": "Fix You (Coldplay)",
        "genre": "Alternative Rock, Pop Rock",
        "description": "Released in 2005, 'Fix You' is one of Coldplay's most popular and emotional songs. Known for its building crescendo and uplifting lyrics, it has become an anthem of hope and comfort for many listeners.",
        "patreonLink": "https://www.patreon.com/posts/coldplay-fix-you-51518808",
        "videoId": "ovioVl91jjI",
        "publishedDate": "2021-05-22",
        "viewCount": 36000,
        "decade": "00s",
        "difficulty": 1
    },
    {
        "title": "Killing Me Softly (Roberta Flack)",
        "genre": "Soul, R&B",
        "description": "Originally released by Lori Lieberman in 1971, Roberta Flack's 1973 version became a huge hit. The song's emotional lyrics and Flack's soulful delivery have made it a timeless classic, covered by many artists over the years.",
        "patreonLink": "https://www.patreon.com/posts/killing-me-with-52791369",
        "videoId": "32PKPnl_ZqE",
        "publishedDate": "2021-06-25",
        "viewCount": 36000,
        "decade": "70s",
        "difficulty": 1
    },
    {
        "title": "Can't Help Falling in Love (Elvis)",
        "genre": "Pop, Ballad",
        "description": "Released in 1961, this romantic ballad by Elvis Presley has become one of the most beloved love songs of all time. Its simple yet profound lyrics and memorable melody have made it a popular choice for weddings and romantic moments.",
        "patreonLink": "https://www.patreon.com/posts/cant-help-in-53463614",
        "videoId": "6jlVZ-N1gWY",
        "publishedDate": "2021-07-09",
        "viewCount": 65000,
        "decade": "60s",
        "difficulty": 1
    },
    {
        "title": "Shallow (Lady Gaga, Bradley Cooper)",
        "genre": "Country rock, Folk rock",
        "description": "Released in 2018 for the film 'A Star Is Born', 'Shallow' won numerous awards including an Oscar for Best Original Song. Its powerful vocals and emotional depth resonated with audiences worldwide.",
        "patreonLink": "https://www.patreon.com/posts/shallow-early-54734454",
        "videoId": "u9Yue2JN_hc",
        "publishedDate": "2021-08-13",
        "viewCount": 38000,
        "decade": "After 2010",
        "difficulty": 2
    },
    {
        "title": "Mr Brightside (The Killers)",
        "genre": "Alternative rock, Post-punk revival",
        "description": "Released in 2003, 'Mr. Brightside' is The Killers' signature song. Its energetic rhythm and narrative lyrics about jealousy and betrayal have made it a staple of rock radio and a popular karaoke choice.",
        "patreonLink": "https://www.patreon.com/posts/mr-brightside-55674299",
        "videoId": "zCqq7nVUFNw",
        "publishedDate": "2021-09-03",
        "viewCount": 47000,
        "decade": "00s",
        "difficulty": 2
    },
    {
        "title": "Mad World (Gary Jules)",
        "genre": "Alternative rock, Piano rock",
        "description": "Originally by Tears for Fears, Gary Jules' 2001 cover for the film 'Donnie Darko' became more famous than the original. Its haunting melody and introspective lyrics resonate deeply with listeners.",
        "patreonLink": "https://www.patreon.com/posts/mad-world-early-56850205",
        "videoId": "AaWB4IYPvWg",
        "publishedDate": "2021-10-01",
        "viewCount": 23000,
        "decade": "00s",
        "difficulty": 1
    },
    {
        "title": "Shivers (Ed Sheeran)",
        "genre": "Pop, Dance-pop",
        "description": "Released in 2021, 'Shivers' is an upbeat pop song from Ed Sheeran's album '='. Its catchy melody and rhythmic guitar work showcase Sheeran's signature style with a more danceable edge.",
        "patreonLink": "https://www.patreon.com/posts/shivers-early-ad-58053534",
        "videoId": "mLjqNIoHN_o",
        "publishedDate": "2021-10-30",
        "viewCount": 56000,
        "decade": "After 2010",
        "difficulty": 2
    },
    {
        "title": "Easy On Me (Adele)",
        "genre": "Pop, Soul",
        "description": "Released in 2021, 'Easy On Me' marked Adele's return to music after a six-year hiatus. The piano-driven ballad showcases Adele's powerful vocals and emotional depth, exploring themes of personal growth and change.",
        "patreonLink": "https://www.patreon.com/posts/easy-on-me-early-59044524",
        "videoId": "c6OKb4bx5is",
        "publishedDate": "2021-11-26",
        "viewCount": 33000,
        "decade": "After 2010",
        "difficulty": 2
    },
    {
        "title": "Merry Christmas (Ed Sheeran & Elton John)",
        "genre": "Christmas, Pop",
        "description": "Released in 2021, this collaboration between Ed Sheeran and Elton John quickly became a modern Christmas classic. The song combines festive cheer with the signature styles of both artists, creating a heartwarming holiday tune.",
        "patreonLink": "https://www.patreon.com/posts/merry-christmas-60024236",
        "videoId": "Gfd2dbF3Maw",
        "publishedDate": "2021-12-15",
        "viewCount": 17000,
        "decade": "After 2010",
        "difficulty": 2
    },
    {
        "title": "Fly Me To The Moon (Frank Sinatra)",
        "genre": "Jazz, Traditional Pop",
        "description": "Originally written in 1954, Frank Sinatra's 1964 version became the definitive recording. This timeless jazz standard has been covered by countless artists and is known for its romantic lyrics and swinging melody.",
        "patreonLink": "https://www.patreon.com/posts/fly-me-to-moon-63151128",
        "videoId": "b5uRY1f-ueY",
        "publishedDate": "2022-03-01",
        "viewCount": 28000,
        "decade": "60s",
        "difficulty": 2
    },
    {
        "title": "Hey Jude (The Beatles)",
        "genre": "Rock, Pop",
        "description": "Released in 1968, 'Hey Jude' is one of The Beatles' most famous songs. Written by Paul McCartney for John Lennon's son Julian, it became an anthem of consolation and hope, known for its lengthy coda and sing-along ending.",
        "patreonLink": "https://www.patreon.com/posts/hey-jude-early-64116869",
        "videoId": "GxTr7BBPVok",
        "publishedDate": "2022-03-22",
        "viewCount": 45000,
        "decade": "60s",
        "difficulty": 2
    },
    {
        "title": "Chasing Cars (Snow Patrol)",
        "genre": "Alternative Rock, Indie Rock",
        "description": "Released in 2006, 'Chasing Cars' became Snow Patrol's biggest hit. Known for its simple yet emotionally resonant lyrics and melody, the song has been used in numerous TV shows and films, cementing its place in popular culture.",
        "patreonLink": "https://www.patreon.com/posts/chasing-cars-65418389",
        "videoId": "jNDUXBg3oUM",
        "publishedDate": "2022-04-22",
        "viewCount": 36000,
        "decade": "00s",
        "difficulty": 1
    },
    {
        "title": "Teenage Dirtbag (Wheatus)",
        "genre": "Alternative Rock, Power Pop",
        "description": "Released in 2000, 'Teenage Dirtbag' is Wheatus's most famous song. Its catchy melody and relatable lyrics about unrequited high school love have made it a enduring favorite, experiencing renewed popularity through social media in recent years.",
        "patreonLink": "https://www.patreon.com/posts/teenage-dirtbag-66775098",
        "videoId": "xuu_0lcYaFM",
        "publishedDate": "2022-05-23",
        "viewCount": 27000,
        "decade": "00s",
        "difficulty": 2
    },
    {
        "title": "What A Wonderful World (Louis Armstrong)",
        "genre": "Jazz, Traditional Pop",
        "description": "Released in 1967, Louis Armstrong's rendition of 'What A Wonderful World' has become an iconic representation of optimism and appreciation for life's simple beauties. Armstrong's distinctive gravelly voice lends a unique charm to this timeless classic.",
        "patreonLink": "https://www.patreon.com/posts/what-wonderful-68355597",
        "videoId": "ZTqXJ_LMnq8",
        "publishedDate": "2022-07-01",
        "viewCount": 18000,
        "decade": "60s",
        "difficulty": 1
    },
    {
        "title": "Eye of The Tiger (Survivor)",
        "genre": "Rock, Hard Rock",
        "description": "Released in 1982 as part of the Rocky III soundtrack, 'Eye of the Tiger' became an instant hit and an enduring anthem of determination and perseverance. Its memorable opening riff and powerful chorus have made it a staple of workout playlists and sports events.",
        "patreonLink": "https://www.patreon.com/posts/eye-of-tiger-ad-69937816",
        "videoId": "sdC99LdZHa0",
        "publishedDate": "2022-08-02",
        "viewCount": 62000,
        "decade": "80s",
        "difficulty": 2
    },
    {
        "title": "White Flag (Dido)",
        "genre": "Pop, Adult Contemporary",
        "description": "Released in 2003, 'White Flag' is one of Dido's most successful singles. The song's poignant lyrics about refusing to give up on love, combined with Dido's ethereal vocals and a memorable melody, have made it a touching ballad that resonates with many listeners.",
        "patreonLink": "https://www.patreon.com/posts/white-flag-dido-72054740",
        "videoId": "792eXY2vaHM",
        "publishedDate": "2022-09-16",
        "viewCount": 22000,
        "decade": "00s",
        "difficulty": 1
    },
    {
        "title": "Yellow (Coldplay)",
        "genre": "Alternative Rock, Post-Britpop",
        "description": "Released in 2000, 'Yellow' was Coldplay's breakthrough hit. Its dreamy guitar riffs and Chris Martin's emotive vocals create a romantic atmosphere that has made it one of the band's most beloved songs and a popular choice for first dances at weddings.",
        "patreonLink": "https://www.patreon.com/posts/yellow-early-73293140",
        "videoId": "GIpUtY7-Nqg",
        "publishedDate": "2022-10-20",
        "viewCount": 38000,
        "decade": "00s",
        "difficulty": 2
    },
    {
        "title": "Beat It (Michael Jackson)",
        "genre": "Pop Rock, Dance-Rock",
        "description": "Released in 1983, 'Beat It' is one of Michael Jackson's most iconic songs. Known for its hard rock edge and Eddie Van Halen's guitar solo, it broke down racial barriers in music and became a massive crossover hit.",
        "patreonLink": "https://www.patreon.com/posts/beat-it-michael-75213915",
        "videoId": "o1_URNN-bSM",
        "publishedDate": "2022-11-29",
        "viewCount": 43000,
        "decade": "80s",
        "difficulty": 3
    },
    {
        "title": "Do They Know it's Christmas (Band Aid)",
        "genre": "Christmas, Pop Rock",
        "description": "Released in 1984, this charity single brought together numerous UK and Irish music stars to raise money for famine relief in Ethiopia. It has since become a Christmas standard, re-recorded several times for various causes.",
        "patreonLink": "https://www.patreon.com/posts/do-they-know-its-75825578",
        "videoId": "lXp0bDljS8U",
        "publishedDate": "2022-12-13",
        "viewCount": 5700,
        "decade": "80s",
        "difficulty": 1
    },
    {
        "title": "Wonderwall (Oasis)",
        "genre": "Britpop, Rock",
        "description": "Released in 1995, 'Wonderwall' is Oasis's signature song and one of the most iconic tracks of the 1990s. Its distinctive acoustic guitar riff and emotional lyrics have made it a staple of rock radio and a popular choice for cover versions.",
        "patreonLink": "https://www.patreon.com/posts/wonderwall-oasis-78862901",
        "videoId": "BYsFXl72rl8",
        "publishedDate": "2023-02-20",
        "viewCount": 17000,
        "decade": "90s",
        "difficulty": 2
    },
    {
        "title": "Stand By Me (Ben E. King)",
        "genre": "Soul, R&B",
        "description": "Released in 1961, 'Stand By Me' has become one of the most covered songs in popular music. Its timeless message of friendship and support, coupled with its memorable bassline, has ensured its place in music history.",
        "patreonLink": "https://www.patreon.com/posts/stand-by-me-ben-81359364",
        "videoId": "RF9apw1HKzA",
        "publishedDate": "2023-04-12",
        "viewCount": 54000,
        "decade": "60s",
        "difficulty": 2
    },
    {
        "title": "Something (The Beatles)",
        "genre": "Rock, Pop Rock",
        "description": "Released in 1969, 'Something' is considered one of George Harrison's finest contributions to The Beatles. Its beautiful melody and heartfelt lyrics have made it one of the most popular Beatles songs, covered by numerous artists over the years.",
        "patreonLink": "https://www.patreon.com/posts/83949804",
        "videoId": "UT76BUuCCr8",
        "publishedDate": "2023-06-02",
        "viewCount": 10000,
        "decade": "60s",
        "difficulty": 2
    },
    {
        "title": "What Was I Made For? (Billie Eilish)",
        "genre": "Pop, Ballad",
        "description": "Released in 2023 for the 'Barbie' movie soundtrack, this introspective ballad showcases Billie Eilish's signature ethereal vocals and emotional depth. The song's poignant lyrics and delicate instrumentation have resonated with listeners worldwide.",
        "patreonLink": "https://www.patreon.com/posts/what-was-i-made-89310564",
        "videoId": "O5tkvFvhGYs",
        "publishedDate": "2023-09-20",
        "viewCount": 16000,
        "decade": "After 2010",
        "difficulty": 1
    },
    {
        "title": "O Come, All Ye Faithful (Adeste Fideles)",
        "genre": "Christmas Carol, Hymn",
        "description": "A traditional Christmas carol, believed to have been written in the 13th century. This beloved hymn has been translated into many languages and is a staple of Christmas services and concerts around the world.",
        "patreonLink": "https://www.patreon.com/posts/o-come-all-ye-94244316",
        "videoId": "mY_VsX2Kz8E",
        "publishedDate": "2023-12-15",
        "viewCount": 3400,
        "decade": "60s",
        "difficulty": 1
    },
    {
        "title": "It's Beginning to Look a Lot Like Christmas",
        "genre": "Christmas, Traditional Pop",
        "description": "Written by Meredith Willson in 1951, this cheerful holiday song has been covered by numerous artists over the years. Its festive lyrics and melody capture the excitement and anticipation of the Christmas season.",
        "patreonLink": "https://www.patreon.com/posts/its-beginning-to-94244749",
        "videoId": "34K5OS8w7iY",
        "publishedDate": "2023-12-11",
        "viewCount": 4700,
        "decade": "50s",
        "difficulty": 2
    },
    {
        "title": "Time After Time (Cyndi Lauper)",
        "genre": "Pop, Soft Rock",
        "description": "Released in 1983, 'Time After Time' is one of Cyndi Lauper's most enduring hits. Its heartfelt lyrics and memorable melody have made it a classic of 1980s pop, often covered and referenced in popular culture.",
        "patreonLink": "https://www.patreon.com/posts/time-after-time-98518657",
        "videoId": "vlbdFeoxgtQ",
        "publishedDate": "2024-02-16",
        "viewCount": 14000,
        "decade": "80s",
        "difficulty": 2
    },
    {
        "title": "Take on me (a-ha)",
        "genre": "Synth-pop, New Wave",
        "description": "Released in 1985, 'Take On Me' became a-ha's breakthrough hit, thanks in part to its innovative music video. The song's catchy synthesizer riff and vocalist Morten Harket's impressive vocal range have made it an '80s pop classic.",
        "patreonLink": "https://www.patreon.com/posts/take-on-me-ha-100406572",
        "videoId": "4JKFQy_FzPg",
        "publishedDate": "2024-03-16",
        "viewCount": 12000,
        "decade": "80s",
        "difficulty": 2
    },
    {
        "title": "Dream A Little Dream of Me (The Mamas & The Papas)",
        "genre": "Pop, Jazz Standard",
        "description": "While this song dates back to 1931, The Mamas & The Papas' 1968 version with Cass Elliot on lead vocals is particularly famous. Its dreamy melody and romantic lyrics have made it a timeless classic, covered by many artists over the years.",
        "patreonLink": "https://www.patreon.com/posts/dream-little-of-104714796",
        "videoId": "oj5huUkyt_g",
        "publishedDate": "2024-05-25",
        "viewCount": 6500,
        "decade": "60s",
        "difficulty": 2
    },
    {
        "title": "Eleanor Rigby (The Beatles)",
        "genre": "Rock, Pop",
        "description": "Released in 1966, 'Eleanor Rigby' is one of The Beatles most popular songs. Known for its memorable string quartet and poignant lyrics, it continues to be beloved to this day.",
        "patreonLink": "https://www.patreon.com/posts/109317069",
        "videoId": "9IaF5FpKPeQ",
        "publishedDate": "2024-08-02",
        "viewCount": 5800,
        "decade": "60s",
        "difficulty": 2
    },
    {
        "title": "Dancing In The Dark (Bruce Springsteen)",
        "genre": "Rock",
        "description": "Released in 1984, 'Dancing in the Dark' is one of Bruce Springsteen's most popular songs, and is known for its energetic rhythm and relatable lyrics about the struggles of everyday life",
        "patreonLink": "https://www.patreon.com/posts/114176968",
        "videoId": "VNBJpaAH0bo",
        "publishedDate": "2024-10-26",
        "viewCount": 6330,
        "decade": "80s",
        "difficulty": 2
    },
    {
        "title": "Carol of the Bells (Shchedryk)",
        "genre": "Christmas, Classical",
        "description": "A Traditional Ukrainian Carol, 'Carol of the Bells' is one of the most iconic Christmas songs, with a haunting and complex melody.",
        "patreonLink": "https://www.patreon.com/posts/carol-of-bells-117068928",
        "videoId": "cxG3GRphSHM",
        "publishedDate": "2024-12-01",
        "viewCount": 4100,
        "decade": "After 2010",
        "difficulty": 2
    },
    {
        "title": "Vienna (Billy Joel)",
        "genre": "Soft Rock, Piano Rock",
        "description": "Released in 1977 on Billy Joel's album 'The Stranger', 'Vienna' is known for its thoughtful lyrics about taking time to appreciate life and not rushing through it. Though not initially released as a single, it has become one of Joel's most beloved songs, especially among younger generations who discovered it decades after its release.",
        "patreonLink": "https://www.patreon.com/posts/vienna-billy-124271873",
        "videoId": "swuBcJqgrCc",
        "publishedDate": "2025-03-14",
        "viewCount": 5653,
        "decade": "70s",
        "difficulty": 2
    },
    {
        "title": "Perfect (Ed Sheeran)",
        "genre": "Pop, Ballad",
        "description": "Released in 2017 from the album '÷', 'Perfect' is a romantic ballad that became a global success. Renowned for its classic waltz-like time signature and heartfelt lyrics, it's a popular first dance song at weddings.",
        "patreonLink": "https://www.patreon.com/posts/perfect-ed-cover-132177912",
        "videoId": "TgRSAAUSsUA",
        "publishedDate": "2025-06-25",
        "viewCount": 0,
        "decade": "After 2010",
        "difficulty": 2
    }
];
