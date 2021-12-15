const {selectAllMusician, selectAblumIdsByMusician} = require('../dao/db')

module.exports = (app) => {
    app.get('/api/musicians', (req, res) => {
        selectAllMusician().then(rows => {
            console.log(rows)
            res.send(rows)
        })
    })
}