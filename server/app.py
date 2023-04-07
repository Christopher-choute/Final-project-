from flask import Flask, make_response, request, jsonify, session
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS
from sqlalchemy.exc import IntegrityError

from config import app, db, api
from models import Fish, Fishtank,FishSpeciesTank,User

# Views go here!
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)

@app.route('/')
def home():
    return ''

@app.route('/fishes', methods=['GET', 'POST'])
def fish():
    fishes = Fish.query.all()
    if request.method == 'GET':
        fishes_dict = [fish.to_dict() for fish in fishes]

        response = make_response(
            jsonify(fishes_dict),
            200
        )

        return response
    

    elif request.method == 'POST':

        try:
            new_fish = Fish(
                species = request.get_json()['species'],
                tank_size = request.get_json()['tank size'],
                water_preference = request.get_json()['water preference'],
                temperature_preference = request.get_json()['temperature preference'],
                image = request.get_json()['image'],
                aggressiveness = request.get_json()['aggressiveness'],
                life_expectancy = request.get_json()['life expectancy'],
                price = request.get_json()['price']
            )
            db.session.add(new_fish)
            db.session.commit()

            response = make_response(
                jsonify(new_fish),
                201
            )

        except ValueError:

            response = make_response(
                {"error": "validation errors"},
                400
            )
    return response

@app.route('/fishtanks', methods=['GET'])
def fishtank():
    fishtanks = Fishtank.query.all()
    fishtanks_dict = [fishtank.to_dict() for fishtank in fishtanks]

    response = make_response(
        jsonify(fishtanks_dict),
        200
    )

    return response

class Signup(Resource):
    
    def post(self):

        request_json = request.get_json()

        username = request_json.get('username')
        password = request_json.get('password')
        image_url = request_json.get('image_url')
        bio = request_json.get('bio')

        user = User(
            username=username,
            image_url=image_url,
            bio=bio
        )

        # the setter will encrypt this
        user.password_hash = password

        print('first')

        try:

            print('here!')

            db.session.add(user)
            db.session.commit()

            session['user_id'] = user.id

            print(user.to_dict())

            return user.to_dict(), 201

        except IntegrityError:

            print('no, here!')
            
            return {'error': '422 Unprocessable Entity'}, 422
        
class CheckSession(Resource):
    
    def get(self):

        if session.get('user_id'):

            user = User.query.filter(User.id == session['user_id']).first()

            return user.to_dict(), 200

        return {'error': '401 Unauthorized'}, 401
    
class Login(Resource):
    
    def post(self):

        request_json = request.get_json()

        username = request_json.get('username')
        password = request_json.get('password')

        user = User.query.filter(User.username == username).first()

        if user:
            if user.authenticate(password):

                session['user_id'] = user.id
                return user.to_dict(), 200

        return {'error': '401 Unauthorized'}, 401
    
class Logout(Resource):
    
    def delete(self):
        
        if session.get('user_id'):
            
            session['user_id'] = None
            
            return {}, 204
        
        return {'error': '401 Unauthorized'}, 401

api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Logout, '/logout', endpoint='logout')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
