let rand_user = null

const application = new Vue({
    el: '#application',
    data: {
        image: null,
        imageb: false,
        fullname: 'Jane Doe',
        city: 'Melbourne',
        phone: '+61498 765 432',
        email: 'jane-doe@gmail.com',
        entry: '',
        hobbies: [{
                hobby: 'Surfing'
            },
            {
                hobby: 'Rockclimbing'
            },
            {
                hobby: 'Flying'
            }
        ]
    },
    methods: {
        addHobby: function (e) {
            e.preventDefault()
            let input = this.entry
            this.hobbies.push({
                hobby: input
            })
            this.entry = ''
        },
        deleteHobby: function (hobby) {
    
            this.hobbies.splice(hobby, 1)
        },
        randomise_user: function () {
            fetch('https://randomuser.me/api/').then(function (response) {
                // console.log(response)
                return response.text()
            }).then(function (response) {
                rand_user = JSON.parse(response)
                let user = rand_user.results[0]
                app.fullname = `${user.name.first} ${user.name.last}`
                app.city = user.location.city
                app.phone = user.cell
                app.email = user.email
                app.image = user.picture.large
                app.imageb = true

                console.log(rand_user.results[0].gender)
            }).catch(function (error) {
                console.log(`Something went wrong: ${error}`)
            })
        }
    }
})