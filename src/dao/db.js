const sqlite = require('sqlite3').verbose()

const database = new sqlite.Database('JazzMap.db')
const schema_musician = `create table if not exists musician(
    id integer primary key autoincrement,
    name text,
    birth text,
    death text,
    photoPath text,
    intro text,
    profileKey text
)
`
const schema_song = `create table if not exists song(
    id integer primary key autoincrement,
    name text,
    ablumId integer
)`

const schema_ablum = `create table if not exists ablum(
    id integer primary key autoincrement,
    name text
)`

const schema_musician_album_rela = `create table if not exists musician_album_relation(
    id integer primary key autoincrement,
    musicianId integer,
    albumId integer
)`

database.run(schema_musician)
database.run(schema_ablum)
database.run(schema_song)
database.run(schema_musician_album_rela)

const selectAllMusician = () => new Promise((res, rej) => {
    database.all('select * from musician', (err, rows) => {
        if (err) {
            rej(err)
        } else {
            res(rows)
        }
    })
})

const selectAblumIdsByMusician = (id) => new Promise((res, rej) => {
    database.all('select albumId from musician_album_relation where musicianId = ?', [id], (err, rows) => {
        if (err) {
            rej(err)
        } else {
            res(rows)
        }
    })
})

module.exports = {
    selectAllMusician,
    selectAblumIdsByMusician
}