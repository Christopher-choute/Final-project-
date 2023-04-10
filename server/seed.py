#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app import app
from models import db, Fish, Fishtank, FishSpeciesTank, User, Review
from config import bcrypt
# from faker import Faker
# Remote library imports
if __name__ == '__main__':
    
   
    with app.app_context():

        print("Deleting data...")
        db.session.query(Fish).delete()
        db.session.query(Fishtank).delete()
        db.session.query(FishSpeciesTank).delete()
        db.session.query(User).delete()

        print('Starting seed...')

        print("Creating Fish...")
        fish1 = Fish(species = 'Arowana' , price = 160, tank_size = '250G', water_preference = 'Freshwater', temperature_preference = '75-86', aggressiveness = 'high', life_expectancy = '10 - 15 years', image = 'https://cdn.shopify.com/s/files/1/1980/0633/products/silver-arowana.jpg?v=1627400936')
        fish2 = Fish(species = 'Pompadour' , price = 60, tank_size = '75G', water_preference = 'Freshwater', temperature_preference = '82-84', aggressiveness = 'moderate', life_expectancy = '10 years', image = 'https://tackleboxbabe.com/wp-content/uploads/2023/01/HDimg-Launch2020-16.jpg')
        fish3 = Fish(species = 'Corydoras' , price = 6.99, tank_size = '20G', water_preference = 'Freshwater', temperature_preference = '72-82', aggressiveness = 'low', life_expectancy = '5 years', image = 'https://corycatfish.com/wp-content/uploads/2020/12/Albino_Cory_Cat-min-2.jpg')
        fish4 = Fish(species = 'Plecostomus' , price = 40, tank_size = '150G', water_preference = 'Freshwater', temperature_preference = '75-82', aggressiveness = 'low', life_expectancy = '10 - 15 years', image = 'https://fishkeepingfans.com/wp-content/uploads/2021/08/Bristlenose-Pleco.jpg')
        fish5 = Fish(species = 'Glass Catfish' , price = 8.99, tank_size = '30G', water_preference = 'Freshwater', temperature_preference = '75-80', aggressiveness = 'low', life_expectancy = '7 - 8  years', image = 'https://fisharoma.com/wp-content/uploads/2019/11/Glass-Catfish.jpg')
        fish6 = Fish(species = 'Scissortail Rasbora' , price = 13.99 , tank_size = '30G', water_preference = 'Freshwater', temperature_preference = '77-82', aggressiveness = 'low', life_expectancy = '4-7 years', image = 'https://www.fishkeepingworld.com/wp-content/uploads/2022/03/Scissortail-Rasbora-tankmates.jpg?ezimgfmt=rs:372x279/rscb10/ngcb10/notWebP')
        fish7 = Fish(species = 'Flowerhorn' , price = 180, tank_size = '75G', water_preference = 'Freshwater', temperature_preference = '80-85', aggressiveness = 'high', life_expectancy = '10-12 years', image = 'https://www.hepper.com/wp-content/uploads/2023/02/flowerhorn-cichlid-in-aquarium_luis2499-Shutterstock.jpg')
        fish8 = Fish(species = 'Tiger shovelnose catfish' , price = 50, tank_size = '180G', water_preference = 'Freshwater', temperature_preference = '75-86', aggressiveness = 'low', life_expectancy = '18 - 25 years', image = 'https://aquadiction.world/img/profile/1037-tiger-shovelnose-catfish.jpg')
        fish9 = Fish(species = 'Crayfish' , price = 65, tank_size = '10G', water_preference = 'Freshwater', temperature_preference = '64-77', aggressiveness = 'high', life_expectancy = '2 - 3', image = 'https://cdn.shopify.com/s/files/1/1163/2672/products/Imperial-Purple-Crayfish-Small-8_1024x1024.jpg?v=1656632340')
        fish10 = Fish(species = 'Mudskipper' , price = 20, tank_size = '38G', water_preference = 'Brackish', temperature_preference = '68-78', aggressiveness = 'high', life_expectancy = '5 years', image = 'https://johnhutchingsmuseum.org/wp-content/uploads/2021/03/Atlantic-Mudskipper-Closeup.jpg')
        fish11 = Fish(species = 'Axolotl', price = 150, tank_size = '30G', water_preference = 'Freshwater', temperature_preference = '64-68', aggressiveness = 'high', life_expectancy = '15 years', image = 'https://cdn.shopify.com/s/files/1/0621/0771/3705/products/image_dedc5981-899b-4e63-b0bf-98c10efcc6ab.jpg?v=1680374259&width=600')
        fish12 = Fish(species = 'pipa pipa toad' , price = 60, tank_size = '20G', water_preference = 'Freshwater', temperature_preference = '70-75', aggressiveness = 'low', life_expectancy = '7 years', image = 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Pipa_pipa01.jpg')
        fish13 = Fish(species = 'Siamese fighting fish' , price = 25, tank_size = '5G', water_preference = 'Freshwater', temperature_preference = '75-80', aggressiveness = 'high', life_expectancy = '2-5 years', image = 'https://home.adelphi.edu/~ve21375/betta%20fish%20home%201.jpg')
        fish14 = Fish(species = 'Black Ghost Knifefish' , price = 20, tank_size = '180G', water_preference = 'Freshwater', temperature_preference = '75-78', aggressiveness = 'low', life_expectancy = '7 years', image = 'https://www.fishlaboratory.com/wp-content/uploads/2021/11/Black-Ghost-Knife-Fish.jpeg')
        fish15 = Fish(species = 'Oscar' , price = 10, tank_size = '55G', water_preference = 'Freshwater', temperature_preference = '75-80', aggressiveness = 'high', life_expectancy = '10-20 years', image = 'https://cdn.shopify.com/s/files/1/0311/3149/articles/featured_image_-_oscar_cichlid_fish.jpg?v=1663363956')
        fish15 = Fish(species = 'Octopus' , price = 200, tank_size = '75G', water_preference = 'Saltwater', temperature_preference = '59-61', aggressiveness = 'high', life_expectancy = '1-5 years', image = 'https://squeaksandnibbles.com/wp-content/uploads/2022/04/octopus-SN-long.jpg')
        fish16 = Fish(species = 'Dragon Eel' , price = 800, tank_size = '180G', water_preference = 'Saltwater', temperature_preference = '65-78', aggressiveness = 'high', life_expectancy = '25-30 years', image = 'https://www.learnaboutnature.com/wp-content/uploads/Dragon-Moray-Eel.jpg')
        fish18 = Fish(species = 'Spiny box burrfish' , price = 45, tank_size = '180G', water_preference = 'Saltwater', temperature_preference = '68-78', aggressiveness = 'semi', life_expectancy = '5-8 years', image = 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/3467790-center-1')
        fish19 = Fish(species = 'Mantis Shrimp' , price = 138, tank_size = '10G', water_preference = 'Saltwater', temperature_preference = '72-80', aggressiveness = 'high', life_expectancy = '20 years', image = 'https://aquariumbreeder.com/wp-content/uploads/2020/01/Mantis-shrimp-logo.jpg')
        fish20 = Fish(species = 'Starfish' , price = 35, tank_size = '125G', water_preference = 'Saltwater', temperature_preference = '72-78', aggressiveness = 'low', life_expectancy = '35 years', image = 'https://www.fantaseaaquariums.com/wp-content/uploads/2022/05/Aquarium-starfish.jpg')
        fish21 = Fish(species = 'Redtail catfish' , price = 24, tank_size = '2000G', water_preference = 'Freshwater', temperature_preference = '68-80', aggressiveness = 'mild', life_expectancy = '15 years', image = 'https://fishkeepingfans.com/wp-content/uploads/2021/10/Redtail-Catfish-2.jpg')
        fish22 = Fish(species = 'Blue Tang' , price = 100, tank_size = '180G', water_preference = 'Saltwater', temperature_preference = '73-82', aggressiveness = 'Mild', life_expectancy = '8-20 years', image = 'https://www.americanoceans.org/wp-content/uploads/2021/01/blue-tangs-1-scaled.jpg')
        fish23 = Fish(species = 'Clownfish' , price = 20, tank_size = '30G', water_preference = 'Saltwater', temperature_preference = '75-80', aggressiveness = 'high', life_expectancy = '3-5 years', image = 'https://www.fantaseaaquariums.com/wp-content/uploads/2020/03/clownfish.jpg')
        fish24 = Fish(species = 'Weedy sea dragon ' , price = 3499, tank_size = '180G', water_preference = 'Saltwater', temperature_preference = '68', aggressiveness = 'low', life_expectancy = '5-7 years', image = 'https://i.natgeofe.com/n/97762bed-8c67-4130-a050-9243d9cf403f/weedy-sea-dragon_3x4.jpg')
        fish25 = Fish(species = 'Black diamond stingray' , price = 650, tank_size = '265G', water_preference = 'Freshwater', temperature_preference = '68-88', aggressiveness = 'low', life_expectancy = '19 - 28 years', image = 'https://reefbuilders.com/wp-content/blogs.dir/1/files/2011/03/black-diamond-stingray.jpg')
        fish26 = Fish(species = 'Lionfish' , price = 100, tank_size = '38G', water_preference = 'Saltwater', temperature_preference = '68-78', aggressiveness = 'high', life_expectancy = '10 years', image = 'https://www.worldlifeexpectancy.com/images/a/w/b/pterois-volitans/pterois-volitans.jpg')
        fish27 = Fish(species = 'Anegelfish' , price = 25, tank_size = '70G', water_preference = 'Freshwater', temperature_preference = '77-82', aggressiveness = 'low', life_expectancy = '5 years', image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Group_of_Pterophyllum_Altum.jpg/800px-Group_of_Pterophyllum_Altum.jpg')
        fish28 = Fish(species = 'Colombian Shark Catfish' , price = 16, tank_size = '350G', water_preference = 'Brackish', temperature_preference = '75-80', aggressiveness = 'low', life_expectancy = '10-15 years', image = 'https://www.aquariumsource.com/wp-content/uploads/2022/07/cs.jpg')
        fish29 = Fish(species = 'Oranda Goldfish' , price = 30, tank_size = '10G', water_preference = 'Freshwater', temperature_preference = '65-72', aggressiveness = 'low', life_expectancy = '8 - 15', image = 'https://petkeen.com/wp-content/uploads/2021/01/Oranda-Goldfish_Nantawat-Chotsuwan_shutterstock.jpg')
        fish30 = Fish(species = 'Lungfish' , price = 150, tank_size = '60G', water_preference = 'Freshwater', temperature_preference = '76-86', aggressiveness = 'high', life_expectancy = '100 years', image = 'https://animals.sandiegozoo.org/sites/default/files/2019-12/hero-westafricanlungfish.jpg')

        fishes = [fish1, fish2, fish3, fish4, fish5, fish6, fish7, fish8,fish9,fish10, fish11,fish12, fish13, fish14, fish15, fish16,fish18, fish19, fish20, fish21, fish22, fish23, fish24, fish25, fish26, fish27, fish28, fish29, fish30]
            # Seed code goes here!

        print('creating Tanks...')
        Ten = Fishtank(tank_name ='10 Gallon', price = '$10', image ='https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/170917-center-2')
        Twenty = Fishtank(tank_name ='20 Gallon',price = '$20', image ='https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2773074-center-2')
        Thirty = Fishtank(tank_name ='30 Gallon',price = '$30', image ='https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2773074-center-2')
        Forty = Fishtank(tank_name ='40 Gallon', price = '$40',image ='https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/170968-center-1')
        Fifty_Five = Fishtank(tank_name ='50 Gallon',price = '$55', image ='https://m.media-amazon.com/images/I/91xmGAbd-yL._AC_SX466_.jpg')
        Seventy = Fishtank(tank_name = '75 five', price = '$75', image ='https://assets.petco.com/petco/image/upload/f_auto,q_auto/660680-center-1')
        HundredAndFifty = Fishtank(tank_name ='125',price = '$125', image='https://m.media-amazon.com/images/I/31xD4YrXtAL._AC_.jpg')
        THREEHUNDRED = Fishtank(tank_name = '300', price = '$300', image= 'https://advancedaquariumconcepts.com/wp-content/uploads/2016/03/300-DD.jpg')

        fishtanks = [Ten, Twenty, Thirty, Forty, Fifty_Five, Seventy, HundredAndFifty,THREEHUNDRED]

        print('creating Users...')

        user1 = User(username='Chris', email='Chris@example.com')
        user2 = User(username='Justin', email='Justin@example.com')
        user3 = User(username='Nate', email= 'Nate@example.com')
        user4 = User(username='Ayah', email='Ayah@example.com')
        user5 = User(username='Mathew', email='Mathew@example.com')
        user6 = User(username='Robert', email='Robert@example.com')
        user7 = User(username='Isabella', email='Isabella@example.com')
        user8 = User(username='Areeb', email='Areeb@example.com')
        user9 = User(username='Nickita', email='Nickita@example.com')
        user10 = User(username='Keino', email='Keino@example.com')

        users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10]
        for user in users:
            user.password_hash = bcrypt.generate_password_hash(user.username + 'password').decode('utf-8')
        # user.password_hash = user.username + 'password'
        #We may need the code above for later use    
        print('Creating Reviews...')

        reviews = [
            Review(comment = 'This fish is pretty dope', rating = 5, fishtank_id = 1),
            Review(comment ='Loved this fishtank!', rating='4', fishtank_id=2),
            Review(comment ='Disappointed with the quality of these fish.', rating='2', fish_id=3),
            Review(comment ='This fishtank is amazing!', rating='5', fishtank_id=1),
            Review(comment ='Decent selection of fish.', rating='3', fish_id=2),
            Review(comment ='Very happy with my purchase.', rating='4', fishtank_id=3)
        ]


        db.session.add_all(fishtanks)
        db.session.add_all(fishes)
        db.session.add_all(users)
        db.session.add_all(reviews)
        db.session.commit()