const user = {
    name: "Vasya",
    lastname: "Gerbov",
    email: "qwerty@mail.ru",
    id: "1",
    about: "sjngsjkgnsngvsdnfgnjd",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQluGm9nShM7af_jripj8TvBNaZdF_XCAe2rQ&usqp=CAU"
}

const users = {
    0: {name: "Никон", lastname: "Гребнев"},
    1: {name: "Мирослав", lastname: "Смелоч"},
    2: {name: "Мефодий", lastname: "Дмитриев"},
    3: {name: "Антонина", lastname: "Карачёва"},
    4: {name: "Никон", lastname: "Гребнев"},
    5: {name: "Антонина", lastname: "Фотеева"},
    6: {name: "Алина", lastname: "Стрельникова"},
    7: {name: "Глеб", lastname: "Фотеев"},
    8: {name: "Ефрем", lastname: "Кожуров"},
    9: {name: "Мефодий", lastname: "Бессонов"},
    10: {name: "Наталия", lastname: "Кожурова"}
}

export function getUser() {
    return user
}
export function getUsers() {
    return users
}