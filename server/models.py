from sqlalchemy_serializer import SerializerMixin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from config import db, bcrypt
from sqlalchemy.ext.hybrid import hybrid_property

# metadata = MetaData(naming_convention={
#     "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
# })

# db = SQLAlchemy(metadata=metadata)
# Models go here!

class Fish(db.Model, SerializerMixin):
    __tablename__ = 'fishes'

    serialize_rules = ('-fish_species_tanks', '-created_at', '-updated_at', '-tanks')
    
    id = db.Column(db.Integer, primary_key=True)
    image = db.Column (db.String)
    species = db.Column (db.String)
    price = db.Column(db.Float)
    tank_size = db.Column(db.String)
    water_preference= db.Column(db.String)
    temperature_preference = db.Column(db.String)
    aggressiveness = db.Column(db.String)
    life_expectancy = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    tanks = db.relationship('FishSpeciesTank', backref = 'fish')

    fish_tanks = association_proxy('tanks', 'fishtank')
    

class Fishtank(db.Model, SerializerMixin):
    __tablename__ = 'fishtanks'

    serialize_rules = ('-fish_species_tanks', '-created_at', '-updated_at', '-tanks')

    id = db.Column(db.Integer, primary_key=True)
    tank_name = db.Column(db.Integer)
    image = db.Column(db.String)
    price = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    tanks = db.relationship('FishSpeciesTank', backref = 'fishtanks')

    fish_tanks = association_proxy('tanks', 'fish')

class FishSpeciesTank(db.Model, SerializerMixin):
    __tablename__ = 'fish_species_tanks'

    serialize_rules = ('-fish.fish_species_tanks', '-fishtanks.fish_species_tanks', '-created_at', '-updated_at')

    id = db.Column(db.Integer, primary_key = True)
    created = db.Column(db.DateTime, onupdate = db.func.now())
    updated = db.Column(db.DateTime, onupdate = db.func.now())

    fish_id = db.Column(db.Integer, db.ForeignKey('fishes.id'))
    fishtank_id = db.Column(db.Integer, db.ForeignKey('fishtanks.id'))


class Review (db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    serialize_rules = ('-created_at', '-updated_at')

    id = db.Column(db.Integer, primary_key = True)

    created = db.Column(db.DateTime, onupdate = db.func.now())
    updated = db.Column(db.DateTime, onupdate = db.func.now())
    comment = db.Column(db.String)
    rating = db.Column(db.String)
    fish_id = db.Column(db.Integer, db.ForeignKey('fishes.id'))
    fishtank_id = db.Column(db.Integer, db.ForeignKey('fishtanks.id'))

class User (db.Model, SerializerMixin):
    __tablename__ = 'users'


    serialize_rules = ('-created_at','-updated_at')

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String)

    @hybrid_property
    def password_hash(self):
        raise AttributeError('Password hashes may not be viewed.')

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))

    def repr(self):
        return f'<User {self.username}>'


    





    
    

