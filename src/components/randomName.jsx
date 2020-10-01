class User{
    constructor(name,lastname) {
        this.name = name;
        this.lastname = lastname;
    }
}
let names = ['Евстигней','Мирослав','Кондратий','Ефрем','Мефодий','Василий','Никон','Агафон','Глеб','Семён','Ефросиния','Жанна','Алиса','Наталия','Антонина','Любовь','Марта','Дина','Наталья','Алина'];
let lastnames = ['Бессонов','Гребнев','Сыропоршнев','Стрельников','Карачёв','Кожуров','Смелоч','Тёмкин','Фотеев','Дмитриев'];

let users = {};
for (let i=0; i<11; i++){
    let nameIndex = getRandom(0,names.length);
    let name = names[nameIndex];
    let lastname = lastnames[getRandom(0,lastnames.length)];
    users[i] = new User(name,nameIndex>9?lastname+'а':lastname);
}
console.log(users);

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

