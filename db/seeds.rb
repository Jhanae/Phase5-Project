Genre.reset_column_information
User.destroy_all
Profile.destroy_all
Genre.destroy_all
Favorite.destroy_all

    puts "👩🏾‍🔬 Seeding Users..."

    User.create([
        { email: "user1@mail.com", password: "123testing"},
        { email: "bakugorules@mail.com", password: "123testing"},
        { email: "flatiron@mail.com", password: "123testing"},
        ]) 

    puts "👩🏾‍🔬 Seeding profile..."
    Profile.create([
        { username: "Sheryl", user_id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGeBPUcS5Bm30caKsk0HPiELwH2NJ465rTIQ&usqp=CAU", fav_actor: "Will Smith", fav_region: "USA", fav_genre: "Comedy"},
        { username: "Backugo", user_id: 2, image: "https://wallpapercave.com/wp/wp5624831.jpg", fav_actor: "Will Smith", fav_region: "USA", fav_genre: "Drama"},
        { username: "Ang", user_id: 3, image: "data:image/jpeg;base64,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",
        fav_actor: "Kevin Hart", fav_region: "USA", fav_genre: "Action"},
        ])

    Genre.create([
        { name: "Action"},
        { name: "Adventure"},
        { name: "Action"},
        { name: "Comedy"},
        { name: "Crime"},
        { name: "Drama"},
        { name: "Family"},
        { name: "Fantasy"},
        { name: "Horror"},
        { name: "Paranormal"},
        { name: "Psychological"},
        { name: "Romance"},
        { name: "SCI-FI"},
        { name: "Supernatural"},
        { name: "Thriller"},
        { name: "Western"}
    ])
    puts "👩🏾‍🔬 Seeding genre..."
