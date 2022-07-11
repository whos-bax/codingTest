// 1. 같은 장르끼리 묶기
// 2. 묶인 노래들을 재생 순으로 정렬하기
// 3. 노래를 2개까지 자르기

// 핵심 키워드 : '묶는 것', '정렬'

function solution(genres, plays) {
    const genresMap = new Map();

    genres
        .map((genre, index) => [genre, plays[index]])
        .forEach(([genre, play], index) => {
            const data = genresMap.get(genre) || { total: 0, songs: [] }
            genresMap.set(genre, {
                total: data.total + play,
                songs: [...data.songs, { play, index }]
                    .sort((a, b) => b.play - a.play)
                    .slice(0, 2)
            })
        })

    return [...genresMap.entries()]
        .sort((a, b) => b[1].total - a[1].total)
        .flatMap(item => item[1].songs)
        .map(song => song.index)
}

function solution2(genres, plays) {
    var answer = [];
    const obj = {}
    for (let i = 0; i < genres.length; i++) {
        if (genres[i] in obj) {
            obj[genres[i]].totalPlays += plays[i]
            obj[genres[i]].songs.push([plays[i], i])
        } else {
            obj[genres[i]] = {
                totalPlays: plays[i],
                songs: [[plays[i], i]],
            }
        }
    }
    const sorted_genres = Object.entries(obj).sort((a, b) => b[1].totalPlays - a[1].totalPlays)
    console.log(sorted_genres)
    sorted_genres.forEach(([genre, o]) => {
        o.songs.sort((a, b) => b[0] - a[0])
        for (let i = 0; i < Math.min(2, o.songs.length); i++) {
            answer.push(o.songs[i][1])
        }
    })
    console.log(answer)
    // return answer;
}

solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])
solution2(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])